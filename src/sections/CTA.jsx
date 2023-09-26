import { aulas, avaliacoes, bonus, especificos, globais, outros, plano, professores, suporte } from "../assets/icons";
import { navLinks } from "../constants";

const CTA = () => {
    return (
        <section className="bg-[#504359] shadow-2xl">
            <div className="flex flex-col xl:flex-row place-items-center p-10 mx-auto max-w-screen-xl">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <div className="mb-8 lg:mb-16">
                        <h2 className="text-3xl md:text-4xl tracking-tight font-extrabold text-white font-lato italic">Seja uma Bailarina Preparada por apenas:</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="text-white text-xl italic relative">
                            <span className="absolute -top-4 transform -translate-x-1/2" />
                            12x de&nbsp;
                        </span>
                        <span className="mb-2 text-5xl font-extrabold font-noto text-[#8AE5EF]">
                            R$ 99,50
                        </span>
                    </div>
                    <p className="text-gray-200 mb-6 text-xl text-center">ou R$ 997,00/ano</p>
                    <div className="flex justify-center items-center">
                        <a className="bg-gradient-to-r from-green-500 to-green-700 text-white text-2xl px-4 py-2 md:py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity mt-6 font-noto" href={navLinks[2].href}>
                            COMECE AGORA
                        </a>
                    </div>
                </div>
                <div className="lg:ml-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={globais} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">TREINOS GLOBAIS</h3>
                        <p className="text-white-400">Treinos de Força, Flexibilidade e Cardio atualizados todos os meses.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={especificos} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">TREINOS ESPECÍFICOS</h3>
                        <p className="text-white-400">Novos treinos adicionados a plataforma mensalmente.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={aulas} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">AULAS AO VIVO</h3>
                        <p className="text-white-400">Aulas semanais em grupo de PBT e SOLO.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                            <img src={suporte} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">SUPORTE EXCLUSIVO</h3>
                        <p className="text-white-400">Acesso ao grupo de alunas para tirar dúvidas.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={plano} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">PLANO DE ROTINA</h3>
                        <p className="text-white-400">Um planejamento personalizado para as suas necessidades.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900">
                            <img src={avaliacoes} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">AVALIAÇÕES FÍSICAS</h3>
                        <p className="text-white-400">2 avaliações físicas individuais por ano para monitorar seu progresso.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={professores} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">PROFESSORES CONVIDADOS</h3>
                        <p className="text-white-400">Aulas de Pilates, Yoga, Bioginástica, Flow e outras modalidades.</p>
                    </div>

                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={bonus} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">BÔNUS</h3>
                        <p className="text-white-400">- Mini-curso de técnica com Fernanda Ruschel</p>
                        <p className="text-white-400">- Curso Definitivamente Flexível na íntegra.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12">
                            <img src={outros} />
                        </div>
                        <h3 className="mb-2 font-bold text-white">E MUITO MAIS...</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA;
