const IntelliAI = async (query: {
  prompt: string;
  userId: string | null; // Make sure userId is included in the query object
}): Promise<{ success: boolean; response: string }> => {
  const tokens =
    typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/openai/generate-completion`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens}`,
        },
        body: JSON.stringify(query),
      }
    );
    if (response.ok) {
      const res = await response.json();
      return { success: true, response: res.completion };
    } else {
      const errorData = await response.json();
      return { success: false, response: errorData.error };
    }
  } catch (error) {
    return { success: false, response: `Something went wrong!` };
  }
};

export default IntelliAI;
