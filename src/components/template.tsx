import React, { useEffect, useState } from "react";
import { Footer, Header } from "../components";
import { Toaster } from "sonner";
import { useRouter } from "next/navigation";
import Spinner from "@/assets/images/spinner.gif";

interface TemplateProps {
	back?: boolean;
	children: React.ReactNode;
}

interface User {
	id: string;
}

export function Template({ back, children }: TemplateProps) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	let storagedUser: string | null = null;
	let user: User = { id: "" };

	if (typeof window !== "undefined") {
		storagedUser = localStorage.getItem("user");
		if (storagedUser) {
			user = JSON.parse(storagedUser);
		}
	}

	useEffect(() => {
		const validateUser = () => {
			const pathname = window.location.pathname;

			if (!user.id && pathname === "/dashboard") {
				router.push("/");
			} else if (user.id && (pathname === "/" || pathname === "/register")) {
				router.push("/dashboard");
			}

			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		};

		validateUser();
	}, []);

	return (
		<>
			<div className="bg-orange-100 h-screen flex flex-col justify-between items-center">
				<Header back={back} />
				{isLoading ? (
					<img src="/spinner.gif" className="w-10" alt="Loading spinner" />
				) : (
					children
				)}
				<Footer />
			</div>
			<Toaster richColors />
		</>
	);
}
