import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {

    const topServices = services.slice(0, 2);
    const midServices = services.slice(2, 4);
    const bottomServices = services.slice(4, 6);

    return (
        <section className="max-container flex justify-center flex-wrap gap-9">
            <div className="w-full flex justify-between">
                {topServices.map((service) => (
                    <ServiceCard key={service.label} {...service} />
                ))}
            </div>
            <div className="w-full flex justify-between">
                {midServices.map((service) => (
                    <ServiceCard key={service.label} {...service} />
                ))}
            </div>
            <div className="w-full flex justify-between mt-9">
                {bottomServices.map((service) => (
                    <ServiceCard key={service.label} {...service} />
                ))}
            </div>
        </section>
    );
}

export default Services;
