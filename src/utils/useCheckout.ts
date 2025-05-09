import { PaymentIntent } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

export function useCheckout(price: any , store: any){

    const [loading, setLoading] = useState<boolean>(true)
    const[paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(null);

    async function fetch() {
        // const intent = await createPaymentIntent(price, store);
        // setPaymentIntent(intent);
        setLoading(false)
    }

    useEffect (() => {
fetch();

    },
    []);

    return {loading, paymentIntent}
}