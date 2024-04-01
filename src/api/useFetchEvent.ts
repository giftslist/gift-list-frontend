import { useState } from "react";
import { api } from ".";
import { toast } from "sonner";

type Gift = {
	id: string;
	name: string;
	gift_giver: string;
};

type Event = {
	id: string;
	name: string;
	type: "CHA_DE_BEBE" | "ANIVERSARIO" | "CHA_DE_COZINHA" | "CASAMENTO";
	date: string;
	gifts: Gift[];
};

export function useFetchEvent() {
	const [event, setEvent] = useState<Event>();
	const [eventError, setEventError] = useState(null);
	const [eventLoading, setEventLoading] = useState(false);

	async function getEvent(event_id: string) {
		setEventError(null);
		setEventLoading(true);

		await api
			.get(`/events/${event_id}`)
			.then((response) => {
				setEvent(response.data);
			})
			.catch(({ message }) => {
				toast.error(message);
			})
			.finally(() => {
				setEventLoading(false);
			});
	}

	return {
		event,
		eventError,
		eventLoading,
		getEvent,
	};
}
