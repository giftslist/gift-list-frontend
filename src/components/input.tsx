import { InputHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const input = tv({
	base: "p-2 rounded-lg mb-4 placeholder:text-xs",
	variants: {},
	defaultVariants: {},
});

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
	VariantProps<typeof input> & {
		label: string;
	};

export function Input({ label, className, ...props }: InputProps) {
	return (
		<div className="flex flex-col">
			<label htmlFor="email" className="text-yellow-900 text-xs">
				{label}
			</label>
			<input {...props} className={input({ className })} />
		</div>
	);
}
