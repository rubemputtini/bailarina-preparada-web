import { useEffect, useState } from 'react';

const ExitPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleMouseLeave = (event) => {
        if (event.clientY <= 0) {
            setShowPopup(true);
        }
    };

    useEffect(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleClosePopup = () => setShowPopup(false);

    return showPopup ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md text-center w-11/12 max-w-md">
                <h2 className="text-2xl font-bold mb-4">Espera aí! 🛑</h2>
                <p>Essa é a única BLACK WEEK do Clube em 4 anos de existência!</p>
                <p>Aproveite antes que acabe!</p>
                <button onClick={handleClosePopup} className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded">
                    QUERO APROVEITAR AGORA!
                </button>
            </div>
        </div>
    ) : null;
};

export default ExitPopup;