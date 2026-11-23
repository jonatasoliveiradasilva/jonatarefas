import { useEffect, useState } from "react";

import type { Tarefa } from "./types/Tarefa";

import type { TipoFiltro } from "./components/Filtro/Filtro";

import Cabecalho from "./components/Cabecalho/Cabecalho";
import Formulario from "./components/Formulario/Formulario";
import Filtro from "./components/Filtro/Filtro";
import Resumo from "./components/Resumo/Resumo";
import Lista from "./components/Lista/Lista";

const App = () => {

  const [tarefas, setTarefas] = useState<Tarefa[]>(() => {

    const tarefasSalvas = localStorage.getItem("jonatarefas");

    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas) as Tarefa[];
    }

    return [];
  });

  const [filtroAtual, setFiltroAtual] = useState<TipoFiltro>("todas");

  const adicionarTarefa = (texto: string) => {

    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false,
      dataCriacao: new Date().toISOString(),
    };

    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa,
    ]);
  };

  const alternarConclusao = (id: number) => {

    setTarefas((tarefasAtuais) =>

      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const excluirTarefa = (id: number) => {

    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id)
    );
  };

  const tarefasFiltradas = tarefas.filter((tarefa) => {

    if (filtroAtual === "pendentes") {
      return !tarefa.concluida;
    }

    if (filtroAtual === "concluidas") {
      return tarefa.concluida;
    }

    return true;
  });

  useEffect(() => {
    localStorage.setItem("jonatarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-3 sm:p-5">
      <section className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-4 shadow-sm sm:p-6">
        <Cabecalho />
        <Formulario
          aoAdicionar={adicionarTarefa}
        />
        <Filtro
          filtroAtual={filtroAtual}
          aoAlterarFiltro={setFiltroAtual}
        />
        <Resumo
          tarefas={tarefas}
        />
        <Lista
          tarefas={tarefasFiltradas}
          aoAlternarConclusao={alternarConclusao}
          aoExcluir={excluirTarefa}
        />
      </section>
    </main>
  );
}

export default App;
