import Link from "next/link";
import React, { ReactNode } from "react";

interface compliance {
  id: number;
  title: string;
  content: string;
  list: string[];
  route: ReactNode;
}

const Compliance: compliance[] = [
  {
    id: 1,
    title: "Accessibility statement for Intelliwriter ",
    content:
      "We want everyone who visits Intelliwriter website to feel welcome and find the experience rewarding, going above and beyond the The Public Sector Bodies Accessibility Regulations 2018. ",
    list: [],
    route: "",
  },

  {
    id: 2,
    title: " What are we doing?",
    content: "",
    list: [],
    route: (
      <span>
        To help us make the Intelliwriter website a positive place for everyone,
        we&apos;ve been using the Web Content Accessibility Guidelines{" "}
        <Link
          href="https://www.w3.org/TR/WCAG/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-500"
        >
          WCAG 2.1
        </Link>
        . These guidelines explain how to make web content more accessible for
        people with disabilities, and user friendly for everyone.
      </span>
    ),
  },
  {
    id: 3,
    title: "How are we doing? ",
    content:
      "We've worked hard on the Intelliwriter website and believe we've achieved our goal of Level AA accessibility. We monitor the website regularly to maintain this, but if you do find any problems, please get in touch. ",
    list: [],
    route: "",
  },
  {
    id: 4,
    title: "Let us know what you think",
    content:
      " If you enjoyed using the Intelliwriter website, or if you had trouble with any part of it, please get in touch. We'd like to hear from you in any of the following ways:",
    list: [],
    route: (
      <span>
        {" "}
        <Link
          className="text-blue-500"
          style={{ display: "inline" }}
          href={"mailto:${hello@intelliwriter.io}"}
        >
          hello@intelliwriter.io
        </Link>
      </span>
    ),
  },
];

const AdaCompliance = () => {
  return (
    <div className="lg:w-[90%] w-[80%] flex flex-col gap-3 text-white lg:p-8 mx-10 lg:mx-14">
      <h1 className="text-center font-bold text-4xl pt-10">Ada Compliance</h1>
      <p className="font-semibold bg-clip-text pt-3 text-transparent primBtn">
        Effective Date: 25-May-2024
      </p>
      <div className="border-t-2 border-[#122249] w-11/12"></div>

      {Compliance.map((data: compliance) => (
        <div key={data.id} className="p-4">
          <div>
            <h3 className="font-[20px] text-xl mb-2">{data.title}</h3>
            <p className="text-gray-300 mb-2 font-[16px]">
      {data.content}
      {typeof data.route === 'string' ? (
        <span dangerouslySetInnerHTML={{ __html: data.route }}></span>
      ) : (
        <>{data.route}</>
      )}
    </p>
            <ul className="list-disc pl-6 text-gray-300 font-[16px]">
              {data.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdaCompliance;
