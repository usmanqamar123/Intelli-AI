const forgotPasswordAffiliate = async (userData: { email: string }): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/affiliate/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message || "Failed to request password reset" };
    }
  } catch (error) {
    return { success: false, message: "Something went wrong!" };
  }
};

export default forgotPasswordAffiliate;
