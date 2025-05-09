const loginAffiliate = async (userData: {
  email: string;
  password: string;
}): Promise<{
  success: boolean;
  message: string;
  error: string;
  token: string;
  name: string;
  userId: string;
  email: string;
  af_code: string;
}> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/affiliate/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      const data = await response.json();

      return {
        success: true,
        message: data.message,
        token: data.token,
        name: data.aff_user.fullName,
        userId: data.aff_user.id,
        error: "",
        email: data.aff_user.email,
        af_code: data.aff_user.af_code,
      };
    } else {
      const errorData = await response.json();

      return {
        success: false,
        message: errorData.message,
        token: "",
        name: "",
        userId: "",
        email: "",
        af_code: "",
        error: errorData.error,
      };
    }
  } catch (error) {
    console.error("API call error:", error); 

    return {
      success: false,
      message: "Timeout error",
      token: "",
      name: "",
      userId: "",
      email: "",
      af_code: "",
      error: `${error}`,
    };
  }
};

export default loginAffiliate;
