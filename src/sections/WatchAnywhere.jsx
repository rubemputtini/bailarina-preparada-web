import { membros } from "../assets/images"

const WatchAnywhere = () => {
    return (
        <section
            className="flex justify-between items-center max-lg:flex-col w-full max-container"
        >
            <div className='flex flex-1 flex-col'>
                <h2 className='font-lato text-3xl md:text-4xl lg:max-w-lg font-bold text-[#C5E1E9]'>
                    Assista quando e onde quiser!
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Nossa plataforma é à prova de desculpas!
                </p>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Você acessa os treinos do CBP pelo celular ou computador na hora que quiser, onde estiver: os treinos estarão sempre à sua disposição!
                </p>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <img
                    src={membros}
                    alt='Área de Membros'
                    width={570}
                    height={522}
                    className='object-contain'
                />
            </div>
        </section>
    )
}

export default WatchAnywhere