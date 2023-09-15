import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300 py-4 hover:bg-gray-100 mb-3">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswer}>
                <h3 className="text-lg font-medium">{question}</h3>
                <div className="transform transition-transform duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
            {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
        </div>
    );
};

export default FAQItem;
