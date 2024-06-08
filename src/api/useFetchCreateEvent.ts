import { useState } from "react";
import { api } from ".";

type Credentials = {
	date: string;
	name: string;
	type: string;
	host_id: string;
};

/**
 * A custom hook to handle the creation of events with API interaction.
 *
 * @returns {Object} An object containing the error state, loading state, and the createEvent function.
 * @returns {string|null} return.eventError - The error message if the event creation fails, or null if there is no error.
 * @returns {boolean} return.eventLoading - The loading state indicating whether the event creation is in progress.
 * @returns {Function} return.createEvent - The function to create an event.
 */
export function useFetchCreateEvent() {
	const [eventError, setEventError] = useState<string | null>(null);
	const [eventLoading, setEventLoading] = useState<boolean>(false);

	/**
	 * Creates an event by making an API request.
	 *
	 * @param {Credentials} credentials - The credentials for creating the event.
	 * @param {Function} callback - The callback function to be called upon successful event creation.
	 * @returns {Promise<void>} A promise that resolves when the event creation process is complete.
	 */
	async function createEvent(
		credentials: Credentials,
		callback: () => void
	): Promise<void> {
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
