import { useState } from "react";
import { api } from ".";

type Credentials = {
	name: string;
	email: string;
	password: string;
};

export function useFetchCreateUser() {
	const [userError, setUserError] = useState(null);
	const [userLoading, setUserLoading] = useState(false);

	async function createUser(credentials: Credentials, callback: () => void) {
		setUserError(null);
		setUserLoading(true);

		await api
			.post("/users", credentials)
			.then(() => {
				callback();
			})
			.catch(({ message }) => {
				setUserError(message);
			})
			.finally(() => {
				setUserLoading(false);
			});
	}

	return {
		userError,
		userLoading,
		createUser,
	};
}
