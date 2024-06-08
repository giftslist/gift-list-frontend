"use client";

import { Cake, Knife, Plus, Rings, Toy } from "@/assets/icons";
import { useFetchAddGifter, useFetchEvent } from "@api";
import { Template } from "@components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { event_id: string } }) {
	const { event, eventLoading, getEvent } = useFetchEvent();
	const { addGifter, gifterLoading } = useFetchAddGifter();
	const [gifter, setGifter] = useState<string>("");

	const router = useRouter();

	useEffect(() => {
		getEvent(params.event_id);

		if (
			typeof window !== "undefined" &&
			window.localStorage &&
			typeof localStorage !== "undefined"
		) {
			localStorage.setItem("last_id_event", params.event_id);
			const storagedUser: string | null = localStorage.getItem("user");

			if (!storagedUser) router.push("/");

			if (storagedUser) {
				setGifter(JSON.parse(storagedUser)?.id);
			}
		}
	}, []);

	async function submitGifter(gift_id: string) {
		await addGifter({ gift_giver_id: gifter, gift_id });
		await getEvent(params.event_id);
	}

	if (!event) return;

	return (
		<Template loading={eventLoading || gifterLoading}>
			<div className="w-[500px] flex flex-col gap-4">
				<div>
					<Link
						onClick={() => {
							localStorage.removeItem("last_id_event");
						}}
						href="/dashboard"
						className="bg-sky-700 text-white font-bold p-2 rounded-lg hover:bg-sky-600"
					>
						Voltar para Dashboard
					</Link>
				</div>
				<div className="flex flex-row justify-between items-center gap-5">
					{event.type === "ANIVERSARIO" && <Cake size={150} />}
					{event.type === "CASAMENTO" && <Rings size={150} />}
					{event.type === "CHA_DE_BEBE" && <Toy size={150} />}
					{event.type === "CHA_COZINHA" && <Knife size={150} />}

					<div>
						<h1 className="text-2xl text-sky-950 font-bold">{event.name}!</h1>
						<span className=" text-sky-950 text-sm">
							Adicione ou remova presentes do seu evento
						</span>
					</div>
				</div>

				<div className="flex flex-col gap-4 w-full">
					{event.gifts.length > 0 && (
						<span className="text-sky-950 font-bold">Lista de presentes:</span>
					)}
					<div className="flex flex-col gap-2">
						{event.gifts.map((gift) => (
							<div
								className={`flex flex-row justify-between items-center p-2 h-16 rounded-lg ${
									gift.gift_giver ? "bg-green-200" : "bg-orange-200"
								}`}
								key={gift.id}
							>
								<span className="text-sm text-sky-950">{gift.name}</span>

								{!gift.gift_giver && (
									<button
										className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-600"
										onClick={() => {
											submitGifter(String(gift.id));
										}}
									>
										<Plus fill="#fff" />
									</button>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</Template>
	);
}
