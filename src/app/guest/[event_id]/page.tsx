"use client";

import { Cake, Knife, Plus, Rings, Toy } from "@/assets/icons";
import { useFetchAddGifter, useFetchEvent } from "@api";
import { Template } from "@components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Gifter {
  name: string;
}

export default function Page({ params }: { params: { event_id: string } }) {
  const { event, eventLoading, getEvent } = useFetchEvent();
  const { addGifter, gifterLoading } = useFetchAddGifter();
  const [gifterName, setGifterName] = useState<string>("");
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Gifter>({
    mode: "all",
  });
  const router = useRouter();

  useEffect(() => {
    getEvent(params.event_id);
  }, []);

  function submitFormGifts({ name }: Gifter) {
    setGifterName(name);
  }

  async function submitGifter(gift_id: string) {
    await addGifter({ gift_id, giver_name: gifterName });
    await getEvent(params.event_id);
  }

  function renderForm() {
    return (
      <form
        onSubmit={handleSubmit(submitFormGifts)}
        className="flex flex-col justify-center gap-y-4"
      >
        <label htmlFor="name" className="text-yellow-900 text-xs">
          Seu nome
        </label>
        <input
          className={`p-2 text-sm rounded-lg placeholder:text-xs focus:outline-none focus:border-yellow-600 ${
            errors.name ? "border-b-2 border-red-800" : ""
          }`}
          type="text"
          id="name"
          placeholder="Digite aqui..."
          {...register("name", {
            required: "Seu nome é obrigatório",
          })}
        />

        {errors.name && (
          <span className="text-xs text-red-950 mb-1">
            {errors.name.message}
          </span>
        )}

        <button
          className={`bg-emerald-700 text-white font-bold text-base py-2 rounded-lg`}
          type="submit"
        >
          Enviar seu nome
        </button>

        <pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    );
  }

  if (!event) return;

  return (
    <Template loading={eventLoading || gifterLoading}>
      <div className="w-[500px] flex flex-col gap-4">
        {!gifterName && (
          <>
            <div className="flex flex-row justify-around items-center gap-5">
              {event.type === "ANIVERSARIO" && <Cake size={150} />}
              {event.type === "CASAMENTO" && <Rings size={150} />}
              {event.type === "CHA_DE_BEBE" && <Toy size={150} />}
              {event.type === "CHA_COZINHA" && <Knife size={150} />}

              <div>
                <h1 className="text-2xl text-sky-950 font-bold">
                  {event.name}!
                </h1>
                <span className=" text-sky-950 text-sm">
                  Nos dia seu nome para prosseguir
                </span>
              </div>
            </div>
            {renderForm()}
          </>
        )}

        {gifterName && (
          <>
            <div className="flex flex-row justify-between items-center gap-5">
              {event.type === "ANIVERSARIO" && <Cake size={150} />}
              {event.type === "CASAMENTO" && <Rings size={150} />}
              {event.type === "CHA_DE_BEBE" && <Toy size={150} />}
              {event.type === "CHA_COZINHA" && <Knife size={150} />}

              <div>
                <h1 className="text-2xl text-sky-950 font-bold">
                  {event.name}!
                </h1>
                <span className=" text-sky-950 text-sm">
                  Adicione ou remova presentes do seu evento
                </span>
              </div>
            </div>

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
                    <span className="text-sm text-sky-950">{gift.name}</span>

                    {!gift.gift_giver && (
                      <button
                        className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-600"
                        onClick={() => {
                          submitGifter(gift.id);
                        }}
                      >
                        <Plus fill="#fff" />
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
