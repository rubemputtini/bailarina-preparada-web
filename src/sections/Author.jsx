import { isabella } from "../assets/images";
import { statistics } from "../constants";

const Author = () => {

    const numOfMembers = statistics[0].value;

    return (
        <div className="">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white shadow-2xl rounded-lg p-8 flex flex-col md:flex-row items-center">
                    <img
                        src={isabella}
                        alt="Isabella Souza"
                        width={1080} height={1080}
                        className="w-full h-auto md:w-64 md:h-64 mx-auto md:mx-0 md:mr-8 rounded-full border-4 border-purple-500 mb-4 md:mb-0"
                        loading="lazy"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-noto font-bold text-[#8794b4] mb-2">Isabella Souza</h2>
                        <p className="font-palanquin text-gray-600 mb-4">
                            Idealizadora da Bailarina Preparada, Bella decidiu unir sua experiência como ex-atleta de Ginástica Rítmica e bailarina e todo o seu conhecimento como Profissional de Educação Física para ajudar bailarinas a desenvolverem a sua performance com saúde e segurança.
                        </p>
                        <p className="font-palanquin text-gray-600 mb-4">
                            Além de ter feito vários cursos na área das Ciências da Dança, ela é Especialista em Treinamento de Força pela Universidade de Brasília e Mestranda em Atividade Física e Saúde pela Universidade do Porto, em Portugal, com o foco de pesquisa na qualidade de vida de bailarinas de todos os níveis!
                        </p>
                        <p className="font-palanquin font-bold italic text-gray-600">
                            Já foram mais de {numOfMembers} bailarinas impactadas em todos os projetos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Author