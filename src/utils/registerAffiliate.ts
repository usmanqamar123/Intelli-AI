const registerAffiliate = async (registeredUser: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/affiliate/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registeredUser),
      }
    );

    const data = await response.json();

    if (response.status === 201) {
      return {
        success: true,
        message: "Registration successful",
      };
    } else {
      return {
        success: false,
        message: data.error || "An error occurred during registration",
      };
    }
  } catch (error) {
    let errorMessage = "An unknown error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, message: `Timeout error: ${errorMessage}` };
  }
};

export default registerAffiliate;
