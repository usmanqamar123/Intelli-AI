"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import PostSidebar from "@/components/PostSidebar";
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/800.css";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  publishDate: string;
  categories: string[];
}

// Helper function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  const entities: { [key: string]: string } = {
    "&amp;": "&",
  };
  return text.replace(/&amp;'/g, (match) => entities[match]);
};

const BlogPostDetail = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();
  const postId = pathname.split("/").pop();

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        setError("Invalid post ID");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/posts/${postId}`,
          { cache: "no-store" }
        );
        if (response.ok) {
          const data = await response.json();
          let imageUrl = "/placeholder.jpg"; // Fallback image
          if (data.featured_media) {
            const mediaResponse = await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/media/${data.featured_media}`
            );
            if (mediaResponse.ok) {
              const mediaData = await mediaResponse.json();
              imageUrl = mediaData.source_url || imageUrl;
            }
          }
          // Fetch category names
          let categoryNames: string[] = [];
          if (data.categories && data.categories.length > 0) {
            const categoriesResponse = await fetch(
              `${
                process.env.NEXT_PUBLIC_API_BASE_URL
              }/wp-json/wp/v2/categories?include=${data.categories.join(",")}`
            );
            if (categoriesResponse.ok) {
              const categoriesData = await categoriesResponse.json();
              categoryNames = categoriesData.map((category: any) =>
                decodeHtmlEntities(category.name)
              );
            }
          }
          setPost({
            id: data.id,
            title: data.title.rendered,
            description: data.content.rendered,
            image: imageUrl,
            publishDate: new Date(data.date).toLocaleDateString(),
            categories:
              categoryNames.length > 0 ? categoryNames : ["Uncategorized"],
          });
        } else {
          setError("Failed to fetch blog post");
        }
      } catch (error) {
        setError("Error fetching blog post");
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-24">
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-3/4">
            <div className="h-8 w-3/4 animate-pulse rounded bg-gray-700"></div>
            <div className="mt-4 h-4 w-1/4 animate-pulse rounded bg-gray-700"></div>
            <div className="mt-6 h-[400px] w-full animate-pulse rounded-2xl bg-gray-700"></div>
            <div className="mt-6 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-full animate-pulse rounded bg-gray-700"
                ></div>
              ))}
            </div>
          </div>
          <div className="w-full xl:w-1/4">
            <div className="h-40 w-full animate-pulse rounded-2xl bg-gray-700"></div>
            <div className="mt-6 h-40 w-full animate-pulse rounded-2xl bg-gray-700"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-16 text-center text-white">
        <p className="text-lg">{error || "Blog post not found"}</p>
        <Link
          href="/blogs"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0923]">
      <div className="mx-auto max-w-[1400px] px-4 py-24">
        {/* Breadcrumbs and Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blogs"
              className="hover:text-blue-500 transition-colors"
            >
              Blogs
            </Link>
            <span>/</span>
            <span className="capitalize text-gray-200">{post.title}</span>
          </div>
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
          >
            <GoArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>

        <div
          className="flex flex-col gap-10 justify-between xl:flex-row"
          style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
        >
          {/* Main Content */}
          <div className="w-full xl:w-[70%]">
            <div className="relative mb-8 p-6 xl:px-0">
              <div className="w-full self-end flex items-center gap-4 mb-6">
                <p className="text-sm text-gray-400">{post.publishDate}</p>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-500/20 px-3 py-1 text-xs capitalize text-blue-400"
                    >
                      {decodeHtmlEntities(category)}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <Image
                src={post.image}
                alt={post.title}
                width={900}
                height={400}
                loading="lazy"
                className="h-[550px] w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl"></div>
            </div>
            <div className=" rounded-2xl p-6 shadow-xl">
              <div className="prose prose-invert max-w-none text-gray-200 prose-headings:font-bold prose-headings:text-white prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-a:text-blue-500 prose-a:hover:underline prose-img:rounded-lg prose-img:shadow-md prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-6 prose-ol:pl-6 prose-li:mb-2">
                <div
                  dangerouslySetInnerHTML={{ __html: post.description }}
                ></div>
              </div>
            </div>
          </div>
          <PostSidebar categories={post.categories} title={post.title} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
