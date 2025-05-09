"use client";

import React, { useEffect, useState, Suspense } from "react";
import loginAffiliateWithGoogle from "@/utils/loginWithGoogleAffiliate";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useWebContext } from "@/context/ContextProvider";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import { Logo } from "../../../../public";
import loginAffiliate from "@/utils/loginAffiliate";

interface LoginPageLayoutProps {
  children: React.ReactNode;
  email?: string;
  password?: string;
  error?: string;
}

const LoginAffiliatePage: React.FC = () => {
  const router = useRouter();
  const { setTokens, setNameLetter } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [seePass, setSeePass] = useState<"text" | "password">("password");
  const [signInError, setSignInError] = useState<LoginPageLayoutProps | null>(
    null
  );

  const searchParams = useSearchParams();
  const session = searchParams.get("session");
  const { loading } = useWebContext();

  function getFirstLetter(email: string): string {
    return email ? email.charAt(0) : "";
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      if (!email) {
        setSignInError({
          email: "Email is required",
          children: null,
        });
        return;
      } else if (!password) {
        setSignInError({
          password: "Password is required",
          children: null,
        });
        return;
      } else {
        setSignInError({
          email: "",
          password: "",
          error: "",
          children: null,
        });
        const result = await loginAffiliate(userData);

        if (result.success) {
          localStorage.setItem("intelliaffiliate_token", result.token);
          localStorage.setItem("intelliname", result.name);
          localStorage.setItem("intellinameLetter", getFirstLetter(result.name));
          localStorage.setItem("intelliuserId", result.userId);
          localStorage.setItem("intelliuserEmail", result.email);
          localStorage.setItem("intelliaf_code", result.af_code);

          setTokens(result.token, "affiliate");
          setNameLetter(getFirstLetter(result.name));
          router.push("/affiliates/dashboard");
        } else {
          await Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: `${result.message}`,
          });
        }
      }
    } catch (error) {
      console.error(error);
      await Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Something went wrong!",
      });
    }
  };

  const signUpWithGoogle = async () => {
    window.open(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/google/affiliate`,
      "_self"
    );
  };

  const loginGoogle = async () => {
    try {
      if (session) {
        const userData = { session, field: "affiliate" };
        const result = await loginAffiliateWithGoogle(userData);
        if (result.success) {
          localStorage.setItem("intelliaffiliate_token", result.token);
          localStorage.setItem("intelliname", result.name);
          localStorage.setItem("intellinameLetter", getFirstLetter(result.name));
          localStorage.setItem("intelliuserId", result.userId);
          localStorage.setItem("intelliuserEmail", result.email);
          localStorage.setItem("intelliaf_code", result.af_code);

          setTokens(result.token, "affiliate");
          setNameLetter(getFirstLetter(result.name));
          router.push("/affiliates/dashboard");
        } else {
          await Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: `${result.message}`,
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

  useEffect(() => {
    setSignInError(null);
    loginGoogle();
  }, [session]);

  return (
    <section className="w-full bg-contact py-16 bg-bottom bg-no-repeat bg-cover centered-container">
      <Link
        href="/become-an-affiliate"
        className="absolute z-50 left-2 top-2 opacity-75 hover:opacity-100 text-white border rounded-3xl px-4 py-1"
      >
        Back
      </Link>
      <div className="container rounded shadow-lg md:max-w-xl mx-3 relative">
        <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-5 pt-5">
          <div>
            <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
              <Link
                href="/"
                passHref
                className="flex justify-center items-center text-white font-extrabold text-[72px] mb- tracking-wide font-montserrat"
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
              <div className="text-center gap-y-2 flex flex-col">
                <h1 className="font-bold text-3xl md:text-4xl text-white">
                  Login
                </h1>
                <p>
                  Get back to focusing on your work today with affiliate program
                </p>
              </div>

              <button
                className="py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 flex items-center justify-center gap-2 bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] rounded-lg  hover:opacity-90"
                onClick={signUpWithGoogle}
              >
                <Image
                  className="w-5 h-5"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  width={20}
                  height={20}
                  alt="google logo"
                />
                <span>Sign in with Google</span>
              </button>
              <span className="text-center">or</span>
              <form
                onSubmit={submitForm}
                autoComplete="off"
                className="flex flex-col gap-3"
              >
                <label className="w-full relative">
                  <div className="absolute left-[20px] top-11">
                    <FaEnvelope />
                  </div>
                  <p>Email</p>
                  <input
                    autoComplete="off"
                    name="title"
                    type="email"
                    placeholder="Enter your email"
                    className="contact-input bg-gradient-to-b !pl-12 !mt-1 md:from-[#111630] md:to-[#1d214c] from-[#000b1e] to-[#010208]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                {signInError?.email && (
                  <p className="!text-red-500 text-sm px-2">
                    {signInError.email}
                  </p>
                )}

                <label className="w-full relative">
                  <div className="absolute left-[20px] top-9">
                    <BiSolidLock size={24} />
                  </div>
                  <p>Password</p>
                  <input
                    name="password"
                    type={seePass}
                    placeholder="Enter your password"
                    className="contact-input !pl-12 !mt-1 bg-gradient-to-b md:from-[#111630] md:to-[#1d214c] from-[#000b1e] to-[#010208]"
                    value={password}
                    onChange={(e) => {
                      if (password === "") {
                        setSeePass("password");
                      }
                      setPassword(e.target.value);
                    }}
                  />
                  <div
                    className="absolute right-4 top-9 cursor-pointer"
                    onClick={() =>
                      setSeePass(seePass === "text" ? "password" : "text")
                    }
                  >
                    {seePass === "text" ? (
                      <AiFillEye size={24} />
                    ) : (
                      <AiFillEyeInvisible size={24} />
                    )}
                  </div>
                </label>
                {signInError?.password && (
                  <p className="!text-red-500 text-sm px-2">
                    {signInError.password}
                  </p>
                )}
                <button
                  className="rounded-md py-2.5 tracking-wider text-base text-white font-medium md:px-6 px-4 flex items-center justify-center gap-2 bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90"
                  type="submit"
                >
                  {loading ? "Loading..." : "Sign in"}
                </button>
              </form>
              <p className="text-white text-center">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register-affiliate" className="underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  const { loading } = useWebContext();

  return (
    <Suspense fallback={loading}>
      <LoginAffiliatePage />
    </Suspense>
  );
};

export default Page;
