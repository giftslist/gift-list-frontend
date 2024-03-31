import { useState } from "react";
import { api } from ".";

type Credentials = {
	date: string;
	name: string;
	type: string;
	host_id: string;
};

export function useFetchCreateEvent() {
	const [eventError, setEventError] = useState(null);
	const [eventLoading, setEventLoading] = useState(false);

	async function createEvent(credentials: Credentials, callback: () => void) {
		setEventError(null);
		setEventLoading(true);

		await api
			.post("/events", credentials)
			.then(() => {
				callback();
			})
			.catch(({ message }) => {
				setEventError(message);
			})
			.finally(() => {
				setEventLoading(false);
			});
	}

	return {
		eventError,
		eventLoading,
		createEvent,
	};
}
