import { lusitana } from "@/app/ui/fonts";
import { getAllPostsFromCms } from "@/app/lib/api";
import HeroPost from "@/app/ui/cmsblog/hero-post";
import MoreStories from "@/app/ui/cmsblog/more-stories";

export default async function Page() {
  const listofBlogs = await getAllPostsFromCms();
  console.log(listofBlogs);
  const heroPost = listofBlogs[1];
  const morePosts = listofBlogs.slice(1);
  return (
    <main>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </main>
  );
}
