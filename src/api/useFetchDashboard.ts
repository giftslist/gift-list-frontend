import { useState } from "react";
import { api } from ".";

export function useFetchDashboard() {
	const [dashboard, setDashboard] = useState({});
	const [dashboardError, setDashboardError] = useState(null);
	const [dashboardLoading, setDashboardLoading] = useState(false);

	async function getDashboard(user_id: string) {
		setDashboardError(null);
		setDashboardLoading(true);

		await api
			.get(`/dashboard/${user_id}`)
			.then((response) => {
				setDashboard(response.data);
			})
			.catch(({ message }) => {
				setDashboardError(message);
			})
			.finally(() => {
				setDashboardLoading(false);
			});
	}

	return {
		dashboard,
		dashboardError,
		dashboardLoading,
		getDashboard,
	};
}
