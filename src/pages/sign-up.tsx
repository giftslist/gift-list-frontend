import { Input, Template } from "../components";

export function SignUp() {
	return (
		<Template back={true}>
			<div className="w-[680px] h-[480px] bg-orange-50 rounded-lg flex flex-col items-center justify-around px-9">
				<h2 className="text-center text-yellow-900 text-2xl font-bold">
					Qual o seu nome?
				</h2>

				<Input
					label="Nome"
					placeholder="Digite aqui..."
					name="name"
					id="name"
					type="text"
				/>

				<button
					type="button"
					className="w-fit px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
				>
					Avancar
				</button>
			</div>
		</Template>
	);
}
