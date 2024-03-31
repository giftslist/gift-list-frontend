"use client";

import { api, useFetchCreateEvent } from "@api";
import { Cake, Knife, Rings, Toy, Trash } from "@/assets/icons";
import { RadioButton, Template } from "@components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Event {
	name: string;
	type: string;
	date: string;
}

interface User {
	id: string;
	name: string;
}

export default function Page() {
	const [formOpen, setFormOpen] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		getValues,
	} = useForm<Event>({
		mode: "all",
	});
	const { createEvent, eventError, eventLoading } = useFetchCreateEvent();

	useEffect(() => {
		// Verifica se o localStorage está disponível
		if (typeof window !== "undefined" && window.localStorage) {
			const storagedUser = localStorage.getItem("user");
			if (storagedUser) {
				setUser(JSON.parse(storagedUser));
			}
		}
	}, []);

	const hasEvent = false;

	const hours = new Date().getHours();

	const welcomeText =
		hours > 0 && hours < 12
			? "Bom dia"
			: hours > 12 && hours < 18
			? "Boa tarde"
			: "Boa noite";

	async function submitForm({ date, name, type }: Event) {
		if (!user) return;

		await createEvent({ date, name, type, host_id: user.id }, () => {
			toast.success(`O evento 👉${name}👈 foi cadastrado com sucesso!`);
			setFormOpen(false);
		});
	}

	const validateEventDate = (selectedDate: string) => {
		const currentDate = new Date();
		const selectedDateTime = new Date(selectedDate);

		return selectedDateTime >= currentDate; // Retorna true se a data selecionada for no futuro
	};

	const isFormValid = !Object.keys(errors).length;

	const renderFormNewEvent = () => {
		return (
			<form
				onSubmit={handleSubmit(submitForm)}
				className="flex flex-col justify-center gap-y-4"
			>
				<label htmlFor="name" className="text-yellow-900 text-xs">
					Nome do evento
				</label>
				<input
					className={`p-2 text-sm rounded-lg placeholder:text-xs focus:outline-none focus:border-yellow-600 ${
						errors.name ? "border-b-2 border-red-800" : ""
					}`}
					type="text"
					id="name"
					placeholder="Digite aqui..."
					{...register("name", {
						required: "Nome do evento é obrigatório",
					})}
				/>
				{errors.name && (
					<span className="text-xs text-red-950 mb-1">
						{errors.name.message}
					</span>
				)}
				<label htmlFor="type" className="text-yellow-900 text-xs">
					Tipo do evento
				</label>
				<div className="flex flex-row gap-2 flex-wrap" id="type">
					<RadioButton
						icon={<Toy />}
						label="Chá de Bebê"
						value="CHA_DE_BEBE"
						kind="red"
						checked={getValues("type") === "CHA_DE_BEBE"}
						register={register}
					/>

					<RadioButton
						icon={<Knife />}
						label="Chá de Cozinha"
						value="CHA_COZINHA"
						kind="orange"
						checked={getValues("type") === "CHA_COZINHA"}
						register={register}
					/>

					<RadioButton
						icon={<Cake />}
						label="Aniversário"
						value="ANIVERSARIO"
						kind="emerald"
						checked={getValues("type") === "ANIVERSARIO"}
						register={register}
					/>

					<RadioButton
						icon={<Rings />}
						label="Lista de Casamento"
						value="CASAMENTO"
						kind="sky"
						checked={getValues("type") === "CASAMENTO"}
						register={register}
					/>
				</div>
				{errors.type && (
					<span className="text-xs text-red-950 mb-1">
						{errors.type.message}
					</span>
				)}
				<label htmlFor="date" className="text-yellow-900 text-xs">
					Data do evento
				</label>
				<input
					className={`p-2 text-sm rounded-lg placeholder:text-xs focus:outline-none focus:border-yellow-600 ${
						errors.date ? "border-b-2 border-red-800" : ""
					}`}
					type="date"
					id="date"
					{...register("date", {
						required: "Data do evento é obrigatória",
						validate: (value) =>
							validateEventDate(value) ||
							"A data do evento deve ser a partir de hoje!!",
					})}
				/>
				{errors.date && (
					<span className="text-xs text-red-950 mb-1">
						{errors.date.message}
					</span>
				)}

				<button
					className={`bg-emerald-700 text-white font-bold text-base py-2 rounded-lg ${
						isSubmitting || !isFormValid ? "opacity-50 cursor-not-allowed" : ""
					}`}
					type="submit"
					disabled={isSubmitting || !isFormValid}
				>
					{isSubmitting ? "Enviando..." : "Cadastrar evento"}
				</button>

				<pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
			</form>
		);
	};

	return (
		<Template>
			<div className="flex flex-col gap-5">
				{formOpen ? (
					<div className="flex flex-row justify-between items-center">
						<div>
							<h1 className="text-2xl text-sky-950 font-bold">
								Bora criar seu evento, {user?.name}!
							</h1>
							<span className=" text-sky-950 text-sm">
								Preencha os campos abaixo
							</span>
						</div>
						<button
							type="button"
							className="font-black text-red-900 text-3xl"
							onClick={() => {
								setFormOpen(false);
							}}
						>
							&#10005;
						</button>
					</div>
				) : (
					<div>
						<h1 className="text-2xl text-sky-950 font-bold">
							{welcomeText}! {user?.name}, como vai?
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
									ANIVERSARIO do Enzo
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
							onClick={() => {
								setFormOpen(true);
							}}
						>
							Criar Evento
						</button>
					)}
				</div>

				{formOpen && renderFormNewEvent()}

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
			</div>
		</Template>
	);
}
