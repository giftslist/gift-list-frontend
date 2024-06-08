import { useState } from "react";
import { api } from ".";
import { toast } from "sonner";

/**
 * A custom hook to handle the deletion of gifts with API interaction.
 *
 * @returns {Object} An object containing the error state, loading state, and the deleteGift function.
 * @returns {string|null} return.deleteGiftError - The error message if the gift deletion fails, or null if there is no error.
 * @returns {boolean} return.deleteGiftLoading - The loading state indicating whether the gift deletion is in progress.
 * @returns {Function} return.deleteGift - The function to delete a gift.
 */
export function useFetchDeleteGift() {
	const [deleteGiftError, setDeleteGiftError] = useState<string | null>(null);
	const [deleteGiftLoading, setDeleteGiftLoading] = useState<boolean>(false);

	/**
	 * Deletes a gift by making an API request.
	 *
	 * @param {string} gift_id - The ID of the gift to be deleted.
	 * @param {Function} callback - The callback function to be called upon successful gift deletion.
	 * @returns {Promise<void>} A promise that resolves when the gift deletion process is complete.
	 */
	async function deleteGift(
		gift_id: string,
		callback: () => void
	): Promise<void> {
		setDeleteGiftError(null);
		setDeleteGiftLoading(true);

		await api
			.delete(`/event-gift/${gift_id}`)
			.then(() => {
				callback();
				toast.success("Presente removido com sucesso!");
			})
			.catch(({ message }) => {
				toast.error(message);
				setDeleteGiftError(message);
			})
			.finally(() => {
				setDeleteGiftLoading(false);
			});
	}

	return {
		deleteGiftError,
		deleteGiftLoading,
		deleteGift,
	};
}
