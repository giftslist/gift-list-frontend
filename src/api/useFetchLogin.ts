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

/**
 * A custom hook to handle user login with API interaction.
 *
 * @returns {Object} An object containing the error state, loading state, and the signIn function.
 * @returns {string|null} return.loginError - The error message if the login fails, or null if there is no error.
 * @returns {boolean} return.loginLoading - The loading state indicating whether the login is in progress.
 * @returns {Function} return.signIn - The function to sign in a user.
 */
export function useFetchLogin() {
	const [loginError, setLoginError] = useState<string | null>(null);
	const [loginLoading, setLoginLoading] = useState<boolean>(false);

	/**
	 * Signs in a user by making an API request.
	 *
	 * @param {Credentials} credentials - The credentials for logging in the user.
	 * @param {Function} callback - The callback function to be called upon successful login, receiving user data.
	 * @returns {Promise<void>} A promise that resolves when the login process is complete.
	 */
	async function signIn(
		credentials: Credentials,
		callback: (data: Data) => void
	): Promise<void> {
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
