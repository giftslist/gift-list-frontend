import React from "react";
import { twMerge } from "tailwind-merge";
import { UseFormRegister } from "react-hook-form";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	icon: React.ReactNode;
	kind: string;
	register: UseFormRegister<any>; // Adicione a prop register aqui
}

const colors = [
	{ name: "red", value: "bg-red-200 text-red-900" },
	{ name: "emerald", value: "bg-emerald-200 text-emerald-900" },
	{ name: "sky", value: "bg-sky-200 text-sky-900" },
	{ name: "orange", value: "bg-orange-200 text-orange-900" },
];

const darkColors = [
	{ name: "red", value: "bg-red-300 text-red-900" },
	{ name: "emerald", value: "bg-emerald-300 text-emerald-900" },
	{ name: "sky", value: "bg-sky-300 text-sky-900" },
	{ name: "orange", value: "bg-orange-300 text-orange-900" },
];

export function RadioButton({
	value,
	checked,
	label,
	icon,
	kind,
	register, // Receba a prop register aqui
	...rest
}: RadioButtonProps) {
	const colorIndex = colors.findIndex((color) => color.name === kind);
	const darkColor = colorIndex !== -1 ? darkColors[colorIndex].value : "";

	return (
		<label
			className={twMerge(
				"relative flex flex-row items-center gap-2 w-fit p-2 rounded-lg font-bold text-xs",
				colors.find((color) => color.name === kind)?.value,
				checked ? darkColor : ""
			)}
		>
			{icon}
			<input
				type="radio"
				value={value}
				checked={checked}
				className="opacity-0 absolute top-0 left-0"
				{...register("type_event", {
					required: "Tipo do evento é obrigatório",
				})}
				{...rest}
			/>
			<span>{label}</span>
		</label>
	);
}
