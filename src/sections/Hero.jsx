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
        <animated.p className="text-4xl font-palanquin font-bold">
            {animatedValue.to((val) => `+${val.toFixed()}`)}
        </animated.p>
    );
};

const Hero = () => {

    return (
        <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="mt-8 text-xl font-montserrat text-[#b6d5de] font-semibold italic">O maior clube de bailarinas do BRASIL!</p>
                <h1 className="mt-8 font-palanquin text-2xl max-sm:text-xl max-sm:leading-30 font-bold">
                    <span
                        className="md:text-5xl sm:text-4xl text-3xl font-bold xl:whitespace-nowrap relative z-10 pr-10"
                    >
                        Seja uma bailarina{' '}
                        <Typed
                            className="block md:text-5xl sm:text-4xl text-3xl font-bold text-[#aaa7cc]"
                            strings={["FORTE", "FLEXÍVEL", "TÉCNICA", "PREPARADA"]}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                            cursorChar="_"
                            smartBackspace
                            startDelay={800}
                        />
                    </span>
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mb-6 sm:max-w-sm">
                    Um programa completo para você preparar o seu corpo para evoluir no ballet e executar até mesmo os passos mais difíceis!
                </p>
                <Button label="QUERO FAZER PARTE!" />
                <div className="flex justify-start items-start no-wrap w-full mt-5 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <AnimatedNumber className="text-4xl font-palanquin font-bold" value={parseInt(stat.value)} />
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-end items-center xl:min-h-screen max-xl:py-40">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/S8bMhmAneCo?si=mU-7wV9O0tVydZg6&amp;controls=0" title="Apresentação do Clube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
        </section>
    )
}

export default Hero