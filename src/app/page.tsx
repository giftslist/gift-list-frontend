"use client";

import { GiftHome } from "../assets/images/gift-home";
import { api } from "@api";
import { Template } from "@components";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface Login {
	email: string;
	password: string;
}

export default function Page() {
	const { watch, register, handleSubmit, formState } = useForm<Login>({
		mode: "all",
	});

	async function submitForm(credentials: Login) {
		console.log(credentials);

		await api
			.post("users/login", {
				...credentials,
			})
			.then((response) => response.data)
			.then((data) => {
				alert(`ID: ${data.id}\nNome: ${data.name}\nEmail: ${data.email}`);
			})
			.catch((error) => {
				alert(error?.response?.data?.message || "Erro ao logar");
			});
	}

	return (
		<Template>
			<main className="flex flex-row items-center justify-center">
				<GiftHome />

				<div className="flex flex-col items-start w-[580px]">
					<h2 className="text-sky-950 text-2xl font-bold mb-12">
						Transforme desejos em realidade: Cadastre seus presentes, escolha
						suas surpresas.
					</h2>

					<form
						onSubmit={handleSubmit(submitForm)}
						className="flex flex-col w-full"
					>
						<label htmlFor="email" className="text-yellow-900 text-xs">
							E-mail:
						</label>
						<input
							className="p-2 rounded-lg mb-4 placeholder:text-xs"
							placeholder="Digite aqui..."
							id="email"
							type="email"
							{...register("email")}
						/>

						<label htmlFor="password" className="text-yellow-900 text-xs">
							Senha:
						</label>
						<input
							className="p-2 rounded-lg mb-4 placeholder:text-xs"
							placeholder="Digite aqui..."
							id="password"
							type="password"
							{...register("password")}
						/>

						<div className="w-full flex flex-col justify-center gap-2">
							<button
								type="submit"
								className=" bg-emerald-700 text-white font-bold text-base py-1 rounded-lg"
							>
								Entre
							</button>

							<Link
								href="/register"
								className="bg-sky-800 text-center text-white font-bold text-base py-1 rounded-lg"
							>
								Cadastre-se
							</Link>
						</div>
					</form>
					<pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
				</div>
			</main>
		</Template>
	);
}
