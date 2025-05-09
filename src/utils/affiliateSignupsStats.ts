const affiliateStatsSevenDays = async (
  sessionTokens: any,
  referral_Code: any
) => {
  if (!sessionTokens || !referral_Code) {
    return { success: false, message: "User is not authenticated" };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/stats-for-seven-days/${referral_Code}`,
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

const fetchAffiliateStatsForWeeks = async (
  sessionTokens: any,
  referralCode: any
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/stats-for-four-weeks/${referralCode}`,
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
      return { success: true, result: data.result }; // Return only the nested result array
    } else {
      return {
        success: false,
        message: "Failed to fetch signup count for the last 4 weeks",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error fetching signup count for the last 4 weeks",
    };
  }
};

const fetchAffiliateStatsForMonths = async (
  sessionTokens: any,
  referralCode: any
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/stats-for-six-months/${referralCode}`,
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
      return { success: true, result: data.result }; // Return only the nested result array
    } else {
      return {
        success: false,
        message: "Failed to fetch signup count for the last 4 weeks",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error fetching signup count for the last 4 weeks",
    };
  }
};

export {
  fetchAffiliateStatsForWeeks,
  fetchAffiliateStatsForMonths,
  affiliateStatsSevenDays,
};
