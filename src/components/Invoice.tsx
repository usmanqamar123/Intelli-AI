import React from "react";
import Image from "next/image";

interface invoiceProps {
  id: number;
  amount: string;
  invoiceNumber: string;
  client: string;
  tax: string | undefined;
  status: string;
  date: string;
}
const Invoice: React.FC<invoiceProps> = ({
  amount,
  invoiceNumber,
  client,
  tax,
  status,
  date,
}) => {
  interface PlanData {
    plan_id: number;
    price: string;
    package: string;
    currency: string;
    features: string[];
    duration: string;
  }

  const customerDetails = [
    {
      id: 1,
      name: client,
      address: "123 Main Street",
      email: "jWqkI@example.com",
    },
  ];

  const planDetails: PlanData[] = [
    {
      plan_id: 1,
      price: "$4.99",
      package: "Premium",
      currency: "USD",
      features: [
        "15000 Content Words",
        "500 Images Prompts",
        "250 Chats Prompts",
        "Voice Over(200 words/prompt)",
      ],
      duration: "1 Month",
    },
  ];

  const invoiceDetails = [
    {
      invoiceNo: invoiceNumber,
      date: date,
      amount: amount,
      status: status,
      tax: tax,
    },
  ];
  const amountFloat = parseFloat(amount);
  // Calculate the sum

  return (
    <div className="flex items-center justify-center w-full lg:w-[calc(100%-250px)] absolute right-0">
      <div className="w-[300px] md:w-[900px] bg-gradient-to-br from-[#141434] via-[#181F3E] to-[#225a8849] text-gray-200 rounded-xl shadow-2xl p-3">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/Logo.webp"
            alt="Logo"
            width={150}
            height={16}
            priority={true}
            className="object-contain w-36 xl:w-44"
          />
        </div>
        <div className="md:px-10 py-5 px-3">
          <div className="font-bold text-xl md:text-3xl ">Payment Summary</div>
          <div className="gap-5 flex flex-col md:flex-row md:items-center md:justify-between m-3">
            <div>
              <h3 className="text-xl font-medium">Invoice Details</h3>
              {invoiceDetails.map((data, index) => (
                <ul
                  key={index}
                  className="text-sm pl-2 flex flex-col gap-1 mt-2"
                >
                  <li>
                    <span className="font-medium">Invoice No:</span>{" "}
                    {data.invoiceNo}
                  </li>
                  <li>
                    <span className="font-medium">Amount:</span> {data.amount}
                  </li>
                  <li>
                    <span className="font-medium">Date:</span> {data.date}
                  </li>
                  <li>
                    <span className="font-medium">Status:</span> {data.status}
                  </li>
                  <li>
                    <span className="font-medium">Tax:</span> {data.tax}
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-medium">Client Details</h3>
              {customerDetails.map((data) => (
                <ul
                  key={data.id}
                  className="pl-2 flex flex-col gap-1 mt-2 text-sm"
                >
                  <li>
                    <span className="font-medium">Name:</span> {data.name}
                  </li>
                  <li>
                    <span className="font-medium">Address:</span> {data.address}
                  </li>
                  <li>
                    <span className="font-medium">Email:</span> {data.email}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="mx-3 my-2">
            <h3 className="text-xl my-1 font-medium">Plan Details</h3>
            <div className="w-full overflow-x-auto">
              <table className="w-full  border-collapse">
                <thead>
                  <tr className="bg-primary">
                    <th className="px-4 py-2 text-left border border-[#0B0427] md:w-1/4">
                      Package
                    </th>
                    <th className="px-4 py-2 text-left border border-[#0B0427] md:w-1/4">
                      Price
                    </th>
                    <th className="px-4 py-2 text-left border border-[#0B0427] md:w-1/4">
                      Currency
                    </th>
                    <th className="px-4 py-2 text-left border border-[#0B0427] md:w-1/4">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planDetails.map((data) => (
                    <tr key={data.plan_id} className="">
                      <td className="px-4 py-2 border border-[#0B0427] md:w-1/4">
                        {data.package}
                      </td>
                      <td className="px-4 py-2 border border-[#0B0427] md:w-1/4">
                        {data.price}
                      </td>
                      <td className="px-4 py-2 border border-[#0B0427] md:w-1/4">
                        {data.currency}
                      </td>
                      <td className="px-4 py-2 border border-[#0B0427] md:w-1/4">
                        {data.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {invoiceDetails.map((data, index) => (
            <div
              key={index}
              className="border border-b-0 border-l-0 border-r-0 border-t-[#767676] mt-5 md:mt-10 p-5 flex flex-col md:flex-row items-center justify-between w-full"
            >
              <h2 className="font-semibold text-lg md:text-xl">Summary: </h2>
              <span className="text-xl md:text-4xl font-semibold">
                {data.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
