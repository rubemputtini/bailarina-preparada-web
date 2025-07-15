import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { reviews } from '../constants';

const TestimonialsCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {reviews.map((testimonial, index) => (
                <div key={index} className="p-4">
                    <div className="bg-white rounded-lg p-6 shadow-md flex flex-col md:flex-row md:items-center">
                        <div className="mb-4 md:w-1/2 md:mb-0 md:mr-6">
                            <iframe
                                title={`${testimonial.customerName}'s Testimonial`}
                                width="100%"
                                height="auto"
                                className="md:h-[360px]"
                                src={testimonial.youtubeVideo}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="md:w-1/2 mt-3 md:mt-0">
                            <svg className="w-10 h-10 mx-auto mb-3 text-[#a6bdce]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote className="ml-4">
                                <p className="text-base lg:text-2xl italic font-medium text-gray-700">{testimonial.feedback}</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center space-x-3 pt-5">
                                <cite className="font-medium text-[#8794b4]">{testimonial.customerName}</cite>
                            </figcaption>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default TestimonialsCard;
