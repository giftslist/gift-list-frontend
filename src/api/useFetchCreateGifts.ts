import { useState } from "react";
import { api } from ".";
import { toast } from "sonner";

type Info = {
	event_id: string;
	names: string[];
};

export function useFetchCreateGifts() {
	const [giftError, setGiftError] = useState(null);
	const [giftLoading, setGiftLoading] = useState(false);

	async function createGift(info: Info, callback: () => void) {
		setGiftError(null);
		setGiftLoading(true);

		await api
			.post("/event-gift/many", info)
			.then(() => {
				callback();
			})
			.catch(({ message }) => {
				toast.error(message);
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
