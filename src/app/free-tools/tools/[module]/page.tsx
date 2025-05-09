"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";
import dynamic from "next/dynamic";
const Response = dynamic(() => import("@/components/Tools/Response"));
import Generator from "@/components/Tools/content-generator/Generator";

const ModuleLayout = () => {
  const { module }: any = useParams();
  const pageTitle = module.replace(/-/g, " ");

  const pages = [
    "blog-title",
    "business-name",
    "cover-letter",
    "problem-agitate-solution",
    "rephrase-generator",
    "tags-generator",
    "video-title",
    "web-scrapper",
    "question-generator",
    "informative-text-generator",
  ];

  return (
    <div className="md:px-20 md:py-10 p-6 w-full mx-auto text-white overflow-y-auto container  max-w-7xl  px-4">
      {/* Top Section */}
      <div className="w-full pb-4">
        {/* Top Breadcrumbs */}
        <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
          <Link href="/free-tools/template">Templates</Link>
          <FaChevronRight className="text-sm" />
          <Link href={`/free-tools/tools/${module}`} className="capitalize">
            {pageTitle}
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-medium p-2 pb-3 capitalize">
          {pageTitle}
        </h1>
      </div>

      <div className="flex w-full md:flex-row flex-col gap-5">
        {pages.includes(module) ? (
          <Generator type={module} />
        ) : (
          <div className="w-full h-screen flex items-center justify-center text-2xl opacity-80">
            No module found!
          </div>
        )}
        <div className="w-full">
          <Response />
        </div>
      </div>
    </div>
  );
};

export default ModuleLayout;
