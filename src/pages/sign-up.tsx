import React, { useState } from "react";
import { Input, RadioButton, Template } from "../components";
import { Toy, Cake, Knife, Plus, Rings, Trash } from "../assets/icons";
import { useForm } from "react-hook-form";

type FormValues = {
	name: string;
};

export function SignUp() {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormValues>({ mode: "all" });
	const [step, setStep] = useState(1);
	const [selectedOption, setSelectedOption] = useState("option1");

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.currentTarget.value);
	};

	function nextStep() {
		setStep((prevState) => prevState + 1);
	}

	function backStep() {
		setStep((prevState) => prevState - 1);
	}

	function submitForm(values: any) {
		console.log(values);

		window.alert(JSON.stringify(values, null, 2));
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

				<form
					onSubmit={handleSubmit(submitForm)}
					className="mt-4 w-[680px] h-[480px] bg-orange-50 rounded-lg flex justify-center"
				>
					{step === 1 && (
						<div className="flex flex-col items-center justify-around px-9 h-full">
							<h2 className="text-center text-yellow-900 text-2xl font-bold">
								Qual o seu nome?
							</h2>

							<Input
								label="Nome"
								placeholder="Digite aqui..."
								id="name"
								type="text"
								{...register("name", {
									required: "Digite seu nome, por favor!",
								})}
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
									id="email"
									placeholder="Digite aqui..."
									type="email"
									label="E-mail"
									required
									{...register("email", {
										required: "Digite seu e-mail corretamente!",
									})}
								/>

								<Input
									id="password"
									placeholder="Digite aqui..."
									type="password"
									label="Senha"
									required
									{...register("password", {
										required: "A senha precisa ser mais forte!",
									})}
								/>

								<Input
									id="password-2"
									placeholder="Digite aqui..."
									type="password"
									label="Confirmar senha"
									required
									{...register("password-2", {
										required: "A senha precisa ser igual a anterior",
									})}
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
									{...register("event_name", {
										required: "Digite o nome do seu evento",
									})}
								/>

								<Input
									id="event_date"
									placeholder="Digite aqui..."
									type="date"
									label="Data do evento"
									required
									{...register("event_date", {
										required: "Escolha a data do seu evento",
									})}
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
								<RadioButton
									icon={<Toy />}
									label="Chá de Bebê"
									value="cha_bebe"
									kind="red"
									checked={selectedOption === "cha_bebe"}
									onChange={handleOptionChange}
								/>

								<RadioButton
									icon={<Knife />}
									label="Chá de Cozinha"
									value="cha_cozinha"
									kind="orange"
									checked={selectedOption === "cha_cozinha"}
									onChange={handleOptionChange}
								/>

								<RadioButton
									icon={<Cake />}
									label="Aniversário"
									value="aniversario"
									kind="emerald"
									checked={selectedOption === "aniversario"}
									onChange={handleOptionChange}
								/>

								<RadioButton
									icon={<Rings />}
									label="Lista de Casamento"
									value="lista_de_casamento"
									kind="sky"
									checked={selectedOption === "lista_de_casamento"}
									onChange={handleOptionChange}
								/>

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
				</form>
			</div>
			<pre>{JSON.stringify(watch(), null, 2)}</pre>
		</Template>
	);
}
