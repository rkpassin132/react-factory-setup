
export const getAuthToken = async (): Promise<string | null> => {
  try {
    const token = await localStorage.getItem("accessToken");
    return token;
  } catch (error) {
    console.error("Error retrieving auth token", error);
    return null;
  }
};

export const setAuthToken = async (token: string): Promise<void> => {
  try {
    await localStorage.setItem("accessToken", token);
  } catch (error) {
    console.error("Error setting auth token", error);
  }
};

export const removeAuthToken = async (): Promise<void> => {
  try {
    await localStorage.removeItem("accessToken");
  } catch (error) {
    console.error("Error removing auth token", error);
  }
};
