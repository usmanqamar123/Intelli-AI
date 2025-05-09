const newChat = async () => {
    const userId = typeof window !== "undefined" ? localStorage.getItem("intelliuserId") : null;
  
    if (!userId) {
      return {
        success: false,
        message: "User not found",
      };
    }
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chats/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return {
          success: true,
          message: "Chat created successfully",
          id: data.createdChat.id, 
          date: data.createdChat.date,
        };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.message || "Failed to create chat",
        };
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
        };
      }
      return {
        success: false,
        message: "An unknown error occurred",
      };
    }
  };
  
  export default newChat;