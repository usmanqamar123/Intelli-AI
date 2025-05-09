"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import BlogCard from "@/components/PublicBlogCard";

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
  return text.replace(/&amp;/g, (match) => entities[match]);
};

const BlogPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 12;

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/posts`,
        {
          cache: "no-store",
        }
      );
      if (response.ok) {
        const data = await response.json();
        const posts: BlogPost[] = await Promise.all(
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
            // Fetch category names
            let categoryNames: string[] = [];
            if (post.categories && post.categories.length > 0) {
              const categoriesResponse = await fetch(
                `${
                  process.env.NEXT_PUBLIC_API_BASE_URL
                }/wp-json/wp/v2/categories?include=${post.categories.join(",")}`
              );
              if (categoriesResponse.ok) {
                const categoriesData = await categoriesResponse.json();
                categoryNames = categoriesData.map((category: any) =>
                  decodeHtmlEntities(category.name)
                );
              }
            }
            return {
              id: post.id,
              title: post.title.rendered,
              description: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
              image: imageUrl,
              publishDate: new Date(post.date).toLocaleDateString(),
              categories:
                categoryNames.length > 0 ? categoryNames : ["Uncategorized"],
            };
          })
        );
        setBlog(posts);
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blog.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blog.length / blogsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const firstCard = blog.find((card) => card.id === blog[0]?.id);

  return (
    <div className="flex w-full flex-col items-center justify-center pt-14 lg:pt-16">
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-white border-r-transparent"></div>
        </div>
      ) : (
        <div className="w-full">
          <div className="hero-section w-full px-0 md:px-4">
            <div className="max-w-[1400px] md:w-[90%] w-full mx-auto px-2 md:px-0 pt-10 md:pt-20 flex flex-col lg:flex-row items-center justify-between text-white">
              {firstCard && (
                <div className="w-full bg-intelli-gradient rounded-2xl p-[1.5px]">
                  <div className="w-full flex md:flex-row gap-5 flex-col text-white md:justify-start justify-center items-start md:items-center bg-[#1B1237] rounded-2xl p-4">
                    <div className="lg:w-3/5 md:w-1/2 h-[400px] w-full">
                      <Image
                        src={firstCard.image}
                        alt={firstCard.title}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="object-cover object-center w-[600px] h-[400px] rounded-2xl"
                      />
                    </div>
                    <div className="lg:w-3/5 md:w-1/2 w-full flex flex-col md:px-6 space-y-4">
                      <p className="w-fit text-sm mb-5 rounded-full bg-gray-800 px-2 py-1">
                        {firstCard.publishDate}
                      </p>
                      <h4 className="!font-medium text-3xl md:text-4xl xl:text-6xl">
                        {firstCard.title}
                      </h4>
                      <p className="text-base">
                        {firstCard.description &&
                        firstCard.description.split(" ").length > 50
                          ? `${firstCard.description
                              .split(" ")
                              .slice(0, 50)
                              .join(" ")}...`
                          : firstCard.description}
                      </p>
                      <Link href={`/blogs/${firstCard.id}`}>
                        <Button title="Read More" className="!w-fit"></Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Blog List Section */}
          <div className="max-w-[1400px] md:w-[90%] w-full mx-auto px-2 md:px-0 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="flex flex-col items-center justify-center w-full p-6 text-center">
                <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Intelliwriter Blog Hub
                </h1>
                <p className="max-w-xl text-gray-300 text-center">
                  Unlock the power of AI-driven content creation with
                  Intelliwriter. Dive into tips, trends, and strategies to craft
                  compelling blogs and visuals effortlessly.
                </p>
              </div>
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-7">
                  {currentBlogs.map((post) => (
                    <div
                      key={post.id}
                      className="break-inside-avoid animate-fade-in"
                    >
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              </div>
              {/* Pagination */}
              <div className="flex justify-center">
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === index + 1
                          ? "bg-purple-gradient text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
