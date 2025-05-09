"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import Image from "next/image";
import Swal from "sweetalert2";

import Button from "@/components/Button";
import { useWebContext } from "@/context/ContextProvider";

const Dashboard = () => {
  const router = useRouter();
  const { blogs, loading, setBlogs } = useWebContext(); 
  const [isAdmin, setIsAdmin] = useState(false);
  const adminEmail =
    typeof window !== "undefined" ? localStorage.getItem("intelliadminEmail") : null;

  useEffect(() => {
    const adminTokens = localStorage.getItem("intelliadmintokens");
    if (!adminTokens) {
      setIsAdmin(false);
      router.push("/admin/intelli-admin");
    } else {
      setIsAdmin(true);
    }
  }, [router]);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/delete/${id}`,
        {
          cache: "no-store",
          method: "DELETE",
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        // Update the state to remove the deleted blog from the list
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      } else {
        console.error("Error deleting blog:", response.statusText);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete blog post.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred.",
        icon: "error",
      });
    }
  };
  const logOut = () => {
    localStorage.removeItem("intelliadmintokens");
    localStorage.removeItem("intelliadminusername");
    setIsAdmin(false);
    router.push("/admin/intelli-admin");
  };
  return (
    <>
      {!isAdmin ? (
        <div className="w-full flex justify-center items-center h-screen">
          <div className="h-20 w-20 animate-spin rounded-full text-white border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        </div>
      ) : (
        <div className="p-3 sm:p-5 md:py-10 md:px-20 flex flex-col items-center justify-center">
          <div className="py-4 px-10 w-full text-lg text-white">
            {adminEmail}
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <div>
              <p className="w-full text-lg sm:text-3xl  lg:text-5xl  text-white ">
                Welcome to Admin Panel
              </p>
            </div>
            <div>
              <button
                onClick={logOut}
                className="bg-gradient-to-bl transition-all duration-300 from-red-500 to-red-700 hover:opacity-90 py-1.5 sm:py-2.5 tracking-wide lg:text-base text-xs text-white font-medium sm:px-6 px-2 rounded-lg "
              >
                Logout
              </button>
            </div>
          </div>
          <div className="w-full lg:w-4/5 border border-[#3e4366] rounded-xl  flex flex-col justify-center gap-10 items-center p-2 sm:p-5 my-10">
            <div className=" w-full md:w-4/5 flex flex-row items-center justify-between ">
              <p className="text-gradient  text-xl md:text-3xl font-semibold md:text-center">
                Blog List
              </p>
              <Link href="/admin/dashboard/blog-editor">
                <Button title="Add New Blog" btnType="submit" />
              </Link>
            </div>
            {loading ? (
              <div className="w-full flex justify-center items-center">
                <div className="h-20 w-20 animate-spin rounded-full text-white border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
              </div>
            ) : (
              <div className="lg:w-4/5 w-full h-full flex items-center justify-center">
                <div className="w-full h-full gap-3 flex flex-col">
                  {blogs.length > 0 ? (
                    blogs.map((blog) => (
                      <div
                        key={blog.id}
                        className="w-full flex flex-col sm:flex-row bg-[#121636] justify-between p-3 md:p-6 rounded-xl"
                      >
                        <div className="flex  gap-4 md:gap-6">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            loading="lazy"
                            width={80}
                            height={80}
                            priority={true}
                            className="object-cover rounded-lg w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 hover:opacity-80"
                          />
                          <div className="flex flex-col  gap-1 md:gap-2">
                            <p className="text-sm md:text-lg">{blog.title}</p>
                            <p className="text-xs md:text-sm">
                              {blog.publishDate}
                            </p>
                            <p className="text-xs md:text-sm">
                              {blog.category}
                            </p>{" "}
                            {/* Displaying the category name */}
                          </div>
                        </div>
                        <div className="flex flex-row justify-end items-center md:text-sm text-xs cursor-pointer mt-3 sm:mt-0 ">
                          <Link
                            href={`/admin/dashboard/blog-editor?id=${blog.id}`}
                          >
                            <button className="flex   justify-center text-white items-center mx-3 hover:opacity-80">
                              <FaRegEdit className="mx-1" /> Update
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="flex justify-center text-red-400 items-center hover:opacity-90"
                          >
                            <IoTrashBinOutline className="mx-1" /> Delete
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center p-6 font-medium text-3xl h-full w-full text-red-500">
                      Nothing to show!
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
