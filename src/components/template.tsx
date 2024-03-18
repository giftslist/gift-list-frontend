import React from "react";
import { Footer, Header } from "../components";
import { Toaster } from "sonner";

interface TemplateProps {
	back?: boolean;
	children: React.ReactNode;
}

export function Template({ back, children }: TemplateProps) {
	return (
		<div className="bg-orange-100 h-screen flex flex-col justify-between items-center">
			<Header back={back} />
			<Toaster richColors />
			{children}
			<Footer />
		</div>
	);
}
