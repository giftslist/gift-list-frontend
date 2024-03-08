import { useState } from "react";
import { Input, Template } from "../components";
import { Toy, Cake, Knife, Plus, Rings, Trash } from "../assets/icons";

export function SignUp() {
	const [step, setStep] = useState(1);
	const [selectedOption, setSelectedOption] = useState("option1");

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	function nextStep() {
		setStep((prevState) => prevState + 1);
	}

	function backStep() {
		setStep((prevState) => prevState - 1);
	}

	return (
		<Template back={true}>
			<div>
				<h2 className="text-2xl font-bold text-sky-950">
					Cadastro de Anfitrião
				</h2>
				<span className="text-base text-neutral-950 ">
					Siga as etapas para se cadastrar.
				</span>

				<div className="mt-4 w-[680px] h-[480px] bg-orange-50 rounded-lg flex justify-center">
					{step === 1 && (
						<div className="flex flex-col items-center justify-around px-9 h-full">
							<h2 className="text-center text-yellow-900 text-2xl font-bold">
								Qual o seu nome?
							</h2>

							<Input
								label="Nome"
								placeholder="Digite aqui..."
								name="name"
								id="name"
								type="text"
								required
								className="w-80"
							/>

							<button
								type="button"
								onClick={nextStep}
								className="w-fit px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
							>
								Avançar
							</button>
						</div>
					)}

					{step === 2 && (
						<div className="flex flex-col  justify-around w-[400px] h-full">
							<h2 className="text-center text-yellow-900 text-2xl font-bold ">
								Olá pessoa! Bem-vindo(a), insira seu e-mail e senha
							</h2>

							<div className="flex flex-col ">
								<Input
									name="email"
									id="email"
									placeholder="Digite aqui..."
									type="email"
									label="E-mail"
									required
								/>

								<Input
									name="password"
									id="password"
									placeholder="Digite aqui..."
									type="password"
									label="Senha"
									required
								/>

								<Input
									name="password-2"
									id="password-2"
									placeholder="Digite aqui..."
									type="password"
									label="Confirmar senha"
									required
								/>
							</div>

							<div className="flex flex-row justify-around items-center">
								<button
									type="button"
									onClick={backStep}
									className="w-fit px-4 bg-orange-500 text-white font-bold text-base py-1 rounded-lg"
								>
									Voltar
								</button>

								<button
									type="button"
									onClick={nextStep}
									className="w-fit px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
								>
									Avançar
								</button>
							</div>
						</div>
					)}

					{step === 3 && (
						<div className="flex flex-col  justify-around h-full">
							<h2 className="text-center text-yellow-900 text-2xl font-bold ">
								Estamos quase lá! <br />
								Precisamos de informações do seu evento
							</h2>

							<div className="flex flex-col ">
								<Input
									name="event_name"
									id="event_name"
									placeholder="Digite aqui..."
									type="text"
									label="Nome do evento"
									required
								/>

								<Input
									name="event_date"
									id="event_date"
									placeholder="Digite aqui..."
									type="date"
									label="Data do evento"
									required
								/>
							</div>

							<div className="flex flex-row justify-around items-center">
								<button
									type="button"
									onClick={backStep}
									className="w-fit px-4 bg-orange-500 text-white font-bold text-base py-1 rounded-lg"
								>
									Voltar
								</button>

								<button
									type="button"
									onClick={nextStep}
									className="w-fit px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
								>
									Avançar
								</button>
							</div>
						</div>
					)}

					{step === 4 && (
						<div className="flex flex-col  justify-around w-[500px] h-full">
							<h2 className="text-center text-yellow-900 text-2xl font-bold ">
								Aniversario Enzo, que nome legal! Mas qual seria o tipo dele?
							</h2>

							<div className="flex flex-row flex-wrap gap-2">
								<label className="relative bg-red-200 flex flex-row items-center gap-2 w-fit p-2 rounded-lg text-red-900 font-bold text-xs">
									<Toy />
									<input
										type="radio"
										value="cha_bebe"
										checked={selectedOption === "cha_bebe"}
										onChange={handleOptionChange}
										className="opacity-0 absolute top-0 left-0"
									/>
									<span>Chá de Bebê</span>
								</label>

								<label className="relative bg-orange-200 flex flex-row items-center gap-2 w-fit p-2 rounded-lg text-orange-900 font-bold text-xs">
									<Knife />
									<input
										type="radio"
										value="cha_cozinha"
										checked={selectedOption === "cha_cozinha"}
										onChange={handleOptionChange}
										className="opacity-0 absolute top-0 left-0"
									/>
									<span>Chá de Cozinha</span>
								</label>
								<label className="relative bg-emerald-200 flex flex-row items-center gap-2 w-fit p-2 rounded-lg text-emerald-900 font-bold text-xs">
									<Cake />
									<input
										type="radio"
										value="aniversario"
										checked={selectedOption === "aniversario"}
										onChange={handleOptionChange}
										className="opacity-0 absolute top-0 left-0"
									/>
									<span>Aniversário</span>
								</label>
								<label className="relative bg-sky-200 flex flex-row items-center gap-2 w-fit p-2 rounded-lg text-sky-900 font-bold text-xs">
									<Rings />
									<input
										type="radio"
										value="lista_de_casamento"
										checked={selectedOption === "lista_de_casamento"}
										onChange={handleOptionChange}
										className="opacity-0 absolute top-0 left-0"
									/>
									<span>Lista de Casamento</span>
								</label>
								<label className="relative bg-neutral-200 flex flex-row items-center gap-2 w-fit p-2 rounded-lg text-neutral-400 font-bold text-xs">
									<Plus fill="#758CA3" />
									<input
										type="radio"
										value="other"
										checked={selectedOption === "other"}
										onChange={handleOptionChange}
										className="opacity-0 absolute top-0 left-0"
									/>
									<span>Outro</span>
								</label>
								{/* <RadioButton icon={<Knife />} label="Aniversário" /> */}
							</div>
							<p>Selected option: {selectedOption}</p>

							<div className="flex flex-row justify-around items-center">
								<button
									type="button"
									onClick={backStep}
									className="w-fit px-4 bg-orange-500 text-white font-bold text-base py-1 rounded-lg"
								>
									Voltar
								</button>

								<button
									type="button"
									onClick={nextStep}
									className="w-fit px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
								>
									Avançar
								</button>
							</div>
						</div>
					)}

					{step === 5 && (
						<div className="flex flex-col  justify-around h-full">
							<h2 className="text-center text-yellow-900 text-2xl font-bold ">
								Agora nos diga a lista de presentes!
							</h2>

							<div className="flex flex-row items-center justify-between">
								<Input
									name="gift"
									id="gift"
									placeholder="Digite aqui..."
									type="text"
									label="Presente"
									className="w-[400px]"
									required
								/>

								<button
									type="button"
									className="w-fit p-2 bg-sky-800 text-white font-bold text-base  rounded-lg"
								>
									<Plus fill="#FED7AA" />
								</button>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div className="flex flex-row items-center justify-between w-full mb-4">
									<span className="text-yellow-900 font-bold">1.</span>
									<div className="w-full p-3 mx-2 rounded-lg text-sm text-neutral-500 bg-white">
										Presente 1
									</div>
									<button
										type="button"
										className="w-fit p-2 bg-red-950 text-white font-bold text-base  rounded-lg"
									>
										<Trash />
									</button>
								</div>

								<div className="flex flex-row items-center justify-between w-full mb-4">
									<span className="text-yellow-900 font-bold">2.</span>
									<div className="w-full p-3 mx-2 rounded-lg text-sm text-neutral-500 bg-white">
										Presente 2
									</div>
									<button
										type="button"
										className="w-fit p-2 bg-red-950 text-white font-bold text-base  rounded-lg"
									>
										<Trash />
									</button>
								</div>
							</div>

							<div className="flex flex-row justify-around items-center">
								<button
									type="button"
									onClick={backStep}
									className="w-fit px-4 bg-orange-500 text-white font-bold text-base py-1 rounded-lg"
								>
									Voltar
								</button>

								<button
									type="button"
									onClick={nextStep}
									className="w-fit px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
								>
									Avançar
								</button>
							</div>
						</div>
					)}

					{step === 6 && (
						<div className="flex flex-col  justify-around h-full">
							<h2 className="text-center text-yellow-900 text-2xl font-bold ">
								Aqui o link do seu evento!
								<br />
								Compartilhe com quem desejar
							</h2>

							<div className="flex flex-col justify-center items-center gap-2">
								<div className="p-2 bg-neutral-50 w-fit">
									<span className="text-sm text-neutral-500">
										{"https://giftlist.com/${id-evento-pessoa}"}
									</span>
								</div>
								<button
									type="button"
									className="w-fit px-4 bg-emerald-900 text-white font-bold text-base py-1 rounded-lg"
								>
									Copiar
								</button>
							</div>

							<div className="flex flex-row justify-around items-center">
								<button
									type="button"
									onClick={backStep}
									className="w-fit px-4 bg-orange-500 text-white font-bold text-base py-1 rounded-lg"
								>
									Voltar
								</button>

								<button
									type="button"
									className="w-fit px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
								>
									Ir para Dashboard
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</Template>
	);
}
