import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { feedbacks } from '../constants';

const Feedbacks = () => {
    return (
        <div className="slide-container">
            <h2 className="font-palanquin text-4xl lg:max-w-lg font-bold mb-4">
                O nosso objetivo e colecionar historias como essas:
            </h2>
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
