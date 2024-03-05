import React from "react";
import { Footer, Header } from "../components";

interface TemplateProps {
	back?: boolean;
	children: React.ReactNode;
}

export function Template({ back, children }: TemplateProps) {
	return (
		<div className="bg-orange-100 h-screen flex flex-col justify-between items-center">
			<Header back={back} />
			{children}
			<Footer />
		</div>
	);
}
