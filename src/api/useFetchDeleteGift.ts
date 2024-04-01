import { useState } from "react";
import { api } from ".";
import { toast } from "sonner";

export function useFetchDeleteGift() {
	const [deleteGiftError, setDeleteGiftError] = useState(null);
	const [deleteGiftLoading, setDeleteGiftLoading] = useState(false);

	async function deleteGift(gift_id: string, callback: () => {}) {
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
