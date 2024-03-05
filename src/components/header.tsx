interface HeaderProps {
	back?: boolean;
}

export function Header({ back }: HeaderProps) {
	console.log(back);

	return (
		<header className="w-full p-6 flex flex-row justify-between items-center">
			<h1 className="text-2xl text-sky-950 font-bold">Gift's List</h1>
			{back && (
				<button type="button">
					<span className="font-bold text-base text-sky-950">
						voltar para home &gt;
					</span>
				</button>
			)}
		</header>
	);
}
