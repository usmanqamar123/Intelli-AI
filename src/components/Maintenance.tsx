import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Maintenance } from "../../public";

const MaintenancePage = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center md:px-16 my-16 p-6 w-full lg:w-[calc(100%-130px)] text-white">
    <Image
          src={Maintenance}
          alt={Maintenance}
          width={850}
          height={850}
          loading="lazy"
          className="md:w-[400px] w-full px-6 object-cover rounded-2xl filter grayscale opacity-50"
        />
        <h2 className="text-5xl md:sm text-center md:text-5xl my-3 text-white/50">
          On Maintenance!
        </h2>
        <p className="text-lg font-thin opacity-80 text-center mb-8">
          Soon new version will be live!
        </p>
        <div className="w-fit ">
          <Link href="/user/dashboard">
            <Button title="Back to Dashboard" btnType="button" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
