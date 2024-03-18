"use client";

import { Template } from "@components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { api } from "@/api";

interface Register {
	email: string;
	password: string;
	passwordCheck: string;
}

export default function Page() {
	const router = useRouter();
	const { watch, register, handleSubmit, formState } = useForm<Register>({
		mode: "all",
	});

	async function submitForm(credentials: Register) {
		api
			.post("", credentials)
			.catch((error) => error.message)
			.finally(() => {
				router.push("/");
			});
	}

	return (
		<Template back>
			<div className="flex flex-col gap-5">
				<div>
					<h2 className="text-xl text-sky-950 font-bold">
						Cadastro de usuario
					</h2>
					<span className="text-sky-950">
						Insira seus dados de acesso abaixo
					</span>
				</div>

				<form
					onSubmit={handleSubmit(submitForm)}
					className="flex flex-col justify-start bg-orange-200 p-5 rounded-lg"
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

					<label htmlFor="passwordCheck" className="text-yellow-900 text-xs">
						Confime a senha:
					</label>
					<input
						className="p-2 rounded-lg mb-4 placeholder:text-xs"
						placeholder="Digite aqui..."
						id="passwordCheck"
						type="password"
						{...register("passwordCheck")}
					/>

					<button
						type="submit"
						className=" bg-emerald-700 text-white font-bold text-base py-1 rounded-lg"
					>
						Cadastrar
					</button>
				</form>
				<pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
			</div>
		</Template>
	);
}
