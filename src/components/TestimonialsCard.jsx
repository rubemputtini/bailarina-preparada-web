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
                                width="560"
                                height="315"
                                src={testimonial.youtubeVideo}
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="md:w-1/2">
                            <svg className="w-10 h-10 mx-auto mb-3 text-[#a6bdce]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote className="md:ml-6 md:mt-0">
                                <p className="text-2xl italic font-medium text-gray-700">{testimonial.feedback}</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3 md:mt-0 pt-6">
                                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                <div className="flex items-center divide-x-2 divide-gray-500">
                                    <cite className="pr-3 font-medium text-[#8794b4]">{testimonial.customerName}</cite>
                                    <cite className="pl-3 text-sm text-gray-500">CEO at Google</cite>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default TestimonialsCard;
