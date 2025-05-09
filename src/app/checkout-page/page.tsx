"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import Loading from "../loading";
import { useRouter,useSearchParams } from "next/navigation";

// Load your publishable key from Stripe
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "";
  const price = searchParams.get("price") || "";
  const option = searchParams.get("option") || "";
  const [clientSecret, setClientSecret] = useState("");
  const [subscriptionId,setSubscriptionID] = useState("");

  useEffect(() => {
    // Fetch or generate clientSecret dynamically
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stripe/payment-intent`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ customerId: localStorage.getItem("intelliuserId"), productName:plan }),
          }
        );

        const data = await response.json();
        setClientSecret(data.clientSecret);
        setSubscriptionID(data.subscriptionId)
      } catch (error) {
        console.error("Error fetching client secret", error);
      }
    };

    fetchClientSecret();
  }, []);

  if (!clientSecret) {
    return <Loading />; // Show loading while clientSecret is being fetched
  }

  const options = {
    clientSecret: clientSecret, // Pass the dynamically fetched clientSecret
  };

  return (
    <div className="h-full bg-white">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm  secret={clientSecret} subscriptionId={subscriptionId}/>
      </Elements>
    </div>
  );
};

export default PaymentPage;
