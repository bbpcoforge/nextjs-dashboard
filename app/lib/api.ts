import { PostType, FormFields, CmsPost } from "./definitions";

export async function executeGraphQLForBlogPosts(
  query: string
): Promise<CmsPost[]> {
  const graphQLEndpoint = `${process.env.SF_API_URL}graphql`;
  console.log("graphQLEndpoint", graphQLEndpoint);
  const response = await fetch(graphQLEndpoint, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: { "Content-Type": "application/json" },
  }).then((x) => x.json());
  console.log("=============Res==========");
  console.log(response["data"]["posts"][0]["authorOfPost"]);
  console.log("=============END==========");
  return response["data"]["posts"];
}

export async function getAllPostSlugsFromCms(): Promise<string[]> {
  var query = `
        query {
            posts {
                itemDefaultUrl
            }
        }
    `;

  const blogPosts = await executeGraphQLForBlogPosts(query);
  const slugs = blogPosts.map((x) => x.itemDefaultUrl);
  return slugs;
}

function transformImageUrl(url: string) {
  if (!url.startsWith("http")) {
    url = process.env.SF_URL + url.substring(1);
  }

  return url;
}

function mapCmsBlog(source: CmsPost): PostType {
  return {
    content: source.content,
    excerpt: source.excerpt,
    date: source.dateCreated,
    slug: source.itemDefaultUrl,
    title: source.title,
    author: {
      name: source.authorOfPost[0].title,
      picture: transformImageUrl(source.authorOfPost[0].picture[0].url),
    },
    coverImage: transformImageUrl(source.coverImage[0].url),
    ogImage: {
      url: "", //transformImageUrl(source.openGraphImage[0].url),
    },
  };
}

export async function getPostBySlugFromCms(
  slug: string
): Promise<PostType | null> {
  const modifiedSlug = slug;
  var query = `
        query {
            posts(_filter: {itemDefaultUrl: {_eq: "${modifiedSlug}"}}) {
                id
                title
                excerpt
                content
                dateCreated
                itemDefaultUrl
                openGraphImage {
                    url
                }
                coverImage {
                    url
                }
                authorOfPost {
                    title
                    picture {
                        url
                    }
                }
            }
        }
    `;

  const blogPosts = (await executeGraphQLForBlogPosts(query)).map((x) =>
    mapCmsBlog(x)
  );
  if (blogPosts.length > 0) return blogPosts[0];
  else return null;
}

export async function getAllPostsFromCms(): Promise<PostType[]> {
  var query = `
        query {
            posts {
                id
                title
                excerpt
                content
                dateCreated
                itemDefaultUrl
                openGraphImage {
                    url
                }
                coverImage {
                    url
                }
                authorOfPost {
                    title
                    picture {
                        url
                    }
                }
            }
        }
    `;

  const blogPosts = (await executeGraphQLForBlogPosts(query)).map((x) =>
    mapCmsBlog(x)
  );
  return blogPosts;
}
export async function executeGraphQLForForms(
  query: string
): Promise<FormFields[]> {
  const graphQLEndpoint = `${process.env.SF_API_URL}graphql`;
  console.log("graphQLEndpoint", graphQLEndpoint);
  const response = await fetch(graphQLEndpoint, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: { "Content-Type": "application/json" },
  }).then((x) => x.json());
  console.log("=============Res==========");
  console.log(response["data"]["contactus"][0]["forms"]);
  console.log("=============END==========");
  return response["data"]["contactus"][0]["forms"];
}
export async function getContactusFormFromCms(): Promise<FormFields[]> {
  var query = `
        query {
          contactus {
            id
            title
            forms{
                id
                title
                name
                value
                inputType
                type
                placeholder
                validationMessage
                validationRegex
            }
          }
        }
    `;
  return await executeGraphQLForForms(query);
}
