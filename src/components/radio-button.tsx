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
	{
		name: "red",
		value: "bg-red-200 text-red-900  border-2 border-solid border-red-200",
	},
	{
		name: "emerald",
		value:
			"bg-emerald-200 text-emerald-900  border-2 border-solid border-emerald-200",
	},
	{
		name: "sky",
		value: "bg-sky-200 text-sky-900  border-2 border-solid border-sky-200",
	},
	{
		name: "orange",
		value:
			"bg-orange-200 text-orange-900  border-2 border-solid border-orange-200",
	},
];

const darkColors = [
	{
		name: "red",
		value: "bg-red-400 text-red-100 border-2 border-solid border-red-900",
	},
	{
		name: "emerald",
		value:
			"bg-emerald-400 text-emerald-100 border-2 border-solid border-emerald-900",
	},
	{
		name: "sky",
		value: "bg-sky-400 text-sky-100 border-2 border-solid border-sky-900",
	},
	{
		name: "orange",
		value:
			"bg-orange-400 text-orange-100 border-2 border-solid border-orange-900",
	},
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
				checked && darkColor // Adiciona a classe darkColor apenas quando o radio button estiver marcado
			)}
		>
			{icon}
			<input
				type="radio"
				value={value}
				checked={checked}
				className="opacity-0 absolute top-0 left-0"
				{...register("type", {
					required: "Tipo do evento é obrigatório",
				})}
				{...rest}
			/>
			<span>{label}</span>
		</label>
	);
}
