import { useEffect, useState } from "react";

const formatCountdown = (deadline) => {
    const now = new Date();
    const end = new Date(deadline);
    const diff = end - now;

    if (diff <= 0) return "Expirado";

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (days > 0) return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
    return `${minutes}m ${seconds}s`;
};

const BonusTimer = () => {
    const [countdowns, setCountdowns] = useState({
        pirueta: "",
        mentoria: "",
        pontas: "",
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdowns({
                pirueta: formatCountdown("2025-03-31T09:00:00"),
                mentoria: formatCountdown("2025-03-31T23:59:00"),
                pontas: formatCountdown("2025-04-02T23:59:00"),
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-white border border-[#6B4C8A] px-5 py-6 text-[#2D213F] shadow-2xl w-full max-w-[440px] md:mx-0 my-10">
            <span className="absolute top-0 right-0 bg-[#b680ec] text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-md animate-pulse">
                Tempo Limitado
            </span>

            <div className="flex items-center gap-3 mb-6 mt-3 md:mt-0">
                <h3 className="text-lg md:text-xl font-extrabold text-[#6B4C8A] uppercase tracking-tight">
                    Bônus Exclusivo SBP
                </h3>
            </div>

            <ul className="space-y-5 text-sm md:text-base font-medium leading-snug">
                <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <div>
                        👕 <span className="font-semibold">Camiseta Bailarina Preparada</span>
                        <p className="text-xs text-gray-500 ml-5">Para as 5 primeiras inscritas</p>
                    </div>
                    <span className="text-lg text-gray-400 font-bold line-through mt-1 sm:mt-0 whitespace-nowrap">R$89</span>
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <div>
                        💃 <span className="font-semibold">Treinamento Pirueta Perfeita</span>
                        <p className="text-xs text-gray-500 ml-5">{countdowns.pirueta}</p>
                    </div>
                    <span className="text-lg text-gray-400 font-bold line-through mt-1 sm:mt-0 whitespace-nowrap">R$397</span>
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <div>
                        🧠 <span className="font-semibold">Mentoria coletiva</span>
                        <p className="text-xs text-gray-500 ml-5">{countdowns.mentoria}</p>
                    </div>
                    <span className="text-lg text-gray-400 font-bold line-through mt-1 sm:mt-0 whitespace-nowrap">R$250</span>
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <div>
                        🩰 <span className="font-semibold">Treinamento Preparada para as Pontas</span>
                        <p className="text-xs text-gray-500 ml-5">{countdowns.pontas}</p>
                    </div>
                    <span className="text-lg text-gray-400 font-bold line-through mt-1 sm:mt-0 whitespace-nowrap">R$397</span>
                </li>
            </ul>

            <div className="bg-[#F2ECFB] mt-8 p-4 rounded-xl text-center border border-[#C7A4E4]">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                    Valor total dos bônus
                </p>
                <p className="text-2xl md:text-3xl font-extrabold text-[#6B4C8A]">
                    <span className="line-through">R$1.133 </span>
                    <span className="text-sm font-semibold block mt-1">INCLUÍDOS GRATUITAMENTE</span>
                </p>
            </div>
        </div>
    );
};

export default BonusTimer;
