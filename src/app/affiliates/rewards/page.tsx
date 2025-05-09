"use client"
import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const commissionReceived = [
    {
      id: 1,
      status: 'Pending',
      amount: 100,
      fromCustomer: 'abc',
      created: new Date()
    },
    {
      id: 2,
      status: 'Approved',
      amount: 200,
      fromCustomer: 'jkl',
      created: new Date()
    }

  ]

  const handleDownload = () => {
    // Create an Excel-like CSV content
    const data = [
      ["Email", "Created", "Customer Since"],
      ["john@example.com", "2022-05-20", "2022-05-21"],
      ["jane@example.com", "2022-05-22", "2022-05-23"],
      // Add more data rows as needed
    ];

    // Convert data to CSV format
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => row.join(",")).join("\n");

    // Create a temporary link element
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "referrals.csv"); // Set the filename here

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };


  return (
    <div className='py-20 text-white w-full px-4 flex flex-col items-center justify-center gap-10 md:text-center md:text-lg text-base'>
      {/* Commission cart section */}
      <div className='w-full md:w-3/4 bg-[#161738] shadow-xl py-7 px-5 md:px-10 rounded-xl border border-[#FFFFFF14]'>
        <div className='space-y-5 w-full'>
          <div className='md:text-4xl text-3xl text-center font-semibold'>Your latest commissions</div>
          <div className='w-full flex justify-center'>
            <Link href='/download.pdf' download className='w-full flex justify-center text-center text-gray-300 '>
              <div className="w-fit">
                <Button
                  onClick={handleDownload}
                  title="Download"
                  btnType="button"
                  className="text-2xl"
                />
              </div>
            </Link>
          </div>
          <div>
          </div>
          {/* Table section start */}
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className='border-b border-gray-700'>
                <th className="text-xs md:text-base px-1 text-start md:text-center text-[#4162b6] py-2">Amount</th>
                <th className="text-xs md:text-base px-1 text-start md:text-center text-[#4162b6] py-2">From Customer</th>
                <th className="text-xs md:text-base px-1 text-start md:text-center text-[#4162b6] py-2">Status</th>
                <th className="text-xs md:text-base px-1 text-start md:text-center text-[#4162b6] py-2">Created</th>
              </tr>
            </thead>
            <tbody>

              {/* {
                commissionReceived.map((item) => {
                  return (
                    <>
                      <tr key={item.id} className='px-1 border-b border-gray-700 hover:bg-[#21224d] transition ease-in-out delay-150 cursor-pointer'>
                        <td className="text-xs md:text-base px-1 text-start md:text-center  text-white py-2">{item.status}</td>
                        <td className="text-xs md:text-base px-1 text-start md:text-center  text-white py-2">${item.amount}</td>
                        <td className="text-xs md:text-base px-1 text-start md:text-center  text-white py-2">{item.fromCustomer}</td>
                        <td className="text-xs md:text-base px-1 text-start md:text-center  text-white py-2">{item.created.toLocaleDateString()}</td>

                      </tr>
                    </>
                  )
                })
              } */}

            </tbody>
          </table>
          {/* Table section end */}
        </div>
      </div>
    </div>
  )
}

export default page