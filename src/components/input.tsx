import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export function Input({ label, ...rest }: InputProps) {
	return (
		<>
			<label htmlFor="email" className="text-yellow-900 text-xs">
				{label}
			</label>
			<input
				{...rest}
				className="min-w-80 p-2 rounded-lg mb-4 placeholder:text-xs"
			/>
		</>
	);
}
