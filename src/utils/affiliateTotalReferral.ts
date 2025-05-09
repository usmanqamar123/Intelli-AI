const fetchAffiliateData = async (
  sessionTokens: any,
  referralCode: any,
  endpoint: any
) => {
  if (!sessionTokens || !referralCode) {
    return { success: false, message: "User is not authenticated" };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${endpoint}/${referralCode}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionTokens}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return { success: true, result: data.result };
    } else {
      return { success: false, message: "Failed to fetch data" };
    }
  } catch (error) {
    return { success: false, message: "Error fetching data" };
  }
};

export const affiliateTotalPaidReferral = async (
  sessionTokens: any,
  referralCode: any
) => {
  return fetchAffiliateData(sessionTokens, referralCode, "paid");
};

export const affiliateTotalReferral = async (
  sessionTokens: any,
  referralCode: any
) => {
  return fetchAffiliateData(sessionTokens, referralCode, "sign-up");
};

export const affiliateTotalUnpaidReferral = async (
  sessionTokens: any,
  referralCode: any
) => {
  return fetchAffiliateData(sessionTokens, referralCode, "un-paid");
};
