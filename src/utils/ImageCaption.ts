import axios from "axios";

const ImageCaption = async (data: {
  image: File | Blob | null;
  tone: string;
  additionalInfo: string;
}): Promise<{
  success: boolean;
  message: string;
  captions: string[];
}> => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("intellitokens") : null;

  try {
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("tone", data.tone);
    formData.append("additionalInfo", data.additionalInfo);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/openai/generate-captio`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      const result = response.data;
      return {
        success: true,
        message: "Caption generated successfully",
        captions: [result.caption1, result.caption2, result.caption3],
      };
    } else {
      const errorData = response.data;
      return {
        success: false,
        message: errorData.error || "Unknown error",
        captions: [],
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Something went wrong: ${error}`,
      captions: [],
    };
  }
};

export default ImageCaption;
