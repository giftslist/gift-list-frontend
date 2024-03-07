interface PlusProps {
	fill: string;
}

export function Plus({ fill }: PlusProps) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_17_314)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M7.625 7.625V2.47916C7.625 1.38611 8.68829 0.5 10 0.5C11.3117 0.5 12.375 1.38611 12.375 2.47916V7.625H17.5209C18.6139 7.625 19.5 8.68829 19.5 10C19.5 11.3117 18.6139 12.375 17.5209 12.375H12.375V17.5209C12.375 18.6139 11.3117 19.5 10 19.5C8.68829 19.5 7.625 18.6139 7.625 17.5209V12.375H2.47916C1.38611 12.375 0.5 11.3117 0.5 10C0.5 8.68829 1.38611 7.625 2.47916 7.625H7.625Z"
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath id="clip0_17_314">
					<rect
						width="19"
						height="19"
						fill="white"
						transform="translate(0.5 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}
