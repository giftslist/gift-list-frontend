import { useState } from "react";
import { api } from ".";

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

type User = {
	id: string;
	name: string;
	email: string;
};

type Dashboard = {
	user: User;
	events: Event[];
};

export function useFetchDashboard() {
	const [dashboard, setDashboard] = useState<Dashboard>();
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
