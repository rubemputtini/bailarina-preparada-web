import Button from "../components/Button"
import { bailarina } from "../assets/images"

const Benefits = () => {
    return (
        <section
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className='flex flex-1 flex-col'>
                <h2 className='font-palanquin text-4xl lg:max-w-lg font-bold'>
                    O que voce vai encontrar no
                    <span className='text-[#aaa7cc]'> Clube da Bailarina Preparada </span>
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Aprimore sua prática com treinos mensais e aulas especializadas, projetados para enfrentar os desafios do ballet. Junte-se à nossa comunidade, conecte-se com outras bailarinas e encontre apoio para elevar o seu potencial artístico.
                </p>
                <div className='mt-11 font-bold'>
                    <Button label='QUERO SER UMA BAILARINA PREPARADA' />
                </div>
            </div>
            {/* TODO: colocar algo como um slider ou passos no lugar da foto*/}
            <div className='flex-1 flex justify-center items-center'>
                <img
                    src={bailarina}
                    alt='product detail'
                    width={570}
                    height={522}
                    className='object-contain'
                />
            </div>
        </section>
    )
}

export default Benefits