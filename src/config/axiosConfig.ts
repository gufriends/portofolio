import axios from "axios";

const API_URL = "https://api.gufriends.me";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthHeader = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const verifyToken = async (token: string) => {
  try {
    const response = await axiosInstance.post("/verify-token", {
      token: token,
    });

    return response.data.message == "Token Verified!";
  } catch (error) {
    console.error("Token verification failed:", error);
    return { valid: false };
  }
};

axiosInstance.interceptors.response.use(
  (response) => response, // Handle response success

  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access, please login again.");
    }
    return Promise.reject(error); // Re-throw error
  }
);

export default { axiosInstance, setAuthHeader, verifyToken };
