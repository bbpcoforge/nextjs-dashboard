import AcmeLogo from "@/app/ui/acme-logo";
import { getAllPostsFromCms } from "@/app/lib/api";
import HeroPost from "@/app/ui/cmsblog/hero-post";
import MoreStories from "@/app/ui/cmsblog/more-stories";

export default async function Page() {
  const listofBlogs = await getAllPostsFromCms();

  const heroPost = listofBlogs[1];
  const morePosts = listofBlogs.slice(1);
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-20">
        <AcmeLogo />
      </div>
      <div className="mt-4">
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
      </div>
    </main>
  );
}
