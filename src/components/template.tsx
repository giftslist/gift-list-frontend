import React, { useEffect } from "react";
import { Footer, Header } from "../components";
import { Toaster } from "sonner";
import { useRouter } from "next/navigation";

interface TemplateProps {
	back?: boolean;
	children: React.ReactNode;
}

interface User {
	id: string;
}

export function Template({ back, children }: TemplateProps) {
	const router = useRouter();
	let storagedUser: string | null = null;
	let user: User = { id: "" };

	// Verifica se o código está sendo executado no navegador antes de acessar o localStorage
	if (typeof window !== "undefined") {
		storagedUser = localStorage.getItem("user");
		if (storagedUser) {
			user = JSON.parse(storagedUser);
		}
	}

	useEffect(() => {
		const pathname = window.location.pathname;

		if (!user.id && pathname === "/dashboard") {
			router.push("/");
		}
	}, [user.id]);

	return (
		<div className="bg-orange-100 h-screen flex flex-col justify-between items-center">
			<Header back={back} />
			<Toaster richColors />
			{children}
			<Footer />
		</div>
	);
}
