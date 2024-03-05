import { GiftHome } from "../assets/images/gift-home";
import { Input, Template } from "../components";

export function Home() {
	return (
		<Template>
			<main className="flex flex-row items-center justify-center">
				<GiftHome />

				<div className="flex flex-col items-start w-[580px]">
					<h2 className="text-sky-950 text-2xl font-bold mb-12">
						Transforme desejos em realidade: Cadastre seus presentes, escolha
						suas surpresas.
					</h2>

					<form action="" className="flex flex-col">
						<Input
							label="E-mail"
							placeholder="Digite aqui..."
							name="email"
							id="email"
						/>

						<Input
							label="Senha"
							placeholder="Digite aqui..."
							name="password"
							id="password"
						/>
						<button
							type="button"
							className=" bg-emerald-700 text-white font-bold text-base py-1 rounded-lg"
						>
							Entre
						</button>
						<div className="flex flex-row justify-between w-full mt-2 gap-2">
							<button
								type="button"
								className="px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
							>
								Cadastre-se Anfitriao
							</button>
							<button
								type="button"
								className="px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
							>
								Cadastre-se Convidado
							</button>
						</div>
					</form>
				</div>
			</main>
		</Template>
	);
}
