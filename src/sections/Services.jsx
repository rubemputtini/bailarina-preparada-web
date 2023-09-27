import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {

    const allServices = services.slice(0, 6);

    return (
        <section className="max-container flex justify-center flex-wrap gap-12">
            {allServices.map((service) => (
                <div key={service.label} className="w-full flex justify-between md:w-1/3 lg:w-1/4">
                    <ServiceCard {...service} >
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
                            {service.label}</div>
                    </ServiceCard>

                </div>
            ))}
        </section>
    );
}

export default Services;
