import axios from "axios";

const FreeTools = async (prompt: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_FREE_TOOLS_URL}/freeapi`,
      {
        prompt: prompt
      },
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_FREE_TOOLS_API_KEY, 
          'Content-Type': 'application/json'
        }
      }
    );
  
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default FreeTools;
