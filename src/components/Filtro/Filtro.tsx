export type TipoFiltro = "todas" | "pendentes" | "concluidas";

interface PropriedadeFiltro {
    filtroAtual: TipoFiltro;
    aoAlterarFiltro: (filtro: TipoFiltro) => void;
}

const Filtro = ({
    filtroAtual,
    aoAlterarFiltro,
}: PropriedadeFiltro) => {

    const classeBotao = (filtro: TipoFiltro) => {
        return filtroAtual === filtro
            ? "cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
            : "cursor-pointer rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200";
    };

    return (
        <div className="mb-5 mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
                className={classeBotao("todas")}
                type="button"
                onClick={() => aoAlterarFiltro("todas")}
            >
                Todas as Tarefas
            </button>
            <button
                className={classeBotao("pendentes")}
                type="button"
                onClick={() => aoAlterarFiltro("pendentes")}
            >
                Tarefas Pendentes
            </button>
            <button
                className={classeBotao("concluidas")}
                type="button"
                onClick={() => aoAlterarFiltro("concluidas")}
            >
                Tarefas Concluídas
            </button>
        </div>
    );
};

export default Filtro;
