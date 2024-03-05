import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export function Input({ label, ...rest }: InputProps) {
	return (
		<div className="flex flex-col">
			<label htmlFor="email" className="text-yellow-900 text-xs">
				{label}
			</label>
			<input {...rest} className="p-2 rounded-lg mb-4 placeholder:text-xs" />
		</div>
	);
}
