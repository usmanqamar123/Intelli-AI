import Link from 'next/link'
import React from 'react'

const page = () => {
    const commissionReceived = [
        {
            id: 1,
            status: 'Pending',
            amount: 100,
            created: '2024-02-10',
            paidAt: '2024-04-15'
        },
        {
            id: 2,
            status: 'Approved',
            amount: 200,
            created: '2024-04-01',
            paidAt: '2024-05-12'
        }

    ]
    return (
        <div className='py-20 text-white w-full px-4 flex flex-col items-center justify-center gap-10 md:text-center md:text-lg text-base'>
            {/* Commission cart section */}
            <div className='w-full md:w-3/4 bg-[#161738] shadow-xl py-7 px-5 md:px-10 rounded-xl border border-[#FFFFFF14]'>
                <div className='space-y-3'>
                    <div className='md:text-4xl text-3xl text-center font-semibold'>Payout Terms</div>
                    <div>You don&apos;t have any payout method selected. Please select one now so we can pay you.<br />
                        <span className="text-[#4162b6] underline underline-offset-2 hover:text-white transition ease-in-out cursor-pointer"><Link href='/'>Select payout method</Link></span> Your payout terms are <span className='font-semibold'>Monthly / Net-30.</span></div>
                    <div>
                    </div>
                    {/* Payment section start */}
                    <div className='py-2 text-xl sm:py-8 sm:text-2xl'>Your latest payments</div>
                    {/* Table section start */}
                    <table className="table-auto border-collapse w-full ">
                        <thead>
                            <tr className='border-b border-gray-700'>
                                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">Status</th>
                                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">Amount</th>
                                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">Created</th>
                                <th className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-[#4162b6] py-2">Paid at</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                commissionReceived.map((item) => {
                                    return (
                                        <>
                                            <tr key={item.id} className='border-b border-gray-700 hover:bg-[#21224d] transition ease-in-out delay-150 cursor-pointer'>
                                                <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">{item.status}</td>
                                                <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">${item.amount}</td>
                                                <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">{item.created}</td>
                                                <td className="text-xs px-1 md:px-4 lg:px-8 xl:px-16 sm:text-lg text-white py-2">{item.paidAt}</td>

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