import Button from "../components/Button"
import { bailarina } from "../assets/images"

const Benefits = () => {
    return (
        <section
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className='flex flex-1 flex-col'>
                <h2 className='font-lato text-3xl md:text-4xl lg:max-w-lg font-bold text-[#C5E1E9]'>
                    O que você vai encontrar no
                    <span className='text-[#A6BDCE]'> Clube da Bailarina Preparada </span>
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Os <b>melhores treinos </b>de condicionamento físico para bailarinas: desenvolva sua FORÇA, sua FLEXIBILIDADE, seu EQUILÍBRIO e todas as capacidades físicas necessárias para a sua evolução no ballet!
                </p>
                <div className='mt-11'>
                    <Button label='QUERO COMEÇAR AGORA' />
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <img
                    src={bailarina}
                    alt='product detail'
                    width={570}
                    height={522}
                    className='object-contain'
                    loading="lazy"
                />
            </div>
        </section>
    )
}

export default Benefits