import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface RecentPost {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  image: string;
}

interface PostSidebarProps {
  categories: string[];
  title: string;
}

// Helper function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  const entities: { [key: string]: string } = {
    "&amp;": "&",
  };
  return text.replace(/&amp;'/g, (match) => entities[match]);
};

const PostSidebar: React.FC<PostSidebarProps> = ({ categories, title }) => {
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/posts?per_page=3`,
          { cache: "no-store" }
        );
        if (response.ok) {
          const data = await response.json();
          const posts: RecentPost[] = await Promise.all(
            data.map(async (post: any) => {
              let imageUrl = "/placeholder.jpg"; // Fallback image
              if (post.featured_media) {
                const mediaResponse = await fetch(
                  `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/media/${post.featured_media}`
                );
                if (mediaResponse.ok) {
                  const mediaData = await mediaResponse.json();
                  imageUrl = mediaData.source_url || imageUrl;
                }
              }
              return {
                id: post.id,
                title: post.title.rendered,
                description: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
                publishDate: new Date(post.date).toLocaleDateString(),
                image: imageUrl,
              };
            })
          );
          setRecentPosts(posts);
        } else {
          console.error("Failed to fetch recent posts");
        }
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div className="xl:sticky top-24 w-full xl:w-[30%] space-y-6 self-start">
      <div className="bg-[#1B1237] rounded-2xl p-4">
        <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-500/20 px-3 py-1 text-xs capitalize text-blue-400"
              >
                {decodeHtmlEntities(category)}
              </span>
            ))
          ) : (
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs capitalize text-blue-400">
              Uncategorized
            </span>
          )}
        </div>
      </div>
      <div className="bg-[#1B1237] rounded-2xl p-4">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Posts</h2>
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-20 w-full animate-pulse rounded-2xl bg-gray-700"
              ></div>
            ))}
          </div>
        ) : recentPosts.length > 0 ? (
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                className="block group"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="h-[80px] w-[80px] rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="text-xs text-gray-400">{post.publishDate}</p>
                    <p className="text-sm !text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-300 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-300">No recent posts found.</p>
        )}
      </div>
    </div>
  );
};

export default PostSidebar;
