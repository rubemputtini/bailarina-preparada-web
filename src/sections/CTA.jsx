import { aulas, avaliacoes, bonus, especificos, globais, outros, plano, professores, suporte } from "../assets/icons";
import BonusTimer from "../components/BonusTimer";
import { navLinks } from "../constants";

const CTA = () => {
    return (
        <section className="bg-[#504359] shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between gap-10 p-10 mx-auto max-w-screen-xl">

                <div className="w-full lg:max-w-md flex flex-col justify-start">
                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-3xl md:text-4xl tracking-tight font-extrabold text-white font-lato italic">
                            Seja uma Bailarina Preparada por apenas:
                        </h2>
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="text-white text-xl italic relative">
                            <span className="absolute -top-4 transform -translate-x-1/2" />
                            12x de&nbsp;
                        </span>
                        <span className="mb-2 text-3xl sm:text-5xl font-extrabold font-noto text-[#8AE5EF]">
                            R$ 113,46
                        </span>
                    </div>

                    <p className="text-gray-200 mb-6 text-xl text-center">ou R$ 1.097,00/ano</p>

                    <div className="flex justify-center items-center">
                        <a
                            className="bg-gradient-to-r from-green-500 to-green-700 text-white text-2xl px-4 py-2 md:py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity mt-6 font-noto"
                            href={navLinks[2].href}
                        >
                            COMECE AGORA
                        </a>
                    </div>

                    <div className="mt-8">
                        <BonusTimer />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 self-start">
                    {[
                        { icon: globais, title: "TREINOS GLOBAIS", desc: "Treinos de Força, Flexibilidade e Cardio atualizados todos os meses." },
                        { icon: especificos, title: "TREINOS ESPECÍFICOS", desc: "Treinos para todos os movimentos do Ballet." },
                        { icon: aulas, title: "AULAS AO VIVO", desc: "Aulas semanais em grupo de PBT e SOLO." },
                        { icon: suporte, title: "SUPORTE EXCLUSIVO", desc: "Acesso ao grupo de alunas para tirar dúvidas." },
                        { icon: plano, title: "PLANO DE ROTINA", desc: "Um planejamento personalizado para as suas necessidades." },
                        { icon: avaliacoes, title: "AVALIAÇÃO FÍSICA", desc: "1 avaliação física individual por ano para monitorar seu progresso." },
                        { icon: professores, title: "PROFESSORES CONVIDADOS", desc: "Aulas de Pilates, Yoga, Bioginástica, Flow e outras modalidades." },
                        { icon: bonus, title: "BÔNUS", desc: "- Mini-curso de técnica com Fernanda Ruschel" },
                        { icon: outros, title: "E MUITO MAIS...", desc: "" },
                    ].map(({ icon, title, desc }, idx) => (
                        <div key={idx}>
                            <div className="flex justify-center items-center mb-2 w-10 h-10 lg:h-12 lg:w-12 rounded-full bg-primary-900">
                                <img src={icon} alt={`Ícone de ${title}`} />
                            </div>
                            <h3 className="mb-2 font-bold text-white">{title}</h3>
                            {desc && <p className="text-white-400">{desc}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTA;
