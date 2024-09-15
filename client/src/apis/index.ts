import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:6600/` });

// Auth Users
export const fetchUsers = () => API.get(`/auth`);
export const getUserByEmail = (email: string) => API.get(`/auth/${email}`);
export const postUserData = (userData: {}) => API.post("/auth", userData);
