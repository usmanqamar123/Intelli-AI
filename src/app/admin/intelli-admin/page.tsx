"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import Button from "@/components/Button";
import Image from "next/image";
import { logoMin } from "../../../../public";
import { FaEnvelope } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import Swal from "sweetalert2";
import AdminLogin from "@/utils/AdminLogin";

const LoginPageSchema = Yup.object().shape({
  username: Yup.string().required("Invalid username").required("username is required"),
  password: Yup.string().required("Password is required"),
});

const BlogLoginPage: React.FC = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    const adminTokens = localStorage.getItem("intelliadmintokens");
    if (adminTokens) {
      setIsAdmin(true)
      router.push('/admin/dashboard/manage-blogs');
    } else {
      setIsAdmin(false)
    }
  }, [router]);

  const handleSubmit = async (values: any) => {
    try {
      const adminData = values;
      const result = await AdminLogin(adminData);
      if (result.success) {
        localStorage.setItem("intelliadmintokens", result.token);
        localStorage.setItem("intelliadminusername", result.username);
        router.push('/admin/dashboard/manage-blogs');
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
        text: `Error: ${error}`,
      });
    }
  };

  return (
    <>
      {isAdmin ? (
        <div className="w-full flex justify-center items-center h-screen">
          <div className={`h-20 w-20 animate-spin rounded-full text-white border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`} />
        </div>
      ) :
        <section className="w-full bg-contact py-16 bg-bottom bg-no-repeat bg-cover flex items-center justify-center">
          <div className="container flex flex-col justify-center items-center rounded shadow-lg md:max-w-xl mx-3">
            <Image
              src={logoMin}
              width={80}
              height={10}
              alt={logoMin}
              priority={true}
              className="border p-2 bg-primary -mb-10 border-white/60 rounded-full z-10"
            />
            <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-10">
              <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={LoginPageSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
                    <div className="w-full text-center font-bold  text-[20px] lg:text-4xl">
                      Welcome to Admin Panel
                    </div>
                    <div className="flex justify-center items-center text-white text-base">
                      Login in to start your session
                    </div>
                    <label className="flex items-center">
                      <div className="absolute lg:left-14 left-[2.5rem]">
                        <FaEnvelope />
                      </div>
                      <Field
                        name="username"
                        placeholder="Username"
                        type="username"
                        className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                      />
                    </label>
                    <ErrorMessage name="username" component="span" className="!text-red-500 text-sm px-2 my-0" />
                    <label className="flex items-center">
                      <div className="absolute lg:left-14 left-[2.5rem]">
                        <BiSolidLock size={24} />
                      </div>
                      <Field
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                      />
                    </label>
                    <ErrorMessage name="password" component="span" className="!text-red-500 text-sm px-2" />
                    <div className="flex w-full justify-center">
                      <Button
                        title="Login"
                        btnType="submit"
                        width="w-full"
                        className="w-full"
                      />
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default BlogLoginPage;
