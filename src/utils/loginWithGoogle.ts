const loginWithGoogle = async (userData: {
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
    isNew?: boolean;

  }> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login-google`,
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
          isNew: data.user.isNew,
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
          error: errorData.error,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: `Timeout error`,
        token: "",
        name: "",
        userId: "",
        email: "",
        error: `${error}`,
      };
    }
  };
  
  export default loginWithGoogle;
  