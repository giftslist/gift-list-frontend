"use client";

import { Cake, Knife, Rings, Toy, Trash } from "@/assets/icons";
import { Template } from "@components";
import { useFetchCreateGifts, useFetchDeleteGift, useFetchEvent } from "@api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Gifts {
	gift: string;
}

export default function Page({ params }: { params: { event_id: string } }) {
	const { event, eventLoading, getEvent } = useFetchEvent();
	const { createGift, giftError, giftLoading } = useFetchCreateGifts();
	const { deleteGift, deleteGiftError, deleteGiftLoading } =
		useFetchDeleteGift();
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Gifts>({
		mode: "all",
	});

	const [formOpen, setFormOpen] = useState(false);

	useEffect(() => {
		getEvent(params.event_id);
	}, []);

	async function submitFormGifts({ gift }: Gifts) {
		await createGift({ event_id: params.event_id, names: [gift] }, async () => {
			getEvent(params.event_id);
			toast.success(`${gift} foi cadastrado com sucesso!`);
			setFormOpen(false);
			reset();
		});
	}

	async function removeGift(gift_id: string) {
		await deleteGift(gift_id, async () => {
			await getEvent(params.event_id);
		});
	}

	if (!event) return;

	function renderForm() {
		return (
			<form
				onSubmit={handleSubmit(submitFormGifts)}
				className="flex flex-col justify-center gap-y-4"
			>
				<label htmlFor="name" className="text-yellow-900 text-xs">
					Nome do presente
				</label>
				<input
					className={`p-2 text-sm rounded-lg placeholder:text-xs focus:outline-none focus:border-yellow-600 ${
						errors.gift ? "border-b-2 border-red-800" : ""
					}`}
					type="text"
					id="name"
					placeholder="Digite aqui..."
					{...register("gift", {
						required: "Nome do presente é obrigatório",
					})}
				/>
				{errors.gift && (
					<span className="text-xs text-red-950 mb-1">
						{errors.gift.message}
					</span>
				)}

				<button
					className={`bg-emerald-700 text-white font-bold text-base py-2 rounded-lg ${
						giftLoading ? "opacity-50 cursor-not-allowed" : ""
					}`}
					type="submit"
					disabled={giftLoading}
				>
					{eventLoading ? "Enviando..." : "Cadastrar presente"}
				</button>

				<pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
			</form>
		);
	}

	return (
		<Template loading={eventLoading}>
			<div className="w-[500px] flex flex-col gap-4">
				<div className="flex flex-row justify-between items-center gap-5">
					{!formOpen && (
						<>
							{event.type === "ANIVERSARIO" && <Cake size={150} />}
							{event.type === "CASAMENTO" && <Rings size={150} />}
							{event.type === "CHA_DE_BEBE" && <Toy size={150} />}
							{event.type === "CHA_DE_COZINHA" && <Knife size={150} />}
						</>
					)}

					<div>
						<h1 className="text-2xl text-sky-950 font-bold">{event.name}!</h1>
						<span className=" text-sky-950 text-sm">
							{formOpen
								? "Preencha os dados abaixo para cadastrar seu presente"
								: "Adicione ou remova presentes do seu evento"}
						</span>
					</div>
					{formOpen && (
						<button
							type="button"
							className="font-black text-red-900 text-3xl"
							onClick={() => {
								setFormOpen(false);
							}}
						>
							&#10005;
						</button>
					)}
				</div>

				{formOpen && renderForm()}

				{!formOpen && (
					<>
						<button
							className="w-full bg-emerald-700 text-white font-bold p-5 rounded-lg hover:bg-emerald-600"
							type="button"
							onClick={() => {
								setFormOpen(true);
							}}
						>
							Adicionar presente
						</button>

						<div className="flex flex-col gap-4 w-full">
							{event.gifts.length > 0 && (
								<span className="text-sky-950 font-bold">
									Lista de presentes:
								</span>
							)}
							<div className="flex flex-col gap-2">
								{event.gifts.map((gift) => (
									<div
										className={`flex flex-row justify-between items-center p-2 h-16 rounded-lg ${
											gift.gift_giver ? "bg-green-200" : "bg-orange-200"
										}`}
										key={gift.id}
									>
										<span className="text-sm text-sky-950">
											{gift.name} {gift.gift_giver && `- ${gift.gift_giver}`}
										</span>

										{!gift.gift_giver && (
											<button
												className="p-2 rounded-lg bg-red-950 hover:bg-red-800"
												onClick={() => {
													removeGift(gift.id);
												}}
											>
												<Trash />
											</button>
										)}
									</div>
								))}
							</div>
						</div>
					</>
				)}
			</div>
		</Template>
	);
}
