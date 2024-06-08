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
	type: "CHA_DE_BEBE" | "ANIVERSARIO" | "CHA_COZINHA" | "CASAMENTO";
	date: string;
	gifts: Gift[];
};

/**
 * A custom hook to fetch event details with API interaction.
 *
 * @returns {Object} An object containing the event data, error state, loading state, and the getEvent function.
 * @returns {Event|undefined} return.event - The event data fetched from the API.
 * @returns {string|null} return.eventError - The error message if fetching the event fails, or null if there is no error.
 * @returns {boolean} return.eventLoading - The loading state indicating whether the event fetching is in progress.
 * @returns {Function} return.getEvent - The function to fetch event details.
 */
export function useFetchEvent() {
	const [event, setEvent] = useState<Event | undefined>();
	const [eventError, setEventError] = useState<string | null>(null);
	const [eventLoading, setEventLoading] = useState<boolean>(false);

	/**
	 * Fetches event details by making an API request.
	 *
	 * @param {string} event_id - The ID of the event to be fetched.
	 * @returns {Promise<void>} A promise that resolves when the event fetching process is complete.
	 */
	async function getEvent(event_id: string): Promise<void> {
		setEventError(null);
		setEventLoading(true);

		await api
			.get(`/events/${event_id}`)
			.then((response) => {
				setEvent(response.data);
			})
			.catch(({ message }) => {
				toast.error(message);
				setEventError(message);
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
