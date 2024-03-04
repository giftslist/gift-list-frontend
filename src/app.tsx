import { Footer, Header, Input } from "./components";
import { GiftHome } from "./assets/images/gift-home";

export function App() {
	return (
		<div className="bg-orange-100 h-screen flex flex-col justify-between items-center">
			<Header />

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

						<div className="flex flex-row justify-between w-full mt-2">
							<button
								type="button"
								className="min-w-36 bg-emerald-700 text-white font-bold text-base py-1 rounded-lg"
							>
								Entre
							</button>
							<button
								type="button"
								className="min-w-36 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
							>
								Cadastre-se
							</button>
						</div>
					</form>
				</div>
			</main>

			<Footer />
		</div>
	);
}
