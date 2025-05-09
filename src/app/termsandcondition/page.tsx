import Link from "next/link";
import React, { ReactNode } from "react";

interface Terms {
  id: number;
  title: string;
  content: string;
  route: ReactNode;
}

const Conditions: Terms[] = [
  {
    id: 1,
    title: " Acceptance of Terms",
    content:
      "By accessing or using our website, you agree to abide by these Terms and Conditions and all applicable laws and regulations.",
    route: " ",
  },
  {
    id: 2,
    title: " Intellectual Property ",
    content:
      "The content and materials on IntelliWriter.io, including but not limited to text, graphics, logos, images, and software, are the property of IntelliWriter and are protected by applicable intellectual property laws. ",
    route: " ",
  },
  {
    id: 3,
    title: "Disclaimer of Liability ",
    content:
      " We strive to provide accurate and up-to-date information, but we make no warranties or representations of any kind concerning the accuracy or suitability of the information contained on our website.",
    route: " ",
  },
  {
    id: 4,
    title: "Changes to Terms and Conditions ",
    content:
      " IntelliWriter reserves the right to modify or replace these Terms and Conditions at any time. Your continued use of the website after any changes signify your acceptance of those modifications.",
    route: " ",
  },
  {
    id: 5,
    title: "Termination ",
    content:
      "We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions. ",
    route: " ",
  },
  {
    id: 6,
    title: "Privacy Policy ",
    content: "",
    route: (
      <span>
        Please refer to our{" "}
        <Link
          className="text-blue-500"
          style={{ display: "inline" }}
          href="/privacypolicy"
        >
          {" "}
          Privacy Policy
        </Link>{" "}
        for information on how we collect, use, and protect your personal
        information.
      </span>
    ),
  },
  {
    id: 7,
    title: " Contact Us",
    content: " ",
    route: (
      <span>
        If you have any questions or concerns about our Terms and Conditions,
        please contact us at{" "}
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

const TermsAndCondition = () => {
  return (
    <div className="lg:w-[90%] w-[80%] flex flex-col gap-3 text-white lg:p-8 mx-10 lg:mx-14">
      <h1 className="text-center font-bold text-4xl pt-10">
        Terms And Conditions
      </h1>
      <p className="font-semibold bg-clip-text pt-3 text-transparent primBtn">
        Effective Date: 25-Nov-2023
      </p>
      <div className="border-t-2 border-[#122249] w-11/12"></div>

      {Conditions.map((data: Terms) => (
        <div key={data.id} className="p-4">
          <div>
            <h3 className="font-[20px] text-xl mb-2">{data.title}</h3>
            <p className="text-gray-300 mb-2 font-[16px]">
              {data.content}
              {data.route}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TermsAndCondition;
