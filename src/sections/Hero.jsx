import Button from "../components/Button"
import { statistics } from "../constants"
import Typed from 'react-typed'
import { useSpring, animated } from 'react-spring'
import LiteYoutubePlayer from "../components/LiteYoutubePlayer";

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
                <h1 className="mt-8 text-3xl md:text-4xl max-sm:leading-30 font-bold text-gray-200">
                    <span
                        className="xl:whitespace-nowrap relative pr-10 font-lato"
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
                    Torne-se a bailarina que sempre sonhou com a ajuda da preparação física!
                </p>
                <LiteYoutubePlayer
                    videoId="ABsLsyHNofA"
                    className="md:hidden mb-8 mx-auto"
                />
                <div className="flex justify-center">
                    <Button label="QUERO FAZER PARTE!" />
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center text-center w-full mt-5 gap-2 text-white">
                    {statistics.map((stat) => (
                        <div key={stat.label} className="flex flex-col m-2">
                            <AnimatedNumber className="text-2xl md:text-4xl" value={parseInt(stat.value)} />
                            <p className="leading-7 font-montserrat text-gray-200">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center xl:justify-end items-center xl:min-h-screen mt-10 xl:mt-0">
                <LiteYoutubePlayer
                    videoId="ABsLsyHNofA"
                    className="hidden md:block"
                />
            </div>
        </section>
    )
}

export default Hero