import type { Tarefa } from "../../types/Tarefa";

import Cartao from "../../components/Cartao/Cartao";

interface PropriedadeLista {

    tarefas: Tarefa[];

    aoAlternarConclusao: (id: number) => void;
    aoExcluir: (id: number) => void;
    aoEditar: (id: number, novoTexto: string) => void;
}

const Lista = ({
    tarefas,
    aoAlternarConclusao,
    aoExcluir,
    aoEditar,
}: PropriedadeLista) => {

    return (
        <section>
            <h2 className="mb-4 text-center text-lg font-semibold text-slate-800">
                Minhas Tarefas
            </h2>
            {
            
                tarefas.length === 0 ? (

                    <div className="rounded-lg bg-slate-50 p-6 text-center">
                        <p className="text-sm text-slate-500">
                            Nenhuma tarefa encontrada.
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                            Que tal adicionar uma nova tarefa?
                        </p>
                    </div>

                ) : (

                    <ul className="flex flex-col gap-3">
                        {
                            tarefas.map((tarefa) => (
                                <Cartao
                                    key={tarefa.id}
                                    id={tarefa.id}
                                    texto={tarefa.texto}
                                    concluida={tarefa.concluida}
                                    aoAlternarConclusao={aoAlternarConclusao}
                                    aoExcluir={aoExcluir}
                                    aoEditar={aoEditar}
                                />
                            ))
                        }
                    </ul>
                )
            }
        </section>
    );
};

export default Lista;
