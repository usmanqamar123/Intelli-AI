interface BlogProps {
    id: number;
    title: string;
    description: string;
    publishDate: string;
    image: string;
    slug: string;
    tags: string;
    category: string;
}

const blogList = async (): Promise<{
    success: boolean;
    message: string;
    blogs: BlogProps[];
}> => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/blog/blog-list`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.ok) {
            const blogsData: BlogProps[] = await response.json();
           
            return {
                success: true,
                message: "",
                blogs: blogsData,
            };
        } else {
            let errorMessage = "Failed to fetch user data";
            if (response.status === 401) {
                errorMessage = "Unauthorized. Please login again.";
            } else if (response.status >= 500) {
                errorMessage = "Server error. Please try again later.";
            }

            const errorData = await response.json();
            return {
                success: false,
                message: errorData.message || errorMessage,
                blogs: [],
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
            blogs: [],
        };
    }
};

export default blogList;
