import { headerLogo } from '../assets/images';
import { socialMedia } from '../constants';

const Footer = () => {
    return (
        <footer className="bg-[#8794b4]">
            <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
                <div className="text-center mb-6 md:text-left md:flex md:items-center md:justify-between">
                    <div className="block mb-2">
                        <img src={headerLogo} className="h-10 mx-auto md:mx-0" alt="Bailarina Preparada Logo" />
                    </div>
                    <ul className="flex justify-center md:justify-start space-x-4 md:ml-4 text-white">
                        <li>
                            <a href="https://flowbite.com/about" className="mr-4 hover:underline md:mr-6">About</a>
                        </li>
                        <li>
                            <a href="https://flowbite.com/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://flowbite.com/licensing" className="mr-4 hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li>
                            <a href="https://flowbite.com/contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
                    <span className="block text-sm text-white md:text-center mb-4 md:mb- font-semibold font-mono">
                        Bailarina Preparada © 2023. Todos os direitos reservados.
                    </span>
                    <div className="flex flex-row md:mt-0">
                        {socialMedia.map((social) => (
                            <a href={social.link} rel='noreferrer' target="_blank" key={social.id}>
                                <img
                                    src={social.icon}
                                    alt={social.id}
                                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${social.id !== socialMedia[socialMedia.length - 1].id
                                        ? "mr-6"
                                        : "mr-0"
                                        }`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;