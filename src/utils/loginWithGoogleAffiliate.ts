const loginAffiliateWithGoogle = async (userData: {
    session: string;
    field : string;
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
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login-google-affiliate`,
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
          name: data.user.fullName,
          userId: data.user.id,
          error: "",
          email: data.user.email,
          af_code: data.user.af_code,
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
  
  export default loginAffiliateWithGoogle;
  