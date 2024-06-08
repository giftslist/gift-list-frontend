import { useState } from "react";
import { api } from ".";
import { toast } from "sonner";

type Info = {
	event_id: string;
	names: string[];
};

/**
 * A custom hook to handle the creation of multiple gifts with API interaction.
 *
 * @returns {Object} An object containing the error state, loading state, and the createGift function.
 * @returns {string|null} return.giftError - The error message if the gift creation fails, or null if there is no error.
 * @returns {boolean} return.giftLoading - The loading state indicating whether the gift creation is in progress.
 * @returns {Function} return.createGift - The function to create gifts.
 */
export function useFetchCreateGifts() {
	const [giftError, setGiftError] = useState<string | null>(null);
	const [giftLoading, setGiftLoading] = useState<boolean>(false);

	/**
	 * Creates multiple gifts by making an API request.
	 *
	 * @param {Info} info - The information for creating the gifts.
	 * @param {Function} callback - The callback function to be called upon successful gift creation.
	 * @returns {Promise<void>} A promise that resolves when the gift creation process is complete.
	 */
	async function createGift(info: Info, callback: () => void): Promise<void> {
		setGiftError(null);
		setGiftLoading(true);

		await api
			.post("/event-gift/many", info)
			.then(() => {
				callback();
			})
			.catch(({ message }) => {
				toast.error(message);
				setGiftError(message);
			})
			.finally(() => {
				setGiftLoading(false);
			});
	}

	return {
		giftError,
		giftLoading,
		createGift,
	};
}
