import { useState } from "react";

interface PropriedadeFormulario {
    aoAdicionar: (texto: string) => void;
}

const Formulario = ({ aoAdicionar }: PropriedadeFormulario) => {

    const [texto, setTexto] = useState("");

    const lidarComEnvio = (evento: React.FormEvent<HTMLFormElement>) => {
        
        evento.preventDefault();

        if (texto.trim() === "") {
            return;
        }

        aoAdicionar(texto);

        setTexto("");
    };

    return (
        <form
            onSubmit={lidarComEnvio}
            className="mb-6 flex flex-col gap-3 sm:flex-row"
        >
            <input
                type="text"
                value={texto}
                onChange={(evento) => setTexto(evento.target.value)}
                placeholder="Digite uma tarefa"
                className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            <button
                type="submit"
                className="cursor-pointer w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 sm:w-auto"
            >
                Adicionar Tarefa
            </button>
        </form>
    );
};

export default Formulario;
