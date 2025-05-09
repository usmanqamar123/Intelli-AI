"use client";
import React, { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Logo } from "../../../../public";
import registerAffiliate from "@/utils/registerAffiliate";

interface RegisterPageLayoutProps {
  children?: React.ReactNode;
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const RegisterAffiliatePage: React.FC<RegisterPageLayoutProps> = () => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [seePass, setSeePass] = useState<"text" | "password">("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [seeConfirmPass, setSeeConfirmPass] = useState<"text" | "password">(
    "password"
  );
  const [registerError, setRegisterError] =
    useState<RegisterPageLayoutProps | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const isValidPassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%+_()*.<>?&#])[A-Za-z\d@$!%_#+().<>*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const calculatePasswordStrength = (password: string) => {
    const capitalLetterRegex = /[A-Z]/;
    const smallLetterRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialSymbolRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    const hasCapitalLetter = capitalLetterRegex.test(password);
    const hasSmallLetter = smallLetterRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialSymbol = specialSymbolRegex.test(password);
    const hasValidLength = password.length >= 8;

    let strength = 0;
    if (hasCapitalLetter) strength += 0.2;
    if (hasSmallLetter) strength += 0.2;
    if (hasNumber) strength += 0.2;
    if (hasSpecialSymbol) strength += 0.2;
    if (hasValidLength) strength += 0.2;

    setPasswordStrength(strength);

    setRegisterError((prevState) => ({
      ...prevState!,
      password: strength < 1 ? "Password format is not correct!" : "",
    }));
  };

  const sessionTokens =
    typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!fullName) {
        setRegisterError({
          name: "Full Name is required",
          email: "",
          password: "",
          confirmPassword: "",
          children: null,
        });
        return;
      } else if (!email) {
        setRegisterError({
          name: "",
          email: "Email is required",
          password: "",
          confirmPassword: "",
          children: null,
        });
        return;
      } else if (password === "") {
        setRegisterError({
          name: "",
          email: "",
          password: "Password is required",
          confirmPassword: "",
          children: null,
        });
        return;
      } else if (confirmPassword === "") {
        setRegisterError({
          name: "",
          email: "",
          password: "",
          confirmPassword: "Confirm Password is required",
          children: null,
        });
        return;
      }
      if (!isValidPassword(password)) {
        Swal.fire({
          icon: "error",
          title: "Weak Password",
          text: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        });
        return;
      }
      if (password !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Passwords do not match",
          text: "Make sure the passwords must be matched.",
        });
        return;
      }



      const registeredUser = {
        name: fullName,
        email,
        password,
        confirmPassword,
      };
      const result = await registerAffiliate(registeredUser);
      if (result.success) {
        setRegisterError({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          children: null,
        });
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registration done Successfully!",
        });
        router.push("/auth/login-affiliate");
      } else {
        await Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: result.message,
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Something went wrong!",
      });
    }
  };

  const signUpWithGoogle = async () => {
    window.open(`${process.env.NEXT_PUBLIC_API_URL}/auth/google/affiliate`, '_self')
  }

  return (
    <section className="w-full bg-contact pt-8 pb-16 bg-bottom bg-no-repeat bg-cover centered-container">
      <Link
        href="/become-an-affiliate"
        className="absolute z-50 left-2 top-2 opacity-75 hover:opacity-100 text-white border rounded-3xl px-4 py-1"
      >
        Back
      </Link>
      <div className="container rounded shadow-lg md:max-w-xl mx-3 relative">
        <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-5">
          <div>
            <div className="flex flex-col lg:p-5 p-0 gap-y-6  text-white">
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
                  Affiliates Pro
                </h1>
                <p>
                  Affiliates - earn 15% recurring monthly commissions for every
                  person you refer.
                </p>
              </div>

              <button className="py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 flex items-center justify-center gap-2 bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] rounded-lg  hover:opacity-90"
                onClick={signUpWithGoogle}
              >
                <Image
                  className="w-5 h-5"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  width={20}
                  height={20}
                  loading="lazy"
                  alt="google logo"
                />
                <span>Continue with Google</span>
              </button>
              <span className="text-center">or</span>

              <form onSubmit={submitForm} autoComplete="off" className="flex flex-col gap-y-3">
                {/* Name input */}
                <label className="flex items-center relative">
                  <div className="absolute left-[20px]">
                    <FaUser />
                  </div>
                  <input
                    autoComplete="off"
                    name="name"
                    placeholder="Name"
                    type="text"
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F]"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </label>
                {registerError?.name && (
                  <p className="!text-red-500 text-sm px-2">
                    {registerError.name}
                  </p>
                )}

                {/* Email input */}
                <label className="flex items-center relative">
                  <div className="absolute left-[20px]">
                    <FaEnvelope />
                  </div>
                  <input
                    autoComplete="off"
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                {registerError?.email && (
                  <p className="!text-red-500 text-sm px-2">
                    {registerError.email}
                  </p>
                )}

                {/* Password input */}
                <label className="flex items-center relative">
                  <div className="absolute left-[20px]">
                    <BiSolidLock size={24} />
                  </div>
                  <input
                    name="password"
                    placeholder="Password"
                    type={seePass}
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F]"
                    value={password}
                    onChange={(e) => {
                      if (password === "") {
                        setSeePass("password");
                      }
                      setPassword(e.target.value);
                      calculatePasswordStrength(e.target.value);
                    }}
                  />
                  {/* Toggle password visibility */}
                  <div className="absolute right-[9%] cursor-pointer">
                    {password === "" ? null : seePass === "text" ? (
                      <AiFillEye
                        size={24}
                        onClick={() => setSeePass("password")}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        size={24}
                        onClick={() => setSeePass("text")}
                      />
                    )}
                  </div>
                </label>
                <span className="text-sm text-white/60 italic">
                  <span className="font-semibold">Strong Password: </span>
                  IntelliWriter@738
                </span>

                {password !== "" && (
                  <div className="flex items-center gap-2 -mt-3">
                    <div>
                      <span
                        className={`${passwordStrength < 0.6
                          ? "text-red-600"
                          : passwordStrength < 1
                            ? "text-yellow-600"
                            : "text-green-700"
                          } text-sm`}
                      >
                        {passwordStrength < 0.6
                          ? "Weak"
                          : passwordStrength < 1
                            ? "Good"
                            : " Strong"}
                      </span>
                    </div>
                    <div
                      className={`h-1 rounded-full ${passwordStrength < 0.6
                        ? "bg-red-600"
                        : passwordStrength < 1
                          ? "bg-yellow-600"
                          : "bg-green-700"
                        }`}
                      style={{ width: `${passwordStrength * 100}%` }}
                    ></div>
                  </div>
                )}

                {registerError?.password && (
                  <p className="!text-red-500 text-sm px-2">
                    {registerError.password}
                  </p>
                )}

                {/* Confirm password */}
                <label className="flex items-center relative">
                  <div className="absolute left-[20px]">
                    <BiSolidLock size={24} />
                  </div>
                  <input
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type={seeConfirmPass}
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F]"
                    value={confirmPassword}
                    onChange={(e) => {
                      if (confirmPassword === "") {
                        setSeeConfirmPass("password");
                      }
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  {/* Toggle confirm password visibility */}
                  <div className="absolute right-[9%] cursor-pointer">
                    {confirmPassword === "" ? null : seeConfirmPass === "text" ? (
                      <AiFillEye
                        size={24}
                        onClick={() => setSeeConfirmPass("password")}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        size={24}
                        onClick={() => setSeeConfirmPass("text")}
                      />
                    )}
                  </div>
                </label>

                {registerError?.confirmPassword && (
                  <p className="!text-red-500 text-sm px-2">
                    {registerError.confirmPassword}
                  </p>
                )}

                <Button
                  title="Register"
                  width="w-full"
                  disabled={isVerified}
                  className="w-full rounded-lg"
                  btnType="submit"
                />
              </form>
            </div>
          </div>
          <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white mb-[-5px]">

            <p className="pb-6 !m-0 text-center text-white lg:pt-0 pt-3">
              Already have an account?{" "}
              <span className="text-pink-400">
                <Link href="/auth/login-affiliate">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterAffiliatePage;
