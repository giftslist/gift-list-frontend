import { useState } from "react";
import { api } from ".";
import { toast } from "sonner";

type Gifter = {
	gift_id: string;
	giver_name: string;
};

export function useFetchAddGifter() {
	const [gifterError, setGifterError] = useState(null);
	const [gifterLoading, setGifterLoading] = useState(false);

	async function addGifter(credentials: Gifter) {
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
