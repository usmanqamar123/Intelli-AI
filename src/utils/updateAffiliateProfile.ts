const updateAffiliateProfile = async (
    userdata: {
      userId: string;
      updatedUserData: string;
      name: string;
      website: string;
      company_name: string;
      country: string;
      phone_number: string;
      address: string; 
      af_code: string; 
      profile_picture: string; 

    }
  ): Promise<{
    success: boolean;
    message: string;
    usersData: {};
  }> => {
    try {
      const sessionTokens = localStorage.getItem("intelliaffiliate_token");
      const userId = localStorage.getItem("intelliuserId");
  
      if (!sessionTokens || !userId) {
        return {
          success: false,
          message: "User is not authenticated",
          usersData: {},
        };
      }
  
      if (userdata.profile_picture && !userdata.profile_picture.startsWith('data:image/')) {
        return {
          success: false,
          message: "Profile picture is not properly formatted",
          usersData: {},
        };
      }


      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/affiliate/update/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${sessionTokens}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
  
      if (response.ok) {
        const data = await response.json();
        return {
          success: true,
          message: data.message,
          usersData: data.user,
        };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.error || "Failed to update user",
          usersData: {},
        };
      }
    } catch (error) {
      let errorMessage = "An error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return {
        success: false,
        message: errorMessage,
        usersData: {},
      };
    }
  };
  
  export default updateAffiliateProfile;
  