import Link from "next/link";
import React, { ReactNode } from "react";

interface Privacy {
  id: number;
  title: string;
  content: string;
  list: string[];
  route: ReactNode;
}

const PrivacyData: Privacy[] = [
  {
    id: 1,
    title: " Information We Collect",
    content: " ",
    list: [],
    route: "",
  },
  {
    id: 2,
    title: "Personal Information: ",
    content: "We may collect personal information, such as: ",
    list: [
      "Name ",
      "Email address",
      "Contact information",
      "All access tools",
      "Payment details (if applicable)",
      "Any other information voluntarily provided",
    ],
    route: "",
  },

  {
    id: 3,
    title: " Usage Information:",
    content:
      "  We may automatically collect information about how you interact with our website, including:",
    list: [
      "IP address ",
      "Browser type ",
      " Pages visited",
      "Date and time of access ",
      "Clickstream data ",
    ],
    route: "",
  },
  {
    id: 4,
    title: "Use of Information ",
    content: "We use the collected information for the following purposes: ",
    list: [
      "To provide and maintain our services ",
      "To personalize user experience ",
      "To communicate with users ",
      "To analyze and improve our website ",
      "To comply with legal obligations ",
    ],
    route: "",
  },
  {
    id: 5,
    title: "Data Security ",
    content:
      " We take reasonable measures to protect your information from unauthorized access or disclosure.However, no method of transmission over the internet or electronic storage is entirely secure.",
    list: [],
    route: "",
  },
  {
    id: 6,
    title: "Cookies ",
    content:
      "We use cookies to enhance user experience. You may set your browser to refuse cookies, but some parts of our website may not function properly without them. ",
    list: [],
    route: "",
  },
  {
    id: 7,
    title: "Third-Party Links ",
    content:
      "  Our website may contain links to third-party sites. Please note that we are not responsible for the privacy practices of those sites. We encourage users to read the privacy policies of any third-party website visited through our platform.",
    list: [],
    route: "",
  },
  {
    id: 8,
    title: "Children's Privacy ",
    content:
      " IntelliWriter.io does not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us to have it removed. ",
    list: [],
    route: "",
  },
  {
    id: 9,
    title: "Changes to This Privacy Policy ",
    content:
      "We reserve the right to update or change our Privacy Policy at anytime. We will notify users of any material changes by posting the new Privacy Policy on this page.",
    list: [],
    route: "",
  },
  {
    id: 10,
    title: "Contact Us ",
    content:
      " If you have any questions or concerns about our Privacy Policy, please contact us at",
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

const PrivacyPolicy = () => {
  return (
    <div className="lg:w-[90%] w-[80%] flex flex-col gap-3 text-white lg:p-8 mx-10 lg:mx-14">
      <h1 className="text-center font-bold text-4xl pt-10">Privacy Policy</h1>
      <p className="font-semibold bg-clip-text pt-3 text-transparent primBtn">
        Effective Date: 25-Nov-2023
      </p>
      <div className="border-t-2 border-[#122249] w-11/12"></div>

      {PrivacyData.map((data: Privacy) => (
        <div key={data.id} className="p-4">
          <div>
            <h3 className="font-[20px] text-xl mb-2">{data.title}</h3>
            <p className="text-gray-300 mb-2 font-[16px]">
              {data.content}
              {data.route}
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

export default PrivacyPolicy;
