import { isabella } from "../assets/images";

const Author = () => {
    return (
        <div className="">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white shadow-2xl rounded-lg p-8 flex flex-col md:flex-row items-center">
                    <img
                        src={isabella}
                        alt="Isabella Souza"
                        className="w-64 h-64 mx-auto md:mx-0 md:mr-8 rounded-full border-4 border-purple-500 mb-4 md:mb-0"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-noto font-bold text-[#8794b4] mb-2">Isabella Souza</h2>
                        <p className="font-palanquin text-gray-600 mb-4">
                            Idealizadora da Bailarina Preparada, a Bella decidiu unir sua experiência como ex-atleta de Ginástica Rítmica e bailarina e todo o seu conhecimento como Profissional de Educação Física para ajudar bailarinas a desenvolverem a sua performance com saúde e segurança.
                        </p>
                        <p className="font-palanquin text-gray-600 mb-4">
                            Além de vários cursos na área das Ciências da Dança, a Bella é Especialista em Treinamento de Força pela Universidade de Brasília e está concluindo seu Mestrado em Atividade Física e Saúde na Universidade do Porto, em Portugal, com o foco de pesquisa na qualidade de vida de bailarinas de todos os níveis!
                        </p>
                        <p className="font-palanquin font-bold italic text-gray-600">
                            Já foram mais de 431 bailarinas impactadas em todos os projetos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Author