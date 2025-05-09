"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components";
import { Footer } from "@/components";
import { useWebContext } from "@/context/ContextProvider";
import Button from "@/components/Button";
import Image from "next/image";
export default function NotFound() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const router = useRouter();

  const { aboutRef, pricingRef } = useWebContext();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);
  return (
    <>
      {domLoaded && (
        <div>
          <Header aboutRef={aboutRef} pricingRef={pricingRef} />
          <div className="relative  h-screen !text-white overflow-hidden text-center ">
            <div className="absolute inset-0">
              <Image
                src="/404/Error-404.webp"
                alt="Background Image"
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, 2000px"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="relative flex flex-col z-40 items-center justify-center h-full pt-6 px-6">
              <h1 className="text-3xl md:text-6xl font-bold mt-4">ERROR 404</h1>
              <div className="flex-grow" />
              <div className="sm:mt-0 mt-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Look Like You’re Lost
                </h2>
                <p className="mb-8 !text-white">
                  The page you are looking is not available
                </p>
                <Link href="/">
                  <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md mb-0 sm:mb-4">
                    Go to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}
