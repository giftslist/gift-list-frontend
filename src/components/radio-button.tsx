import React from "react";
import { twMerge } from "tailwind-merge";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	icon: React.ReactNode;
	kind: string;
}

const colors = [
	{ name: "red", value: "bg-red-200 text-red-900" },
	{ name: "emerald", value: "bg-emerald-200 text-emerald-900" },
	{ name: "sky", value: "bg-sky-200 text-sky-900" },
	{ name: "orange", value: "bg-orange-200 text-orange-900" },
];

export function RadioButton({
	value,
	checked,
	onChange,
	label,
	icon,
	kind,
	...rest
}: RadioButtonProps) {
	return (
		<label
			className={twMerge(
				"relative flex flex-row items-center gap-2 w-fit p-2 rounded-lg  font-bold text-xs",
				`${colors.find((colorX) => colorX.name === kind)?.value}`
			)}
		>
			{icon}
			<input
				type="radio"
				value={value}
				checked={checked}
				onChange={onChange}
				className="opacity-0 absolute top-0 left-0"
				{...rest}
			/>
			<span>{label}</span>
		</label>
	);
}
