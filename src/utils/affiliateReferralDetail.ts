const fetchAffiliateDetails = async (
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
      return { success: false, message: "Failed to fetch signup count" };
    }
  } catch (error) {
    return { success: false, message: "Error fetching signup count" };
  }
};

export const affiliateReferralDetail = async (
  sessionTokens: any,
  referralCode: any
) => {
  return fetchAffiliateDetails(
    sessionTokens,
    referralCode,
    "affiliates-details"
  );
};

export const affiliateReferralFree = async (
  sessionTokens: any,
  referralCode: any
) => {
  return fetchAffiliateDetails(
    sessionTokens,
    referralCode,
    "affiliates-details-basic"
  );
};

export const affiliateReferralPaying = async (
  sessionTokens: any,
  referralCode: any
) => {
  return fetchAffiliateDetails(
    sessionTokens,
    referralCode,
    "affiliates-details-premium"
  );
};
