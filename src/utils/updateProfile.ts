const updateProfile = async (
  userdata: {
    fullName: string;
    phonenumber: string;
    address: string;
    company_name: string;
    company_position: string;
    short_bio: string;
  }): Promise<{
    success: boolean;
    message: string;
    usersData: {};
  }> => {
  try {
    const sessionTokens = localStorage.getItem("intellitokens");
    const userId = localStorage.getItem("intelliuserId");


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/update/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${sessionTokens}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata)
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message,
        usersData: data.user
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.error,
        usersData: {}
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
      usersData: {}
    };
  }
};

export default updateProfile;
