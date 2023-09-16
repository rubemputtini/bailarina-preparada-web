import FAQItem from "../components/FaqItem";
import { questionsFAQ } from "../constants";

const FAQ = () => {

    return (
        <section className="mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#A6BDCE]">DÚVIDAS FREQUENTES</h2>
            {questionsFAQ.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </section>
    );
};

export default FAQ;
