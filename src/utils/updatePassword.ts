const updatePassword = async (passwordData: {
    oldPassword: string;
    newPassword: string
}): Promise<{
    success: boolean;
    message: string
}> => {
    try {
        const sessionTokens = localStorage.getItem("intellitokens");
        const userId = localStorage.getItem("intelliuserId");

        if (!sessionTokens || !userId) {
            return { success: false, message: "User session not found" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/update-password/${userId}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${sessionTokens}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(passwordData),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, message: data.message };
        } else {
            const errorData = await response.json();
            return { success: false, message: errorData.message || "Failed to update password" };
        }
    } catch (error) {
        return { success: false, message: `${error}` };
    }
};

export default updatePassword;
