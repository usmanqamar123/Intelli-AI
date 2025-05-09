const AdminLogin = async (adminData: {
    username: string;
    password: string;
  }): Promise<{
    success: boolean;
    message: string;
    token: string;
    username: string;
    adminId: string;
  }> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminData),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
  
        return {
          success: true,
          message: data.message,
          token: data.token,
          username: data.username,
          adminId: data.id,
        };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.message,
          token: "",
          username: "",
          adminId: "",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: `Timeout error: ${error}`,
        token: "",
        username: "",
        adminId: "",
      };
    }
  };
  
  export default AdminLogin;
  