import { useState } from "react";
import { api } from ".";

type Credentials = {
	name: string;
	email: string;
	password: string;
};

/**
 * A custom hook to handle the creation of users with API interaction.
 *
 * @returns {Object} An object containing the error state, loading state, and the createUser function.
 * @returns {string|null} return.userError - The error message if the user creation fails, or null if there is no error.
 * @returns {boolean} return.userLoading - The loading state indicating whether the user creation is in progress.
 * @returns {Function} return.createUser - The function to create a user.
 */
export function useFetchCreateUser() {
	const [userError, setUserError] = useState<string | null>(null);
	const [userLoading, setUserLoading] = useState<boolean>(false);

	/**
	 * Creates a user by making an API request.
	 *
	 * @param {Credentials} credentials - The credentials for creating the user.
	 * @param {Function} callback - The callback function to be called upon successful user creation.
	 * @returns {Promise<void>} A promise that resolves when the user creation process is complete.
	 */
	async function createUser(
		credentials: Credentials,
		callback: () => void
	): Promise<void> {
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
