import { useState } from "react";

import { Pencil, Trash2 } from "lucide-react";

interface PropriedadeCartao {

    id: number;
    texto: string;
    concluida: boolean;

    aoAlternarConclusao: (id: number) => void;
    aoExcluir: (id: number) => void;
    aoEditar: (id: number, novoTexto: string) => void;
}

const Cartao = ({
    id,
    texto,
    concluida,
    aoAlternarConclusao,
    aoExcluir,
    aoEditar,
}: PropriedadeCartao) => {

    const [editando, setEditando] = useState(false);

    const [textoEditado, setTextoEditado] = useState(texto);

    const salvarEdicao = () => {

        const novoTexto = textoEditado.trim();

        if (novoTexto === "") {
            return;
        }

        aoEditar(id, novoTexto);

        setEditando(false);
    };

    const cancelarEdicao = () => {
        setTextoEditado(texto);
        setEditando(false);
    };

    return (
        <li className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4">
            <div className="flex min-w-0 items-center gap-3">
                <input
                    type="checkbox"
                    checked={concluida}
                    onChange={() => aoAlternarConclusao(id)}
                    className="h-4 w-4 cursor-pointer accent-blue-600"
                />
                {editando ? (
                    <input
                        type="text"
                        value={textoEditado}
                        onChange={(evento) => setTextoEditado(evento.target.value)}
                        className="w-full rounded-md border border-indigo-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                ) : (
                    <span
                        className={
                            `wrap-break-word text-sm ${concluida
                                ? "text-slate-400 line-through"
                                : "text-slate-700"
                            }`
                        }
                    >
                        {texto}
                    </span>
                )}
            </div>
            <div className="flex shrink-0 items-center gap-2">

                {editando ? (
                    <>
                        <button
                            type="button"
                            onClick={salvarEdicao}
                            title="Salvar edição"
                            className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-50"
                        >
                            Salvar
                        </button>

                        <button
                            type="button"
                            onClick={cancelarEdicao}
                            title="Cancelar edição"
                            className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100"
                        >
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            type="button"
                            onClick={() => setEditando(true)}
                            aria-label={`Editar tarefa: ${texto}`}
                            title="Editar tarefa"
                            className="cursor-pointer rounded-lg p-2 text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                        >
                            <Pencil size={18} />
                        </button>
                        <button

                            type="button"

                            onClick={() => {

                                const confirmar = window.confirm(
                                    `Tem certeza que deseja excluir a tarefa "${texto}"?`
                                );

                                if (confirmar) {
                                    aoExcluir(id);
                                }
                            }}

                            aria-label={`Excluir tarefa: ${texto}`}
                            title="Excluir tarefa"
                            className="cursor-pointer rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
                        >
                            <Trash2 size={18} />
                        </button>
                    </>
                )}
            </div>
        </li>
    );
};

export default Cartao;
