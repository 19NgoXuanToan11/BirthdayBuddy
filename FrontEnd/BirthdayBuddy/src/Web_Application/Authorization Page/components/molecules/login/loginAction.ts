import { authAPI } from "../../../../../../src/config/authAPI";

export const loginAction = async ({ request }: { request: Request }) => {
    try {
        const formData: any = await request.formData();
        const username = formData.get("account");
        const password = formData.get("password");
        const result = await authAPI.loginApi({ username, password });

        if (result && result.success) {
            console.log("Login successful");
            return { success: true }; 
        } else {
            console.error("Login failed");
            return { success: false }; 
        }
    } catch (error) {
        console.error("Error occurred during login:", error);
        return { success: false, error: "An unexpected error occurred. Please try again later." };
    }
};
