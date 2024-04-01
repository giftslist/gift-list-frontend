import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
	back?: boolean;
	logout?: boolean;
}

export function Header({ back, logout }: HeaderProps) {
	const router = useRouter();
	const pathname = window.location.pathname.split("/");
	console.log(pathname);

	return (
		<header className="w-full p-6 flex flex-row justify-between items-center">
			<h1 className="text-2xl text-sky-950 font-bold">Gift's List</h1>

			<div className="flex flex-row gap-10">
				{pathname.find((value) => value === "dashboard") && (
					<button
						onClick={() => {
							localStorage.clear();
							router.push("/");
						}}
					>
						<span className="font-bold text-base text-sky-950">Sair</span>
					</button>
				)}

				{pathname.find((value) => value === "register") && (
					<Link href="/">
						<span className="font-bold text-base text-sky-950">
							voltar para home &gt;
						</span>
					</Link>
				)}
			</div>
		</header>
	);
}
