import { useState } from "react";
import { api } from ".";
import { toast } from "sonner";

type Credentials = {
	email: string;
	password: string;
};

type Data = {
	id: string;
	email: string;
	name: string;
};

export function useFetchLogin() {
	const [loginError, setLoginError] = useState(null);
	const [loginLoading, setLoginLoading] = useState(false);

	async function signIn(
		credentials: Credentials,
		callback: (data: Data) => void
	) {
		setLoginError(null);
		setLoginLoading(true);

		await api
			.post("users/login", credentials)
			.then((response) => {
				callback(response.data);
			})
			.catch(({ message }) => {
				toast.error(message);
				setLoginError(message);
			})
			.finally(() => {
				setLoginLoading(false);
			});
	}

	return {
		loginError,
		loginLoading,
		signIn,
	};
}
