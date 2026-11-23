import type { Tarefa } from "../../types/Tarefa";

interface PropriedadeResumo {
    tarefas: Tarefa[];
}

const Resumo = ({ tarefas }: PropriedadeResumo) => {

    const totalTarefas = tarefas.length;

    const tarefasConcluidas = tarefas.filter(
        (tarefa) => tarefa.concluida
    ).length;

    const tarefasPendentes = tarefas.filter(
        (tarefa) => !tarefa.concluida
    ).length;

    return (
        <section className="mb-6 grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-slate-50 p-4 text-center">
                <strong className="block text-2xl font-bold text-slate-800">{totalTarefas}</strong>
                <span className="text-xs text-slate-500">Total</span>
            </div>
            <div className="rounded-lg bg-slate-50 p-4 text-center">
                <strong className="block text-2xl font-bold text-slate-800">{tarefasPendentes}</strong>
                <span className="text-xs text-slate-500">Pendentes</span>
            </div>
            <div className="rounded-lg bg-slate-50 p-4 text-center">
                <strong className="block text-2xl font-bold text-slate-800">{tarefasConcluidas}</strong>
                <span className="text-xs text-slate-500">Concluídas</span>
            </div>
        </section>
    );
}

export default Resumo;
