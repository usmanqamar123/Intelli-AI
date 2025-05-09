"use client";

import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import Swal from "sweetalert2";
import {Logo } from "../../../../public";
import resetPasswordAffiliate from "@/utils/resetPasswordAffiliate";

interface ResetPasswordPageProps {
  children: React.ReactNode;
  newPassword?: string | string[];
  confirmPassword?: string | string[];
}

const ResetAffiliate: React.FC<ResetPasswordPageProps | any> = (props) => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState<string>("");
  const [seePass, setSeePass] = useState<"text" | "password">("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confseePass, setConfseePass] = useState<"text" | "password">(
    "password"
  );
  const [resetError, setResetError] = useState<ResetPasswordPageProps | null>(
    null
  );
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const calculatePasswordStrength = (password: string) => {
    // Regular expressions to check for required criteria
    const capitalLetterRegex = /[A-Z]/;
    const smallLetterRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialSymbolRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    // Check if the password meets each requirement
    const hasCapitalLetter = capitalLetterRegex.test(password);
    const hasSmallLetter = smallLetterRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialSymbol = specialSymbolRegex.test(password);
    const hasValidLength = password.length >= 8;

    // Calculate the password strength
    let strength = 0;
    if (hasCapitalLetter) strength += 0.2;
    if (hasSmallLetter) strength += 0.2;
    if (hasNumber) strength += 0.2;
    if (hasSpecialSymbol) strength += 0.2;
    if (hasValidLength) strength += 0.2;

    // Update the state synchronously
    setPasswordStrength(strength);

    // Update the error message
    setResetError({
      newPassword: strength < 1 ? "Password format is not correct!" : "",
      confirmPassword: "",
      children: null,
    });
  };

  const urlParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const reset_token = urlParams ? urlParams.get("token") : null;

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resetToken = reset_token;
      const userData = { resetToken, newPassword };
      if (!newPassword) {
        setResetError({
          newPassword: "Password is required",
          children: null,
        });
        return;
      } else if (!confirmPassword) {
        setResetError({
          confirmPassword: "Confirm Password is required",
          children: null,
        });
        return;
      } else if (newPassword !== confirmPassword) {
        await Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Password and Confirm password not matched!",
        });
        return;
      } else {
        setResetError({
          newPassword: "",
          confirmPassword: "",
          children: null,
        });
        const result = await resetPasswordAffiliate(userData);
        if (result.success) {
          await Swal.fire({
            icon: "success",
            title: "Success",
            text: result.message,
          });
          router.push("/auth/login-affiliate");
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
        <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-5">
          <form onSubmit={submitForm} autoComplete="off">
            <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
              <div className="flex justify-center items-center mb-5">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={300}
                    height={32}
                    priority={true}
                    className="object-contain h-16 w-fit"
                  />
                </Link>
              </div>
              <div className="text-center gap-y-2 flex flex-col">
                <h1 className="font-bold text-3xl md:text-4xl text-white">
                  Reset
                </h1>
                <p>
                  Reset now and focus on your work today with affiliate program
                </p>
              </div>

              {/* New Password input */}
              <label className="flex items-center relative">
                <div className="absolute left-[20px]">
                  <BiSolidLock size={24} />
                </div>
                <input
                  name="newPassword"
                  placeholder="New Password"
                  type={seePass}
                  className="contact-input bg-gradient-to-b !pl-[48px] md:from-[#111630] md:to-[#1d214c] from-[#000b1e] to-[#010208]"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    calculatePasswordStrength(e.target.value);
                  }}
                />
                <div className="absolute right-[7%] cursor-pointer">
                  {newPassword === "" ? null : seePass === "text" ? (
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
              <span className="ml-3 -mt-2 text-sm text-white/60 italic">
                (<span className="font-semibold">Strong Password: </span>
                IntelliWriter@9275)
              </span>

              {newPassword !== "" && (
                <div className="flex items-center gap-2 -mt-3">
                  <div>
                    <span
                      className={`${
                        passwordStrength < 0.6
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
                        : "Strong"}
                    </span>
                  </div>
                  <div
                    className={`h-1 rounded-full ${
                      passwordStrength < 0.6
                        ? "bg-red-600"
                        : passwordStrength < 1
                        ? "bg-yellow-600"
                        : "bg-green-700"
                    }`}
                    style={{ width: `${passwordStrength * 100}%` }}
                  ></div>
                </div>
              )}

              {resetError?.newPassword && (
                <p className="!text-red-500 text-sm px-2">
                  {resetError.newPassword}
                </p>
              )}

              {/* Confirm Password input */}
              <label className="flex items-center relative">
                <div className="absolute left-[20px]">
                  <BiSolidLock size={24} />
                </div>
                <input
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type={confseePass}
                  className="contact-input bg-gradient-to-b !pl-[48px] md:from-[#111630] md:to-[#1d214c] from-[#000b1e] to-[#010208]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="absolute right-[7%] cursor-pointer">
                  {confirmPassword === "" ? null : confseePass === "text" ? (
                    <AiFillEye
                      size={24}
                      onClick={() => setConfseePass("password")}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size={24}
                      onClick={() => setConfseePass("text")}
                    />
                  )}
                </div>
              </label>
              {resetError?.confirmPassword && (
                <p className="!text-red-500 text-sm px-2">
                  {resetError.confirmPassword}
                </p>
              )}

              <Button
                title="Reset Password"
                width="w-full"
                className="w-full"
                btnType="submit"
              />
            </div>

            <p className="pb-6 !m-0 text-center text-white lg:pt-0 pt-3">
              Don&apos;t have an account?{" "}
              <span className="text-pink-400">
                <Link href="/auth/register-affiliate">Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetAffiliate;
