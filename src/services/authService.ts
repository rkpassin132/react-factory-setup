import http from "./httpService";
import {
  setAuthToken,
  removeAuthToken,
  getAuthToken,
} from "./localStorageService";
import { ApiResponse } from "../utils/interfaces/apiResponse.interface";
import {
  AuthResponse,
  LoginCredentials,
  SignupData,
} from "../utils/interfaces/auth.interface";

const login = async (
  credentials: LoginCredentials
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await http.post<ApiResponse<AuthResponse>>(
      "/auth/login",
      credentials
    );
    const { data } = response.data;

    if (data?.token) {
      await setAuthToken(data.token);
    }

    return response.data;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

const signup = async (
  signupData: SignupData
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await http.post<ApiResponse<AuthResponse>>(
      "/auth/signup",
      signupData
    );
    const { data } = response.data;

    if (data?.token) {
      await setAuthToken(data.token);
    }

    return response.data;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

const logout = async (): Promise<void> => {
  try {
    await removeAuthToken();
    // Optionally, notify the server to invalidate the session
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};

const getCurrentUser = (): string | null => {
  return getAuthToken();
};

const handleAuthError = (error: any): void => {
  if (error.response) {
    const { status, data } = error.response;

    const messages: { [key: number]: string } = {
      400: "Bad request: Invalid credentials provided.",
      401: "Unauthorized: Authentication failed. Logging out.",
      500: "Server error: An internal server error occurred.",
    };

    console.error(messages[status] || `Unexpected error: ${data?.message}`);
    if (status === 401) logout();
  } else {
    console.error("Network or unexpected error:", error.message || error);
  }
};

export { login, signup, logout, getCurrentUser };
