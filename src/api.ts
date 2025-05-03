export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchData = async (endpoint: string) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  return res.json();
};
