import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  publishDate: string;
  categories: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = memo(({ post }: BlogCardProps) => {
  const sanitizedDescription = post.description.replace(/(<([^>]+)>)/gi, "");

  return (
    <Link
      href={`/blogs/${post.id}`}
      aria-label={`Read more about ${post.title}`}
    >
      <div className="bg-intelli-gradient p-[1.5px] rounded-2xl hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.6)] transition-all duration-300">
        <div className="group flex w-full flex-col gap-4 rounded-2xl bg-[#1B1237] p-4">
          <div className="relative w-full">
            <Image
              src={post.image}
              alt={post.title}
              loading="lazy"
              width={400}
              height={250}
              className="h-[250px] w-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(97,0,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.categories.length > 0 ? (
                  post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-500/20 px-2 py-1 text-xs capitalize text-blue-400 transition-colors group-hover:bg-blue-500/30"
                    >
                      {category}
                    </span>
                  ))
                ) : (
                  <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs capitalize text-blue-400">
                    Uncategorized
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400">{post.publishDate}</p>
            </div>
            <h3 className="line-clamp-1 text-xl font-semibold text-white">
              {post.title}
            </h3>
            <p className="line-clamp-3 text-sm text-gray-300">
              {sanitizedDescription}
            </p>
            <Link href={`/blogs/${post.id}`}>
              <Button title="Read More"></Button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;
