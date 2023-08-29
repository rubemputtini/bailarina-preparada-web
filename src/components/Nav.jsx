import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {

    const memberAreaLink = navLinks[0].href;

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
                    <li>
                        <a
                            href={memberAreaLink}
                            className="font-montserrat leading-normal text-lg text-[#aaa7cc]"
                        >
                            {navLinks[0].label}
                        </a>
                    </li>
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav