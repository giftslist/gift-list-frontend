"use client";

import { Cake, Trash } from "@/assets/icons";
import { Template } from "@components";

export default function Page() {
	const storagedUser = localStorage.getItem("user") || "";
	const user = JSON.parse(storagedUser);

	const hours = new Date().getHours();
	const welcomeText =
		hours > 0 && hours < 12
			? "Bom dia"
			: hours > 12 && hours < 18
			? "Boa tarde"
			: "Boa noite";

	return (
		<Template>
			<div className="flex flex-col gap-5">
				<div>
					<h1 className="text-2xl text-sky-950 font-bold">
						{welcomeText}! {user.name}, como vai?
					</h1>
					<span className=" text-sky-950 text-sm">
						Bem-vindo(a) a sua dashboard!
					</span>
				</div>

				<div className="flex flex-row">
					<Cake size="150" />
					<div className="flex flex-col">
						<span className="text-sky-950 text-xl font-semibold">
							Aniversario do Enzo
						</span>
						<span className="text-orange-800 font-medium">22/04/2024</span>
						<button className="bg-emerald-700 p-2 rounded-lg text-white text-sm font-bold mt-3">
							Copie o link do evento
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<span className="text-sky-950 font-bold">Lista de presentes:</span>

					<div className="flex flex-col gap-2">
						<div className="flex flex-row justify-between items-center p-2 bg-orange-200 rounded-lg">
							<span className="text-sm text-sky-950">Presente ...</span>

							<button className="bg-red-950 p-2 rounded-lg">
								<Trash />
							</button>
						</div>
						<div className="flex flex-row justify-between items-center p-2 bg-orange-200 rounded-lg">
							<span className="text-sm text-sky-950">Presente ...</span>

							<button className="bg-red-950 p-2 rounded-lg">
								<Trash />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Template>
	);
}
