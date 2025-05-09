const resetPasswordUser = async (userData: {
  resetToken: string | null;
  newPassword: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/affiliate/reset-password`,
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

      return { success: true, message: data.message };
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.message };
    }
  } catch (error) {
    return { success: false, message: `Timeout error: ${error}` };
  }
};

export default resetPasswordUser;
