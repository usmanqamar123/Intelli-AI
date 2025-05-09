import Swal from "sweetalert2";

const deleteUser = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const sessionTokens = localStorage.getItem("intellitokens");
    const userId = localStorage.getItem("intelliuserId");

    if (!sessionTokens || !userId) {
      return { success: false, message: "User session not found" };
    }

    const confirmation = await Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete your account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmation.isConfirmed) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionTokens}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Clear session storage
        localStorage.removeItem("intellitokens");
        localStorage.removeItem("intelliname");
        localStorage.removeItem("intellinameLetter");
        localStorage.removeItem("intelliuserId");
        localStorage.removeItem("intelliuserEmail");

        const data = await response.json();
        return { success: true, message: data.message };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.message || "Failed to delete user",
        };
      }
    } else {
      return { success: false, message: "User deletion canceled" };
    }
  } catch (error) {
    return { success: false, message: `${error}` };
  }
};

export default deleteUser;
