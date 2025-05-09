const createBlog = async (formData: {
  title: string;
  description: string;
  publishDate: string;
  image: File | null;
  slug: string;
  tags: string;
  category: string;
}): Promise<{
  success: boolean;
  message: string;
}> => {
  const adminToken =
    typeof window !== "undefined"
      ? localStorage.getItem("intelliadmintokens")
      : null;

  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/blog/create`;
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("publishDate", formData.publishDate);
    if (formData.image) {
      formDataToSubmit.append("image", formData.image);
    }
    formDataToSubmit.append("slug", formData.slug);
    formDataToSubmit.append("tags", formData.tags);
    formDataToSubmit.append("category", formData.category);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
      body: formDataToSubmit,
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message,
      };
    } else {
      let errorMessage = "Failed to create blog";
      if (response.status === 401) {
        errorMessage = "Unauthorized. Please login again.";
      } else if (response.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      }
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || errorMessage,
      };
    }
  } catch (error) {
    let errorMessage = "Something went wrong!";
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      errorMessage = "Network error. Please check your connection.";
    }
    return {
      success: false,
      message: `${errorMessage} Error: ${error}`,
    };
  }
};

export default createBlog;



