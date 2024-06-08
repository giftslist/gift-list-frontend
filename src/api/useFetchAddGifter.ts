import { useState } from "react";
import { api } from ".";
import { toast } from "sonner";

type Gifter = {
	gift_id: string;
	gift_giver_id: string;
};

/**
 * A custom hook to handle the addition of gifters with API interaction.
 *
 * @returns {Object} An object containing the error state, loading state, and the addGifter function.
 * @returns {string|null} return.gifterError - The error message if the addition of the gifter fails, or null if there is no error.
 * @returns {boolean} return.gifterLoading - The loading state indicating whether the addition of the gifter is in progress.
 * @returns {Function} return.addGifter - The function to add a gifter.
 */
export function useFetchAddGifter() {
	const [gifterError, setGifterError] = useState<string | null>(null);
	const [gifterLoading, setGifterLoading] = useState<boolean>(false);

	/**
	 * Adds a gifter by making an API request.
	 *
	 * @param {Gifter} credentials - The credentials for adding the gifter.
	 * @returns {Promise<void>} A promise that resolves when the gifter addition process is complete.
	 */
	async function addGifter(credentials: Gifter): Promise<void> {
		setGifterError(null);
		setGifterLoading(true);

		await api
			.put("/event-gift/select", credentials)
			.then(() => {
				toast.success("Presente reservado com sucesso!");
			})
			.catch(({ message }) => {
				toast.error(message);
				setGifterError(message);
			})
			.finally(() => {
				setGifterLoading(false);
			});
	}

	return {
		gifterError,
		gifterLoading,
		addGifter,
	};
}
