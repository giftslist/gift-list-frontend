import React from "react";

interface RadioButtonProps {
	selectedOption: string;
	icon: React.ReactNode;
	onChange: () => void;
	label: string;
}

export function RadioButton({
	selectedOption,
	icon,
	onChange,
	label,
}: RadioButtonProps) {
	return (
		<label className="relative bg-orange-200 flex flex-row items-center gap-2 w-fit p-2 rounded-lg text-orange-900 font-bold text-xs">
			{icon}
			<input
				type="radio"
				value="cha_cozinha"
				checked={selectedOption === "cha_cozinha"}
				onChange={onChange}
				className="opacity-0 absolute top-0 left-0"
			/>
			<span>{label}</span>
		</label>
	);
}
