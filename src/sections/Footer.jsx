import { footerLogo } from '../assets/images';
import { pages, socialMedia } from '../constants';

const Footer = () => {
    return (
        <footer className="w-full mx-auto">
            <div className="text-center mb-6 md:text-left md:flex md:items-center md:justify-between">
                <div className="block mb-2">
                    <img
                        src={footerLogo}
                        alt="Bailarina Preparada Logo"
                        width="111"
                        height="40"
                        className="h-10 mx-auto md:mx-0"
                        loading="lazy"
                    />
                </div>
                <ul className="flex justify-center md:justify-start space-x-4 md:ml-4 text-white">
                    <li>
                        <a href={pages[0].link} rel='noreferrer' target='_blank' key={pages[0].id} className="mr-4 hover:underline md:mr-6">Política de Privacidade</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-white sm:mx-auto lg:my-8" />
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <span className="block text-sm text-white text-center mb-8 mt-4 font-semibold font-noto">
                    Bailarina Preparada © 2023. Todos os direitos reservados.
                </span>
                <div className="flex flex-row">
                    {socialMedia.map((social) => (
                        <a href={social.link} rel='noreferrer' target="_blank" key={social.id}>
                            <img
                                src={social.icon}
                                alt={social.id}
                                width={21} height={21}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer ${social.id !== socialMedia[socialMedia.length - 1].id
                                    ? "mr-6"
                                    : "mr-0"
                                    }`}
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;