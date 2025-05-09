"use client";
import { FAQs } from "@/components";
import { AIVoiceGeneratorFAQs } from "@/constants/FaqsData";
import Link from "next/link";
import { useState, useEffect } from "react";

const steps = [
  {
    id: "step1",
    title: "Step 1: Download the IntelliWriter Plugin",
    description:
      "To integrate IntelliWriter with your WordPress site, start by downloading the plugin. Click the button below to download the plugin as a ZIP file.",
    downloadLink: "/intelliwriter.zip"
  },
  {
    id: "step2",
    title: "Step 2: Install the IntelliWriter Plugin",
    description:
      "To install the plugin, you have two options: either upload the downloaded ZIP file from Step 1 via your WordPress dashboard (Plugins → Add New → Upload Plugin) or search for 'IntelliWriter' in the WordPress plugin directory and click the Install Now button. Once installed, remember to activate the plugin.",
    img: "/wordpress/img1.jpg"
  },  
  {
    id: "step3",
    title: "Step 3 : Activate the plugin",
    description:
      "Once installed, click the Activate button to activate the plugin",
    img: "/wordpress/img2.jpg",
  },
  {
    id: "step4",
    title: "Step 4 : Open the intelliwriter plugin settings",
    description:
      "Find 'Intelliwriter' inside the Settings menu on the sidebar.",
    img: "/wordpress/img3.jpg",
  },
  {
    id: "step5",
    title: "Step 5 : Connect to intelliwriter",
    description:
      "When you click the Intelliwriter tab inside the Settings menu on the sidebar, you will see the below page with a Connect button to connect the plugin to your Intelliwriter account.",
    img: "/wordpress/img4.jpg",
  },
  {
    id: "step6",
    title: "Step 6 : Approve the connection request",
    description:
      "The Intelliwriter plugin will redirect you to your Intelliwriter account so that it can access your content for publishing. To complete the Intelliwriter and WordPress plugin integration, click Approve.",
    img: "/wordpress/img5.jpg",
  },
  {
    id: "step7",
    title:
      "Step 7 : Your WordPress site should now be connected with Intelliwriter",
    description:
      "On successful authorization, you will be redirected to the Intelliwriter Dashboard with the message 'Successfully connected to WordPress'",
    img: "/wordpress/img6.jpg",
  },
  {
    id: "step8",
    title: "Step 8 : Multiple WordPress sites connection",
    description:
      "Your generated content can now be published directly to your WordPress site with the click of a button. In the AI Article Writer section, you can now find the grey button with the WordPress logo which says 'Publish to Wordpress.org'",
    img: "/wordpress/img7.jpg",
  },
];

const Page = () => {
  const [activeStep, setActiveStep] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentStep = "";
      steps.forEach((step) => {
        const section = document.getElementById(step.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentStep = step.id;
          }
        }
      });
      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#0F062C] text-white my-16">
      <div className="flex flex-col md:flex-row-reverse justify-end gap-6 px-6 py-6 min-h-screen">
        {/* Steps Content (Right Side) */}
        <div className="flex-grow w-full p-6 rounded-md border border-gray-600 bg-[#0F062C]">
          <div className="pb-8 border-b border-gray-600">
            <h1 className="text-2xl md:text-4xl font-bold py-4">
              WordPress.org
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Guide on how to connect a WordPress.org site with Intelliwriter.
            </p>
          </div>

          {steps.map((step) => (
            <section
              key={step.id}
              id={step.id}
              className="scroll-mt-24 py-6 md:py-12 border-b border-gray-600"
            >
              <h2 className="text-xl md:text-3xl font-semibold mb-4">
                {step.title}
              </h2>
              <p className="text-gray-200 text-base md:text-lg mb-6">
                {step.description}
              </p>

              {step.downloadLink && (
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = step.downloadLink;
                    link.download = "intelliwriter.zip";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Download IntelliWriter Plugin
                </button>
              )}

              {step.img && (
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full max-w-3xl md:max-w-4xl rounded-lg shadow-lg"
                />
              )}
            </section>
          ))}
        </div>

        {/* Table of Contents Sidebar (Left Side) */}
        <nav className="sticky top-0 w-full md:max-w-[250px] bg-[#0F062C] p-4 border border-gray-600 rounded-lg shadow-md h-screen overflow-y-auto self-start">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {steps.map((step) => (
              <li key={step.id}>
                <Link
                  href={`#${step.id}`}
                  className={`block px-3 py-2 rounded-md text-xs md:text-base transition text-gray-100 hover:bg-[#251556] ${
                    activeStep === step.id
                      ? "bg-gradient-to-bl from-[#471c7c] to-[#7628d6] text-gray-200"
                      : ""
                  }`}
                >
                  {step.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* <div className="mt-6">
          <FAQs faqs={AIVoiceGeneratorFAQs} />
        </div> */}
    </main>
  );
};

export default Page;
