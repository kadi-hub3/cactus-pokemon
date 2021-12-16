import Image from "next/image"
import logo from '../ui/svg/pokeball.svg'

const EmptyCard = ({text}) => {
    return (
        <div className='h-96 w-60 md:w-80 flex justify-center my-6'>
            <div className='flex flex-col items-center'>
                <Image src={logo} alt='pokeball' className='h-24 w-24'/>
                <h3 className='text-gray-300 font-bold tracking-wide py-4'>{text}</h3>
            </div>
        </div>
    )
}

export default EmptyCard
