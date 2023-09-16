import TestimonialsCard from '../components/TestimonialsCard';

const Testimonials = () => {
    return (
        <div className="p-8">
            <div className="text-center">
                <h2 className="font-palanquin text-3xl md:text-4xl font-bold text-[#C5E1E9] mb-8">O que as nossas alunas dizem sobre o CBP:</h2>
            </div>
            <TestimonialsCard />
        </div>
    );
};

export default Testimonials;
