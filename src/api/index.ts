import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:4444",
	headers: {
		"Content-Type": "application/json",
	},
});

export { useFetchDashboard } from "./useFetchDashboard";
export { useFetchCreateEvent } from "./useFetchCreateEvent";
export { useFetchCreateUser } from "./useFetchCreateUser";
export { useFetchLogin } from "./useFetchLogin";
export { useFetchEvent } from "./useFetchEvent";
export { useFetchCreateGifts } from "./useFetchCreateGifts";
export { useFetchDeleteGift } from "./useFetchDeleteGift";
