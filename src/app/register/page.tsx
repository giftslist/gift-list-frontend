"use client";
import { Template } from "@components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useFetchCreateUser } from "@/api";
import { toast } from "sonner";

interface Credentials {
	name: string;
	email: string;
	password: string;
	passwordCheck: string;
}

export default function Page() {
	const router = useRouter();
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<Credentials>({
		mode: "all",
	});

	const { createUser, userLoading } = useFetchCreateUser();

	async function submitForm(credentials: Credentials) {
		await createUser(credentials, () => {
			toast.success("Cadastrado com sucesso!");
			setTimeout(() => {
				router.push("/");
			}, 1000);
		});
	}

	return (
		<Template>
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
					className="flex flex-col justify-start bg-orange-200 p-5 rounded-lg w-[600px]"
				>
					<label htmlFor="name" className="text-yellow-900 text-xs">
						Nome:
					</label>
					<input
						className={`p-2 text-sm rounded-lg placeholder:text-xs ${
							errors.name ? "mb-0 border-b-2 border-red-800" : "mb-5"
						}`}
						placeholder="Digite aqui..."
						id="name"
						type="text"
						{...register("name", {
							required: "Nome é obrigatório",
						})}
					/>
					{errors.name && (
						<span className="text-xs text-red-950 mb-4">
							{errors.name.message}
						</span>
					)}

					<label htmlFor="email" className="text-yellow-900 text-xs">
						E-mail:
					</label>
					<input
						className={`p-2 text-sm rounded-lg placeholder:text-xs ${
							errors.email ? "mb-0 border-b-2 border-red-800" : "mb-5"
						}`}
						placeholder="Digite aqui..."
						id="email"
						type="email"
						{...register("email", {
							required: "E-mail é obrigatório",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "E-mail inválido",
							},
						})}
					/>
					{errors.email && (
						<span className="text-xs text-red-950 mb-4">
							{errors.email.message}
						</span>
					)}

					<label htmlFor="password" className="text-yellow-900 text-xs">
						Senha:
					</label>
					<input
						className={`p-2 text-sm rounded-lg placeholder:text-xs ${
							errors.password ? "mb-0 border-b-2 border-red-800" : "mb-5"
						}`}
						placeholder="Digite aqui..."
						id="password"
						type="password"
						{...register("password", {
							required: "Senha é obrigatória",
							minLength: {
								value: 8,
								message: "Senha deve ter pelo menos 8 caracteres",
							},
						})}
					/>
					{errors.password && (
						<span className="text-xs text-red-950 mb-4">
							{errors.password.message}
						</span>
					)}

					<label htmlFor="passwordCheck" className="text-yellow-900 text-xs">
						Confirme a senha:
					</label>
					<input
						className={`p-2 text-sm rounded-lg placeholder:text-xs ${
							errors.passwordCheck ? "mb-0 border-b-2 border-red-800" : "mb-5"
						}`}
						placeholder="Digite aqui..."
						id="passwordCheck"
						type="password"
						{...register("passwordCheck", {
							required: "Por favor, confirme sua senha",
							validate: (value) =>
								value === "" ||
								value === getValues("password") ||
								"As senhas não coincidem",
						})}
					/>
					{errors.passwordCheck && (
						<span className="text-xs text-red-950 mb-4">
							{errors.passwordCheck.message}
						</span>
					)}

					<button
						type="submit"
						className={`bg-emerald-700 text-white font-bold text-base py-1 rounded-lg ${
							userLoading ? "text-emerald-950" : ""
						}`}
					>
						{userLoading ? "Cadastrando..." : "Cadastrar"}
					</button>
				</form>
			</div>
		</Template>
	);
}
