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
	const storagedUser: string = localStorage.getItem("user") || "";
	const user: User = JSON.parse(storagedUser);

	useEffect(() => {
		if (!user.id) {
			router.push("/");
		} else {
			router.push("/dashboard");
		}
	}, []);

	return (
		<div className="bg-orange-100 h-screen flex flex-col justify-between items-center">
			<Header back={back} />
			<Toaster richColors />
			{children}
			<Footer />
		</div>
	);
}
