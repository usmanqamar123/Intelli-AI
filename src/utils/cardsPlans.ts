// import { PlanData } from "@/types";

// const cardsPlans = async (): Promise<{
//   success: boolean;
//   data: PlanData[] | null;
//   error: string;
// }> => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plans`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       const data: PlanData[] = await response.json();

//       const plansWithArrayFeatures = data.map((plan) => ({
//         ...plan,
//         features: plan.features
//           .split(",")
//           .map((feature: string) => feature.trim()),
//       }));

//       return { success: true, data: plansWithArrayFeatures, error: "" };
//     } else {
//       const errorData = await response.json();
//       return { success: false, data: null, error: errorData.message };
//     }
//   } catch (error) {
//     return { success: false, data: null, error: "Something went wrong!" };
//   }
// };

// export default cardsPlans;
