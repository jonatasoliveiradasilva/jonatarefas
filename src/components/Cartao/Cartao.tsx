import { Trash2 } from "lucide-react";

interface PropriedadeCartao {

    id: number;
    texto: string;
    concluida: boolean;

    aoAlternarConclusao: (id: number) => void;
    aoExcluir: (id: number) => void;
}

const Cartao = ({
    id,
    texto,
    concluida,
    aoAlternarConclusao,
    aoExcluir,
}: PropriedadeCartao) => {

    return (
        <li className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4">
            <div className="flex min-w-0 items-center gap-3">
                <input
                    type="checkbox"
                    checked={concluida}
                    onChange={() => aoAlternarConclusao(id)}
                    className="h-4 w-4 cursor-pointer accent-blue-600"
                />
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
            </div>
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
                className="cursor-pointer shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
            >
                <Trash2 size={18} />
            </button>
        </li>
    );
};

export default Cartao;
