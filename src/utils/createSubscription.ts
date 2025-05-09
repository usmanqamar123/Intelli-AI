const createSubscription = async ({
    customerId,
    productName,
  }: {
    customerId: number;
    productName: string;
  }): Promise<{ success: boolean; result: string }> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/stripe/create-subscription-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ customerId, productName }),
        }
      );
  
      if (response.ok) {
        const res = await response.json();
        return { success: true, result: res.url };
      } else {
        const errorData = await response.json();
        return { success: false, result: errorData.message };
      }
    } catch (error) {
      return { success: false, result: `Something went wrong!` };
    }
  };
  
  export default createSubscription;
  