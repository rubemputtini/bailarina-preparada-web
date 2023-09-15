import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { feedbacks } from '../constants';

const Feedbacks = () => {
    return (
        <div className="slide-container">
            <div className="text-center">
                <h2 className="font-palanquin text-4xl font-bold mb-4 text-[#C5E1E9]">
                    O nosso objetivo é colecionar histórias como essas:
                </h2>
            </div>
            <Slide>
                {feedbacks.map((item, index) => (
                    <div key={index} className="flex justify-center items-center h-[400px]">
                        <img src={item.src} alt={`Feedback ${index}`} className="max-w-full max-h-full" />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Feedbacks;
