import { useState } from "react";
import { headerLogo } from "../assets/images";
import { close, menu } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {

    const [toggle, setToggle] = useState(false);
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
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    <li>
                        <a href={memberAreaLink}
                            className="font-montserrat leading-normal text-lg text-[#aaa7cc]">{navLinks[0].label}</a>
                    </li>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div className="relative">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain z-50"
                            onClick={() => setToggle((prev) => !prev)}
                        />
                        <div
                            className={`${toggle ? "flex" : "hidden"
                                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
                        >
                            <ul className="list-none flex flex-col justify-end items-center flex-1">
                                <li>
                                    <a href={memberAreaLink}
                                        className="font-montserrat leading-normal text-lg text-[#aaa7cc]">{navLinks[0].label}</a>
                                </li>
                            </ul>
                        </div>
                        {toggle && (
                            <div
                                className="fixed inset-0 bg-black opacity-25 z-40"
                                onClick={() => setToggle(false)}
                            />
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav