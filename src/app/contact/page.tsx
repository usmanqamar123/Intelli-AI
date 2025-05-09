// "use client";

// import contactSubmit from "@/utils/contactSubmit";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { Shape1, Shape2, Shape3, Shape4, Shape5 } from "../../../public";

// interface ContactPageLayoutProps {
//   children: React.ReactNode;
//   name?: string;
//   email?: string;
//   phone?: string;
//   subject?: string;
//   message?: string;
//   agree?: string;
// }

// const ContactPageLayout: React.FC<ContactPageLayoutProps> = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     agree: false,
//   });
//   const [contactError, setContactError] =
//     useState<ContactPageLayoutProps | null>(null);
//   const router = useRouter();

//   const validatePhone = (phone: string): boolean => {
//     const phoneRegex = /^[+]?[0-9]{1,3}?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/;
//     return phoneRegex.test(phone);
//   };

//   const validateEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const userData = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         subject: formData.subject,
//         message: formData.message,
//       };

//       const result = await contactSubmit(userData);
//       if (!formData.name) {
//         setContactError({
//           name: "Name is required",
//           children: null,
//         });
//         return;
//       } else if (!formData.email) {
//         setContactError({
//           email: "Email is required",
//           children: null,
//         });
//         return;
//       } else if (!formData.phone) {
//         setContactError({
//           phone: "Phone no. is required",
//           children: null,
//         });
//         return;
//       } else if (!validatePhone(formData.phone)) {
//         setContactError({
//           phone: "Please enter a valid phone number",
//           children: null,
//         });
//         return;
//       } else if (!validatePhone(formData.phone)) {
//         setContactError({
//           phone: "Please enter a valid phone number",
//           children: null,
//         });
//         return;
//       } else if (!validateEmail(formData.email)) {
//         setContactError({
//           email: "Please enter a valid email address",
//           children: null,
//         });
//         return;
//       } else if (!formData.subject) {
//         setContactError({
//           subject: "Subject is required",
//           children: null,
//         });
//         return;
//       } else if (!formData.message) {
//         setContactError({
//           message: "Message is required",
//           children: null,
//         });
//         return;
//       } else if (!formData.agree) {
//         setContactError({
//           children: null,
//           agree: "Accept the terms and conditions first",
//         });
//         return;
//       } else {
//         setContactError({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//           children: null,
//         });

//         if (result.success) {
//           Swal.fire({
//             icon: "success",
//             title: "Success",
//             text: result.message,
//           });
//           router.push("/");
//         } else {
//           Swal.fire({
//             icon: "error",
//             title: "Ooops...",
//             text: result.message,
//           });
//         }
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Ooops...",
//         text: "Something went wrong!",
//       });
//     }
//   };

//   return (
//     <div className="mt-24">
//       {/* Contact Images */}
//       <>
//         <div className="relative">
//           <div className="rounded-lg md:block hidden absolute w-fit h-auto top-[650px] z-10 left-[250px]">
//             <Image
//               src={Shape5}
//               alt="Description of the image"
//               width={60}
//               height={60}
//               loading="lazy"
//             />
//           </div>
//         </div>

//         <div className="relative">
//           <div className="rounded-lg absolute md:block hidden w-fit h-auto top-[750px] z-10 left-[300px]">
//             <Image
//               src={Shape1}
//               alt="Description of the image"
//               width={120}
//               height={120}
//               loading="lazy"
//             />
//           </div>
//         </div>

//         <div className="relative">
//           <div className="rounded-lg absolute md:block hidden w-fit h-auto top-[250px] z-10 right-[230px]">
//             <Image
//               src={Shape2}
//               alt="Description of the image"
//               width={60}
//               height={60}
//               loading="lazy"
//             />
//           </div>
//         </div>

//         <div className="relative">
//           <div className="rounded-lg absolute md:block hidden w-fit h-auto top-[320px] z-20 right-[130px]">
//             <Image
//               src={Shape4}
//               alt="Description of the image"
//               width={115}
//               height={115}
//               loading="lazy"
//             />
//           </div>
//         </div>

//         <div className="relative">
//           <div className="rounded-lg absolute md:block hidden w-fit h-auto top-[400px] z-10 right-40">
//             <Image
//               src={Shape3}
//               alt="Description of the image"
//               width={130}
//               height={130}
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </>

//       {/* Contact Content */}
//       <div className="relative z-20  min-h-screen lg:py-20 py-10 md:p-10 lg:mt-[-100px] xl:pt-[160px] flex items-center justify-center">
//         <section className="z-20 container flex justify-center items-center">
//           <div className="border-2 border-opacity-10 md:max-w-[800px] border-white rounded-3xl z-20 p-2">
//             <div className="flex flex-col items-center py-8">
//               <h1 className="text-[36px] md:text-[44px] font-semibold text-white text-center mb-4">
//                 Get in Touch
//               </h1>

//               <p className="hidden md:inline text-[16px] md:text-[16px] w-[80%] opacity-80 lg:text-[16px] text-white text-center">
//                 Our team excels at providing timely support tailored to your
//                 needs. We eagerly anticipate your communication.
//               </p>

//               <div className="mt-8 w-full justify-center flex">
//                 <form onSubmit={handleSubmit} className="w-full max-w-lg">
//                   <div className="flex flex-col space-y-4">
//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="name"
//                         className="text-white mb-2 font-bold"
//                       >
//                         Your name <span className="text-pink-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your name"
//                         value={formData.name}
//                         onChange={(e) =>
//                           setFormData((prevData) => ({
//                             ...prevData,
//                             name: e.target.value,
//                           }))
//                         }
//                         className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
//                       />
//                     </div>
//                     {contactError?.name && (
//                       <p className="!text-red-500 text-sm px-2">
//                         {contactError.name}
//                       </p>
//                     )}

//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="email"
//                         className="text-white mb-2 font-bold"
//                       >
//                         Your email <span className="text-pink-500">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData((prevData) => ({
//                             ...prevData,
//                             email: e.target.value,
//                           }))
//                         }
//                         className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
//                       />
//                     </div>
//                     {contactError?.email && (
//                       <p className="!text-red-500 text-sm px-2">
//                         {contactError.email}
//                       </p>
//                     )}

//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="phone"
//                         className="text-white mb-2 font-bold"
//                       >
//                         Your phone <span className="text-pink-500">*</span>
//                       </label>
//                       <input
//                         type="tel"
//                         placeholder="i.e Enter your phone"
//                         value={formData.phone}
//                         onChange={(e) =>
//                           setFormData((prevData) => ({
//                             ...prevData,
//                             phone: e.target.value,
//                           }))
//                         }
//                         className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
//                       />
//                     </div>
//                     {contactError?.phone && (
//                       <p className="!text-red-500 text-sm px-2">
//                         {contactError.phone}
//                       </p>
//                     )}

//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="subject"
//                         className="text-white mb-2 font-bold"
//                       >
//                         Subject <span className="text-pink-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter subject"
//                         value={formData.subject}
//                         onChange={(e) =>
//                           setFormData((prevData) => ({
//                             ...prevData,
//                             subject: e.target.value,
//                           }))
//                         }
//                         className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
//                       />
//                     </div>
//                     {contactError?.subject && (
//                       <p className="!text-red-500 text-sm px-2">
//                         {contactError.subject}
//                       </p>
//                     )}

//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="message"
//                         className="text-white mb-2 font-bold"
//                       >
//                         Message <span className="text-pink-500">*</span>
//                       </label>
//                       <textarea
//                         placeholder="Enter your message"
//                         value={formData.message}
//                         onChange={(e) =>
//                           setFormData((prevData) => ({
//                             ...prevData,
//                             message: e.target.value,
//                           }))
//                         }
//                         className="contact-textarea bg-gradient-to-b from-[#0F1333] to-[#1D203F]"
//                       ></textarea>
//                     </div>
//                     {contactError?.message && (
//                       <p className="!text-red-500 text-sm px-2">
//                         {contactError.message}
//                       </p>
//                     )}

//                     <div className="flex sm:flex-row flex-col gap-3 pt-4 justify-between items-center">
//                       <div className="flex flex-col">
//                         <div className="flex gap-2 items-center lg:w-full">
//                           <input
//                             type="checkbox"
//                             checked={formData.agree}
//                             onChange={(e) =>
//                               setFormData((prevData) => ({
//                                 ...prevData,
//                                 agree: e.target.checked,
//                               }))
//                             }
//                             id="terms-condition"
//                             className="form-checkbox h-5 w-5 border-2 border-gray-300 rounded cursor-pointer transition duration-200 ease-in-out accent-blue-500"
//                           />
//                           <label
//                             htmlFor="terms-condition"
//                             className="form-checkbox-label text-white"
//                           >
//                             I agree to the terms and conditions
//                           </label>
//                         </div>
//                         {contactError?.agree && (
//                           <p className="!text-red-500 text-sm px-2">
//                             {contactError.agree}
//                           </p>
//                         )}
//                       </div>

//                       <div>
//                         <button
//                           type="submit"
//                           className="bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full"
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ContactPageLayout;

"use client";

import contactSubmit from "@/utils/contactSubmit";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Shape1, Shape2, Shape3, Shape4, Shape5 } from "../../../public";

interface ContactPageLayoutProps {
  children: React.ReactNode;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  agree?: string;
}

const ContactPageLayout: React.FC<ContactPageLayoutProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });
  const [contactError, setContactError] =
    useState<ContactPageLayoutProps | null>(null);
  const router = useRouter();

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[0-9]{1,3}?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const result = await contactSubmit(userData);
      if (!formData.name) {
        setContactError({
          name: "Name is required",
          children: null,
        });
        return;
      } else if (!formData.email) {
        setContactError({
          email: "Email is required",
          children: null,
        });
        return;
      } else if (!formData.phone) {
        setContactError({
          phone: "Phone no. is required",
          children: null,
        });
        return;
      } else if (!validatePhone(formData.phone)) {
        setContactError({
          phone: "Please enter a valid phone number",
          children: null,
        });
        return;
      } else if (!validatePhone(formData.phone)) {
        setContactError({
          phone: "Please enter a valid phone number",
          children: null,
        });
        return;
      } else if (!validateEmail(formData.email)) {
        setContactError({
          email: "Please enter a valid email address",
          children: null,
        });
        return;
      } else if (!formData.subject) {
        setContactError({
          subject: "Subject is required",
          children: null,
        });
        return;
      } else if (!formData.message) {
        setContactError({
          message: "Message is required",
          children: null,
        });
        return;
      } else if (!formData.agree) {
        setContactError({
          children: null,
          agree: "Accept the terms and conditions first",
        });
        return;
      } else {
        setContactError({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          children: null,
        });

        if (result.success) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: result.message,
          });
          router.push("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: result.message,
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="mt-24">
      {/* Contact Images */}
      <>
        <div className="relative">
          <div className="rounded-lg md:block hidden absolute w-fit h-auto top-[650px] z-10 left-[250px]">
            <Image
              src={Shape5}
              alt="Description of the image"
              width={60}
              height={60}
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg absolute md:block hidden w-fit h-auto top-[750px] z-10 left-[300px]">
            <Image
              src={Shape1}
              alt="Description of the image"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg absolute md:block hidden w-fit h-auto top-[250px] z-10 right-[230px]">
            <Image
              src={Shape2}
              alt="Description of the image"
              width={60}
              height={60}
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg absolute md:block hidden w-fit h-auto top-[320px] z-20 right-[130px]">
            <Image
              src={Shape4}
              alt="Description of the image"
              width={115}
              height={115}
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg absolute md:block hidden w-fit h-auto top-[400px] z-10 right-40">
            <Image
              src={Shape3}
              alt="Description of the image"
              width={130}
              height={130}
              loading="lazy"
            />
          </div>
        </div>
      </>

      {/* Contact Content */}
      <div className="relative z-20  min-h-screen lg:py-20 py-10 md:p-10 lg:mt-[-100px] xl:pt-[160px] flex items-center justify-center">
        <section className="z-20 container flex justify-center items-center">
          <div className="border-2 border-opacity-10 md:max-w-[800px] border-white rounded-3xl z-20 p-2">
            <div className="flex flex-col items-center py-8">
              <h1 className="text-[36px] md:text-[44px] font-semibold text-white text-center mb-4">
                Get in Touch
              </h1>

              <p className="hidden md:inline text-[16px] md:text-[16px] w-[80%] opacity-80 lg:text-[16px] text-white text-center">
                Our team excels at providing timely support tailored to your
                needs. We eagerly anticipate your communication.
              </p>

              <div className="mt-8 w-full justify-center flex">
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="text-white mb-2 font-bold"
                      >
                        Your name <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            name: e.target.value,
                          }))
                        }
                        className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
                      />
                    </div>
                    {contactError?.name && (
                      <p className="!text-red-500 text-sm px-2">
                        {contactError.name}
                      </p>
                    )}

                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-white mb-2 font-bold"
                      >
                        Your email <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            email: e.target.value,
                          }))
                        }
                        className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
                      />
                    </div>
                    {contactError?.email && (
                      <p className="!text-red-500 text-sm px-2">
                        {contactError.email}
                      </p>
                    )}

                    <div className="flex flex-col">
                      <label
                        htmlFor="phone"
                        className="text-white mb-2 font-bold"
                      >
                        Your phone <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="i.e Enter your phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            phone: e.target.value,
                          }))
                        }
                        className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
                      />
                    </div>
                    {contactError?.phone && (
                      <p className="!text-red-500 text-sm px-2">
                        {contactError.phone}
                      </p>
                    )}

                    <div className="flex flex-col">
                      <label
                        htmlFor="subject"
                        className="text-white mb-2 font-bold"
                      >
                        Subject <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            subject: e.target.value,
                          }))
                        }
                        className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
                      />
                    </div>
                    {contactError?.subject && (
                      <p className="!text-red-500 text-sm px-2">
                        {contactError.subject}
                      </p>
                    )}

                    <div className="flex flex-col">
                      <label
                        htmlFor="message"
                        className="text-white mb-2 font-bold"
                      >
                        Message <span className="text-pink-500">*</span>
                      </label>
                      <textarea
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            message: e.target.value,
                          }))
                        }
                        className="contact-textarea bg-gradient-to-b from-[#0F1333] to-[#1D203F]"
                      ></textarea>
                    </div>
                    {contactError?.message && (
                      <p className="!text-red-500 text-sm px-2">
                        {contactError.message}
                      </p>
                    )}

                    <div className="flex sm:flex-row flex-col gap-3 pt-4 justify-between items-center">
                      <div className="flex flex-col">
                        <div className="flex gap-2 items-center lg:w-full">
                          <input
                            type="checkbox"
                            checked={formData.agree}
                            onChange={(e) =>
                              setFormData((prevData) => ({
                                ...prevData,
                                agree: e.target.checked,
                              }))
                            }
                            id="terms-condition"
                            className="form-checkbox h-5 w-5 border-2 border-gray-300 rounded cursor-pointer transition duration-200 ease-in-out accent-blue-500"
                          />
                          <label
                            htmlFor="terms-condition"
                            className="form-checkbox-label text-white"
                          >
                            I agree to the terms and conditions
                          </label>
                        </div>
                        {contactError?.agree && (
                          <p className="!text-red-500 text-sm px-2">
                            {contactError.agree}
                          </p>
                        )}
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPageLayout;
