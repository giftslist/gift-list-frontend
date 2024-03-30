"use client";

import { Cake, Knife, Rings, Toy, Trash } from "@/assets/icons";
import { RadioButton, Template } from "@components";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Event {
	name_event: string;
	type_event: string;
	date_event: string;
}

export default function Page() {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		getValues,
	} = useForm<Event>({
		mode: "all",
	});

	const storagedUser = localStorage.getItem("user") || "";
	const user = JSON.parse(storagedUser);

	const hours = new Date().getHours();
	const welcomeText =
		hours > 0 && hours < 12
			? "Bom dia"
			: hours > 12 && hours < 18
			? "Boa tarde"
			: "Boa noite";

	const hasEvent = false;
	const formOpen = true;

	const submitForm = (data: Event) => {
		console.log(data); // Aqui você pode fazer o que quiser com os dados do formulário
	};

	const validateEventDate = (selectedDate: string) => {
		const currentDate = new Date();
		const selectedDateTime = new Date(selectedDate);

		return selectedDateTime >= currentDate; // Retorna true se a data selecionada for no futuro
	};

	const isFormValid = !Object.keys(errors).length; // Verifica se não há erros nos campos do formulário

	return (
		<Template>
			<div className="flex flex-col gap-5">
				{formOpen ? (
					<div className="flex flex-row justify-between items-center">
						<div>
							<h1 className="text-2xl text-sky-950 font-bold">
								Bora criar seu evento, {user.name}!
							</h1>
							<span className=" text-sky-950 text-sm">
								Preencha os campos abaixo
							</span>
						</div>
						<button type="button" className="font-black text-red-900 text-3xl">
							&#10005;
						</button>
					</div>
				) : (
					<div>
						<h1 className="text-2xl text-sky-950 font-bold">
							{welcomeText}! {user.name}, como vai?
						</h1>
						<span className=" text-sky-950 text-sm">
							Bem-vindo(a) a sua dashboard!
						</span>
					</div>
				)}

				<div className="flex flex-row">
					{hasEvent && (
						<>
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
						</>
					)}

					{!hasEvent && !formOpen && (
						<button
							className="w-full bg-emerald-700 text-white font-bold p-5 rounded-lg hover:bg-emerald-600"
							type="button"
						>
							Criar Evento
						</button>
					)}
				</div>

				{formOpen && (
					<form
						onSubmit={handleSubmit(submitForm)}
						className="flex flex-col justify-center gap-y-4"
					>
						<label htmlFor="name_event" className="text-yellow-900 text-xs">
							Nome do evento
						</label>
						<input
							className={`p-2 text-sm rounded-lg placeholder:text-xs focus:outline-none focus:border-yellow-600 ${
								errors.name_event ? "border-b-2 border-red-800" : ""
							}`}
							type="text"
							id="name_event"
							placeholder="Digite aqui..."
							{...register("name_event", {
								required: "Nome do evento é obrigatório",
							})}
						/>
						{errors.name_event && (
							<span className="text-xs text-red-950 mb-1">
								{errors.name_event.message}
							</span>
						)}
						<label htmlFor="type_event" className="text-yellow-900 text-xs">
							Tipo do evento
						</label>
						<div className="flex flex-row gap-2 flex-wrap" id="type_event">
							<RadioButton
								icon={<Toy />}
								label="Chá de Bebê"
								value="cha_bebe"
								kind="red"
								checked={getValues("type_event") === "cha_bebe"}
								register={register}
							/>

							<RadioButton
								icon={<Knife />}
								label="Chá de Cozinha"
								value="cha_cozinha"
								kind="orange"
								checked={getValues("type_event") === "cha_cozinha"}
								register={register}
							/>

							<RadioButton
								icon={<Cake />}
								label="Aniversário"
								value="aniversario"
								kind="emerald"
								checked={getValues("type_event") === "aniversario"}
								register={register}
							/>

							<RadioButton
								icon={<Rings />}
								label="Lista de Casamento"
								value="lista_de_casamento"
								kind="sky"
								checked={getValues("type_event") === "lista_de_casamento"}
								register={register}
							/>
						</div>
						{errors.type_event && (
							<span className="text-xs text-red-950 mb-1">
								{errors.type_event.message}
							</span>
						)}
						<label htmlFor="date_event" className="text-yellow-900 text-xs">
							Data do evento
						</label>
						<input
							className={`p-2 text-sm rounded-lg placeholder:text-xs focus:outline-none focus:border-yellow-600 ${
								errors.date_event ? "border-b-2 border-red-800" : ""
							}`}
							type="date"
							id="date_event"
							{...register("date_event", {
								required: "Data do evento é obrigatória",
								validate: (value) =>
									validateEventDate(value) ||
									"A data do evento deve ser a partir de hoje!!",
							})}
						/>
						{errors.date_event && (
							<span className="text-xs text-red-950 mb-1">
								{errors.date_event.message}
							</span>
						)}

						<button
							className={`bg-emerald-700 text-white font-bold text-base py-2 rounded-lg ${
								isSubmitting || !isFormValid
									? "opacity-50 cursor-not-allowed"
									: ""
							}`}
							type="submit"
							disabled={isSubmitting || !isFormValid}
						>
							{isSubmitting ? "Enviando..." : "Cadastrar evento"}
						</button>
					</form>
				)}

				{hasEvent && (
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
				)}

				<pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
			</div>
		</Template>
	);
}
