import { navLinks } from "../constants";

const CTA = () => {
    return (
        <section className="bg-gray-100 h-screen flex justify-center items-center font-montserrat">
            <div className="max-w-md mx-auto text-center">
                <div className="bg-gradient-to-b from-green-50 to-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Tudo isso por:</h2>
                    <div className="flex justify-center items-center mt-2">
                        <span className="text-gray-400 text-xl italic relative">
                            <span className="absolute -top-4 left-0 transform -translate-x-1/2" />
                            12x de&nbsp;
                        </span>
                        <span className="mb-2 text-4xl font-extrabold text-red-600 mr-2">
                            R$ 95,90
                        </span>
                    </div>

                    <p className="text-gray-400 mb-8 text-xl">ou R$ 997,00/ano</p>
                    <hr className="border-purple h-8 w-50" />
                    <ul className="text-gray-700 text-center space-y-4 mb-6">
                        <li className="flex items-center">
                            <svg
                                className="w-8 h-8 mr-3 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            ACESSO ILIMITADO por 12 meses
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-8 h-8 mr-3 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            TREINOS NOVOS todos os meses
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-8 h-8 mr-3 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            AULAS EM GRUPO todas as semanas
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-8 h-8 mr-3 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            SUPORTE EXCLUSIVO para dúvidas
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-8 h-8 mr-3 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            PLANEJAMENTO PERSONALIZADO
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-8 h-8 mr-3 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            AULA BÔNUS com convidados
                        </li>
                    </ul>
                    <a className="bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-8 rounded-full font-bold hover:opacity-90 transition-opacity mt-6" href={navLinks[2].href}>
                        COMECE AGORA
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
