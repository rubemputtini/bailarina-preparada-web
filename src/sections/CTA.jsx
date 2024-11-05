import { aulas, avaliacoes, bonus, especificos, globais, outros, plano, professores, suporte } from "../assets/icons";
import { navLinks } from "../constants";

const CTA = () => {
    return (
        <section className="shadow-2xl">
            <div className="flex flex-col xl:flex-row place-items-center p-6 md:p-10 mx-auto max-w-screen-xl">
                <div className="max-w-screen-md mb-8 lg:mb-16 xl:w-2/5">
                    <div className="mb-8 lg:mb-16 text-center xl:text-left">
                        <h2 className="text-3xl md:text-5xl tracking-tight font-extrabold text-white font-lato italic">
                            Aproveite a BLACK WEEK:
                        </h2>
                    </div>
                    <div className="w-full max-w-xs mx-auto flex flex-col items-center">
                        <div className="w-full border-4 border-orange-500 rounded-lg overflow-hidden shadow-lg">
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xl font-bold px-4 py-2 text-center">
                                R$ 300,00 OFF
                            </div>
                            <div className="flex flex-col items-center px-8 py-6">
                                <span className="text-white text-lg md:text-xl italic mb-1">Preço exclusivo:</span>
                                <span className="text-2xl md:text-3xl font-extrabold text-[#8AE5EF]">R$ 69,65/mês</span>
                                <p className="text-gray-200 mb-6 mt-2 text-center">ou R$ 697,90/ano</p>
                                <a href={navLinks[2].href} className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg md:text-2xl px-3 py-2 md:px-4 md:py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity text-center"
                                >
                                    COMECE AGORA
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:space-y-0 xl:w-3/5">
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={globais} alt="Ícone de Treinos Globais" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">TREINOS GLOBAIS</h3>
                        <p className="text-white-400">Treinos de Força, Flexibilidade e Cardio atualizados todos os meses.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={especificos} alt="Ícone de Treinos Específicos" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">TREINOS ESPECÍFICOS</h3>
                        <p className="text-white-400">Treinos para todos os movimentos do Ballet.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={aulas} alt="Ícone de Aulas Ao Vivo" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">AULAS AO VIVO</h3>
                        <p className="text-white-400">Aulas semanais em grupo de PBT e SOLO.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                            <img src={suporte} alt="Ícone de Suporte Exclusivo" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">SUPORTE EXCLUSIVO</h3>
                        <p className="text-white-400">Acesso ao grupo de alunas para tirar dúvidas.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={plano} alt="Ícone de Planos de Rotina" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">PLANO DE ROTINA</h3>
                        <p className="text-white-400">Um planejamento personalizado para as suas necessidades.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                            <img src={avaliacoes} alt="Ícone de Avaliações Físicas" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">AVALIAÇÃO FÍSICA</h3>
                        <p className="text-white-400">1 avaliação física individual por ano para monitorar seu progresso.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={professores} alt="Ícone de Professores Convidados" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">PROFESSORES CONVIDADOS</h3>
                        <p className="text-white-400">Aulas de Pilates, Yoga, Bioginástica, Flow e outras modalidades.</p>
                    </div>

                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={bonus} alt="Ícone de Bônus" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">BÔNUS</h3>
                        <p className="text-white-400">- Mini-curso de técnica com Fernanda Ruschel</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={outros} alt="Ícone de E Muito Mais" />
                        </div>
                        <h3 className="mb-2 font-bold text-white">E MUITO MAIS...</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA;
