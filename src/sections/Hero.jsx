import Button from "../components/Button"
import { statistics } from "../constants"
import Typed from 'react-typed'
import { useSpring, animated } from 'react-spring'

const AnimatedNumber = ({ value }) => {
    const { animatedValue } = useSpring({
        from: { animatedValue: 0 },
        to: { animatedValue: value },
        config: { duration: 5000 },
    });

    return (
        <animated.p className="text-3xl md:text-4xl font-palanquin font-bold">
            {animatedValue.to((val) => `+${val.toFixed()}`)}
        </animated.p>
    );
};

const Hero = () => {

    return (
        <section className="w-full flex flex-col xl:flex-row justify-center min-h-screen items-center md:items-stretch">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="mt-6 md:mt-8 font-montserrat text-[#c5e1e9] text-xs md:text-base font-semibold italic">O maior clube de preparação física para bailarinas do Brasil 💙</p>
                <h1 className="mt-8 font-palanquin text-3xl md:text-4xl max-sm:leading-30 font-bold text-gray-200">
                    <span
                        className="xl:whitespace-nowrap relative z-10 pr-10"
                    >
                        Seja uma bailarina{' '}
                        <Typed
                            className="block text-4xl md:text-5xl font-bold text-[#c5e1e9]"
                            strings={["FLEXÍVEL", "FORTE", "PREPARADA!"]}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                            cursorChar="_"
                            smartBackspace
                            startDelay={800}
                        />
                    </span>
                </h1>
                <p className="font-montserrat text-white text-sm md:text-lg leading-6 md:leading-8 mb-6 sm:max-w-sm">
                    Um programa completo para você preparar o seu corpo para evoluir no ballet e executar até mesmo os passos mais difíceis!
                </p>
                <Button label="QUERO FAZER PARTE!" />
                <div className="flex md:flex-row justify-start items-center md:items-start no-wrap w-full mt-5 md:gap-16 text-white">
                    {statistics.map((stat) => (
                        <div key={stat.label} className="flex flex-col item-center">
                            <AnimatedNumber className="text-2xl md:text-4xl" value={parseInt(stat.value)} />
                            <p className="leading-7 font-montserrat text-gray-200">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center xl:justify-end items-center xl:min-h-screen max-xl:py-40">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/S8bMhmAneCo?si=mU-7wV9O0tVydZg6&amp;controls=0" title="Apresentação do Clube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="max-w-full"
                >
                </iframe>
            </div>
        </section>
    )
}

export default Hero