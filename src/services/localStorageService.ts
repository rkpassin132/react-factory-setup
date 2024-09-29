export const getAuthToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const setAuthToken = async (token: string) => {
  return localStorage.setItem("accessToken", token);
};

export const removeAuthToken = async () => {
  return localStorage.removeItem("accessToken");
};
