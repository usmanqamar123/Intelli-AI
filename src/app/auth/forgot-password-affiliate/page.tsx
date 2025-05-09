"use client";

import Button from "@/components/Button";
import CheckEmail from "@/components/CheckEmail";
import forgotPasswordAffiliate from "@/utils/forgotPasswordAffiliate";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import { Logo } from "../../../../public";

interface ForgotPasswordPageLayoutProps {
  children: React.ReactNode;
  email?: string | string[];
}

const ForgotAffiliatePage: React.FC<
  ForgotPasswordPageLayoutProps | any
> = () => {
  const [email, setEmail] = useState<string>("");
  const [showSuccessComponent, setShowSuccessComponent] = useState(false);
  const [forgotError, setForgotError] = useState<{ email: string } | null>(
    null
  );

  const router = useRouter();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = { email };
      if (!email) {
        setForgotError({
          email: "Email is required",
        });
        return;
      } else {
        setForgotError(null);
        const result = await forgotPasswordAffiliate(userData);
        if (result.success) {
          await Swal.fire({
            icon: "success",
            title: "Success",
            text: result.message,
          });
          setShowSuccessComponent(true);
          router.push("/auth/reset-password-affiliate");
        } else {
          await Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: result.message,
          });
        }
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section className="w-full bg-contact py-16 bg-bottom bg-no-repeat bg-cover centered-container">
      <Link
        href="/"
        className="absolute z-50 left-2 top-2 opacity-75 hover:opacity-100 text-white border rounded-3xl px-4 py-1"
      >
        Back
      </Link>
      <div className="container rounded shadow-lg md:max-w-xl mx-3 relative">
        {!showSuccessComponent && (
          <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-5">
            <form onSubmit={submitForm}>
              <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
                <Link
                  href="/"
                  passHref
                  className="flex justify-center items-center text-white font-extrabold mb-4 text-[72px] tracking-wide font-montserrat"
                >
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={300}
                    height={32}
                    priority={true}
                    className="object-contain h-16 w-fit"
                  />
                </Link>
                <div className="text-center font-bold p-3 text-3xl lg:text-4xl">
                  Forgot Password
                </div>
                <label className="flex items-center relative">
                  <div className="absolute left-[20px]">
                    <FaEnvelope />
                  </div>
                  <input
                    autoComplete="off"
                    name="title"
                    placeholder="Email"
                    type="email"
                    className="contact-input bg-gradient-to-b !pl-[48px] md:from-[#111630] md:to-[#1d214c] from-[#000b1e] to-[#010208]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                {forgotError?.email && (
                  <p className="!text-red-500 text-sm px-2">
                    {forgotError.email}
                  </p>
                )}
                <Button
                  title="Reset Password"
                  width="w-full"
                  className="w-full"
                  btnType="submit"
                />
              </div>
            </form>

            <p className="w-[90%] pb-6 !m-0 text-center text-white lg:pt-0 pt-3">
              Remembered your password?{" "}
              <span className="text-pink-400">
                <Link href="/auth/login">Login </Link>
                <span className="text-white px-0.5 opacity-60">/</span>
                <Link href="/auth/register"> Register</Link>
              </span>
            </p>
          </div>
        )}
        {showSuccessComponent && (
          <div className="success-component">
            <CheckEmail />
          </div>
        )}
      </div>
    </section>
  );
};

export default ForgotAffiliatePage;
