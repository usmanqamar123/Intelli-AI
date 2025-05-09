"use client";
import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { CiShop } from "react-icons/ci";
import { useRouter } from "next/navigation";


interface CheckoutFormProps {
  secret: string;
  subscriptionId: string;
}

const CheckoutForm = ({secret,subscriptionId}:CheckoutFormProps) => {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const router = useRouter();

  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "";
  const price = searchParams.get("price") || "";
  const option = searchParams.get("option") || "";

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const sessionTokens =
      typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;
    const userId =
      typeof window !== "undefined" ? localStorage.getItem("intelliuserId") : null;

    if (!sessionTokens || !userId) {
      router.push("/auth/login");
      return;
    }

    setClientSecret(secret);

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${sessionTokens}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();

        // Now set the state variables
        setName(data.fullName || "");
        setEmail(data.email || "");
      } catch (error) {
        console.error("Error fetching user data:", (error as Error).message);
      }
    };

    fetchUserData();
  }, [router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    // Simulate payment processing with Stripe
    try {
      const result = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment-success?session_id=${subscriptionId}&id=${localStorage.getItem('intelliuserId')}&plan=${plan}&option=${option}`,
        },
      });



      if (result.error) {
        setErrorMessage(
          result.error.message || "An error occurred. Please try again."
        );
        toast.error("An error occurred. Please try again.");
        setLoading(false);
      } else {
        // Payment succeeded
        toast.success("Payment processed successfully!");
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 z-50">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
      </div>
    );
  }

  return (
    <div className="w-11/12 flex flex-col  lg:flex-row lg:pt-16 mx-3 lg:gap-24 text-black">
      <div className="flex flex-col">
        <Link href="user/plans">
          <button
            className="flex items-center mb-4 cursor-pointer lg:ml-24 pt-5 mx-3 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="mr-2 text-3xl">&larr;</span>
            <h1
              className={`flex font-semibold text-3xl items-center transition-opacity duration-700 ease-in-out transform ${
                isHovered ? "opacity-40" : "opacity-100 translate-y-0"
              }`}
            >
              {isHovered ? (
                "Back"
              ) : (
                <>
                  <CiShop className="inline-block mr-2 bg-white rounded-full p-1 text-black font-semibold text-3xl" />{" "}
                  Intelliwriter
                </>
              )}
            </h1>
          </button>
        </Link>
        {/* Left Side: Payment Details */}
        <div className="w-full lg:w-3/4 p-4 lg:mx-28 flex flex-col ">
          <h1 className="text-base md:text-2xl font-semibold mb-3 text-gray-500">
            Subscribe to Intelliwriter.io {plan}
          </h1>
          <h2 className="text-xl md:text-4xl font-semibold mb-4">
            ${price} <span className="text-gray-500 text-base">{option}</span>
          </h2>

          {/* Plan Amount */}
          <div className="mb-4 mt-10 text-black-important">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm md:text-lg mb-2 font-semibold text-black-important">
                  Intelliwriter.io {plan}
                </p>
                <p className="text-xs text-black-important ">Billed {option}</p>
              </div>
              <p className="text-sm md:text-lg font-semibold text-black-important">
                ${price}
              </p>
            </div>
            <div className="w-full border-t border-gray-500"></div>
          </div>

          {/* Subtotal */}
          <div className="mb-4 text-black-important">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm md:text-lg mb-2 font-semibold text-black-important">
                  Subtotal
                </p>
              </div>
              <p className="text-sm md:text-lg font-semibold text-black-important">
                ${price}
              </p>
            </div>
            <div className="w-full border-t border-gray-500"></div>
          </div>

          {/* Total */}
          <div className="mb-4">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm md:text-lg mb-2 font-semibold text-black-important">
                  Total due today
                </p>
              </div>
              <p className="text-sm md:text-lg font-semibold text-black-important">
                ${price}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Checkout Form */}
      <style jsx>{`
        .left-shadow {
          box-shadow: -5px 0 0px rgba(0, 0, 0, 0.02); /* Adjust shadow values as needed */
        }
      `}</style>

      <div className="w-full min-h-screen lg:w-1/2 p-4 flex flex-col left-shadow shadow-black">
        <form onSubmit={handleSubmit} className="space-y-6 lg:ml-16">
          <div className="mb-6">
            <h2 className="text-base md:text-2xl mb-10 font-semibold">
              Contact information
            </h2>
            <label
              htmlFor="email"
              className="block text-sm md:text-lg font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              readOnly
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 text-black bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <label
            htmlFor="email"
            className="block text-sm md:text-lg font-medium"
          >
            Card information
          </label>
          {clientSecret && <PaymentElement/>}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm md:text-lg font-medium"
            >
              Cardholder name
            </label>
            <input
              id="name"
              type="name"
              placeholder="Full name on card"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          

          <button
            disabled={!stripe || loading}
            className="w-full text-white bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-xl text-sm font-medium rounded-full disabled:opacity-50 disabled:animate-pulse"
          >
            {!loading ? "Pay" : "Processing..."}
          </button>
        </form>

        {/* Footer Text */}
        <div className=" text-center text-sm text-black-important p-4 lg:ml-16 ">
          <p className="my-3 text-black-important ">
            By confirming your subscription, you allow Intelliwriter.io to
            charge you for future payments in accordance with their terms. You
            can always cancel your subscription.
          </p>
          <Link href="https://stripe.com/" target="_blank">
            <p>
              Powered by <span className="font-semibold  ">STRIPE</span>
            </p>
          </Link>
          <p className="font-semibold">
            <Link
              href="https://stripe.com/legal/consumer"
              target="_blank"
              className="underline"
            >
              Terms
            </Link>{" "}
            |
            <Link
              href="https://stripe.com/privacy"
              target="_blank"
              className="underline"
            >
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
