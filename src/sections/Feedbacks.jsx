import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { feedbacks } from '../constants';

const Feedbacks = () => {
    return (
        <div className="slide-container">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#C5E1E9] font-lato italic">
                    O nosso objetivo é colecionar histórias como essas:
                </h2>
            </div>
            <Slide>
                {feedbacks.map((item, index) => (
                    <div key={index} className="flex justify-center items-center w-[600px] h-[400px] mx-auto">
                        <img
                            src={item.src}
                            alt={`Feedback ${index}`}
                            width={600}
                            height={400}
                            loading="lazy"
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Feedbacks;
