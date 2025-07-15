import { garantia } from "../assets/images";

const Guarantee = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center">
                    <img
                        src={garantia}
                        alt="Garantia de Satisfação"
                        className="max-w-xs mx-auto mb-10 md:mb-0"
                        loading="lazy"
                    />
                </div>
                <div className="flex items-center">
                    <p className="info-text">
                        Confiamos na qualidade do nosso serviço. É por isso que oferecemos uma garantia de satisfação de 7 dias. Se, por qualquer que seja o motivo, você não estiver satisfeita com o Clube, pode solicitar o cancelamento da sua assinatura e <b> receberá 100% do valor de volta.</b>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Guarantee