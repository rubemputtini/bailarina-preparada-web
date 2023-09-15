import { garantia } from "../assets/images";

const Guarantee = () => {
    return (
        <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-[#A6BDCE] sm:text-4xl">
                        Nossa Garantia
                    </h2>
                    <p className="mt-4 info-text">
                        Satisfação Garantida ou Seu Dinheiro de Volta
                    </p>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-center">
                            <img
                                src={garantia}
                                alt="Garantia de Satisfação"
                                className="max-w-xs mx-auto"
                            />
                        </div>
                        <div className="md:ml-8 info-text">
                            <p className="text-lg">
                                No Clube da Bailarina Preparada, temos confiança na qualidade dos
                                nossos produtos/serviços. É por isso que oferecemos uma garantia
                                de satisfação de 14 dias.
                                Se por qualquer motivo você não estiver satisfeito com a sua
                                compra, entre em contato conosco dentro de 14 dias e teremos o
                                prazer de processar o reembolso total do valor investido.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee