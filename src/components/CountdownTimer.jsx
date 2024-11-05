import { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(intervalId);
                setTimeLeft(null); // Expirou
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    if (!timeLeft) {
        return <div className="sticky top-0 w-full bg-red-700 text-white text-center p-2">Promoção Expirada!</div>;
    }

    return (
        <div className="sticky top-0 w-full bg-red-700 text-white text-center p-2 font-bold z-50">
            <span role="img" aria-label="fire">🔥</span> <span className="text-2xl font-extrabold">BLACK WEEK</span> <span role="img" aria-label="fire">🔥</span>
            <div>Essa é a melhor oferta já feita do CBP!</div>
        </div>
        //     <div className="sticky top-0 w-full bg-red-700 text-white text-center p-2 font-bold z-50">
        //     <span role="img" aria-label="fire">🔥</span> <span className="text-2xl font-extrabold">BLACK WEEK</span> <span role="img" aria-label="fire">🔥</span>
        //     <div>Corra! Restam apenas <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>!</div>
        // </div>
    );
};

export default CountdownTimer;
