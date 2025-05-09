"use client";

import React, { Suspense, useEffect, useState } from "react";
import Button from "@/components/Button";
import Select from "react-select";
import createBlog from "@/utils/createBlog";
import { MdCloudUpload } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { useWebContext } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";

interface BlogDataProps {
  title: string;
  description: string;
  publishDate: string;
  image: File | null;
  slug: string;
  tags: string;
  category: string;
}

interface BlogValidationDataProps {
  title?: string | null;
  description?: string | null;
  publishDate?: string | null;
  image?: string | null;
  slug?: string | null;
  tags?: string | null;
  category?: string | null;
}

interface CategoryOption {
  label: string;
  value: string;
}

const BlogEditor = () => {
  const [state, setState] = useState<BlogDataProps | null>(null);
  const { blogs, setBlogs } = useWebContext();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const getBlogData = async () => {
    if (id) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/get/${id}`,
          {
            method: "GET",
            cache: "no-cache",
          }
        );
        const data: BlogDataProps = await response.json();
        setFormData(data);
        setState(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const updateBlog = async () => {
    if (id) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/update/${id}`,
          {
            method: "PUT",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const updatedBlog = await response.json();
          const updatedBlogs = blogs.map((blog) =>
            blog.id.toString() === id ? updatedBlog : blog
          );
          setBlogs(updatedBlogs);

          Swal.fire({
            title: "Updated!",
            text: "Your blog post has been updated successfully.",
            icon: "success",
          });

          router.push("/admin/intelli-admin");
        } else {
          throw new Error("Failed to update blog post");
        }
      } catch (error) {
        console.error("Error updating blog:", error);
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred.",
          icon: "error",
        });
      }
    }
  };

  useEffect(() => {
    getBlogData();
  }, [id]);

  const [categoryOptions] = useState<CategoryOption[]>([
    { label: "Blog Content", value: "Blog Content" },
    { label: "Social Media", value: "Social Media" },
    { label: "Marketing", value: "Marketing" },
    { label: "Website", value: "Website" },
    { label: "Course Builder", value: "Course Builder" },
  ]);

  const [image, setImage] = useState<File | null>(null);
  const [validationError, setValidationError] =
    useState<BlogValidationDataProps | null>(null);

  const initialFormData: BlogDataProps = {
    title: "",
    description: "",
    publishDate: "",
    image: null,
    slug: "",
    tags: "",
    category: "",
  };

  const [formData, setFormData] = useState<BlogDataProps>(initialFormData);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFormData({
        ...formData,
        image: file,
      });
      setImage(file);
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    setFormData({
      ...formData,
      image: null,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const fieldErrors: Partial<BlogValidationDataProps> = {};

      const requiredFields: (keyof BlogDataProps)[] = [
        "title",
        "description",
        "publishDate",
        "image",
        "slug",
        "tags",
        "category",
      ];

      requiredFields.forEach((field) => {
        if (!formData[field]) {
          fieldErrors[field] =
            `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        }
      });

      if (Object.keys(fieldErrors).length > 0) {
        setValidationError(fieldErrors);
        return;
      }

      const result = await createBlog(formData);
      if (result) {
        Swal.fire({
          title: "Success!",
          text: "Blog post created successfully.",
          icon: "success",
        });
        router.push("/admin/intelli-admin");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred.",
        icon: "error",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-10 px-3 md:px-[5%] min-h-screen w-full bg-opacity-80 bg-gradient-to-b from-[#0B0427] via-[#20082F] to-[#0B0427] text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        {id ? "Update Blog" : "Create New Blog"}
      </h2>
      <form
        className="flex md:flex-row flex-col border border-t-[#3d2b87c5] border-b-[#3d2b87cc] border-r-[#6b2c92d2] border-l-[#6b2c92d7] shadow-2xl rounded-lg p-2"
        onSubmit={id ? updateBlog : handleFormSubmit}
      >
        <div className="flex-4 md:w-4/5 w-full p-0 md:p-8">
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-[#0F2C7F] rounded-lg px-4 py-2"
            />
            {validationError?.title && (
              <div className="text-red-500 m-1">{validationError.title}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full resize-none bg-transparent border border-[#0F2C7F] rounded-lg px-4 py-2 h-24 md:h-[317px]"
            ></textarea>
            {validationError?.description && (
              <div className="text-red-500 m-1">
                {validationError.description}
              </div>
            )}
          </div>
        </div>

        <div className="flex-2 md:w-1/4 w-full p-0 md:p-8">
          <div className="mb-4">
            <label htmlFor="publishDate" className="block mb-2">
              Publish Date
            </label>
            <input
              type="date"
              id="publishDate"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-[#0F2C7F] rounded-lg px-4 py-2"
            />
            {validationError?.publishDate && (
              <div className="text-red-500 m-1">
                {validationError.publishDate}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2">
              Feature Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
              id="upload-image"
            />
            <div
              className="cursor-pointer w-full h-[8vh] rounded-md border border-gray-600 bg-[rgba(32,45,72,0.41)] flex gap-3 justify-center items-center"
              onClick={() => document.getElementById("upload-image")?.click()}
            >
              <MdCloudUpload />
              {image?.name ? image.name : "Upload Feature Image"}
            </div>
            {image && (
              <div className="flex justify-center mt-3">
                <Button
                  title="Cancel Image"
                  className="text-xs bg-red-600"
                  onClick={handleCancelImage}
                />
              </div>
            )}
            {validationError?.image && (
              <div className="text-red-500 m-1">{validationError.image}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="slug" className="block mb-2">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-[#0F2C7F] rounded-lg px-4 py-2"
            />
            {validationError?.slug && (
              <div className="text-red-500 m-1">{validationError.slug}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block mb-2">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-[#0F2C7F] rounded-lg px-4 py-2"
            />
            {validationError?.tags && (
              <div className="text-red-500 m-1">{validationError.tags}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-2">
              Category
            </label>
            <Select
              id="category"
              name="category"
              value={
                categoryOptions.find(
                  (option) => option.value === formData.category
                ) || null
              }
              onChange={(selectedOption) =>
                setFormData((prev: any) => ({
                  ...prev,
                  category: selectedOption ? selectedOption.value : "",
                }))
              }
              options={categoryOptions}
              isClearable
              className="bg-transparent text-black"
            />
            {validationError?.category && (
              <div className="text-red-500 m-1">{validationError.category}</div>
            )}
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col gap-3 p-3 justify-center items-center md:mt-10">
          <Button
            title="Save Blog"
            className="text-md md:text-lg py-1 md:py-2"
            onClick={() => handleFormSubmit}
          />
        </div>
      </form>
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BlogEditor />
  </Suspense>
);

export default Page;
