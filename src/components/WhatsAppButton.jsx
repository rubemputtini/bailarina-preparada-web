import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const WhatsAppButton = () => {
    const whatsAppLink = navLinks[1];

    const [isAtFooter, setIsAtFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const footer = document.querySelector("footer");

            if (footer) {
                const footerTop = footer.getBoundingClientRect().top + window.scrollY;
                setIsAtFooter(scrollY + window.innerHeight >= footerTop);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed bottom-5 right-5 z-50 ${isAtFooter ? "small-button" : ""}`}>
            <a href={whatsAppLink.href} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center bg-green-500 rounded-full px-3 py-2 space-x-2">
                    <img src={whatsAppLink.imgURL} alt="WhatsApp" className="w-6 h-6" />
                    {!isAtFooter && (
                        <span className="text-white font-bold text-sm leading-none font-poppins">Quer ajuda?</span>
                    )}
                </button>
            </a>
        </div>
    );
}

export default WhatsAppButton;
