import React from "react";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	icon: React.ReactNode;
	color: string;
}

export function RadioButton({
	value,
	checked,
	onChange,
	label,
	icon,
	color,
	...rest
}: RadioButtonProps) {
	return (
		<label
			className={`relative bg-${color}-200 flex flex-row items-center gap-2 w-fit p-2 rounded-lg text-${color}-900 font-bold text-xs`}
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
