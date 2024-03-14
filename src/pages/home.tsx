import { ChangeEvent, useState } from "react";
import { GiftHome } from "../assets/images/gift-home";
import client from "../client";
import { Input, Template } from "../components";

interface User {
  email: string;
  password: string;
}

export function Home() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: event?.target.value,
    }));
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      password: event?.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      const { data } = await client.post("users/login", {
        ...user,
      });

      alert(`ID: ${data.id}\nNome: ${data.name}\nEmail: ${data.email}`);
    } catch (err: any) {
      alert(err?.response?.data?.message || "Erro ao logar");
    }
  };

  return (
    <Template>
      <main className="flex flex-row items-center justify-center">
        <GiftHome />

        <div className="flex flex-col items-start w-[580px]">
          <h2 className="text-sky-950 text-2xl font-bold mb-12">
            Transforme desejos em realidade: Cadastre seus presentes, escolha
            suas surpresas.
          </h2>

          <form action="" className="flex flex-col">
            <Input
              label="E-mail"
              placeholder="Digite aqui..."
              name="email"
              id="email"
              onChange={handleEmail}
            />
            <Input
              label="Senha"
              placeholder="Digite aqui..."
              name="password"
              id="password"
              onChange={handlePassword}
            />
            <button
              type="button"
              className=" bg-emerald-700 text-white font-bold text-base py-1 rounded-lg"
              onClick={handleLogin}
            >
              Entre
            </button>
            <div className="flex flex-row justify-between w-full mt-2 gap-2">
              <button
                type="button"
                className="px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
              >
                Cadastre-se Anfitriao
              </button>
              <button
                type="button"
                className="px-4 bg-sky-800 text-white font-bold text-base py-1 rounded-lg"
              >
                Cadastre-se Convidado
              </button>
            </div>
          </form>
        </div>
      </main>
    </Template>
  );
}
