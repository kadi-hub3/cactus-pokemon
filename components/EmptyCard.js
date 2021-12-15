import Image from "next/image"
import logo from '../ui/svg/pokeball.svg'

const EmptyCard = ({text}) => {
    return (
        <div className='w-full h-full grid place-items-center'>
            <div>
                <Image src={logo} alt='pokeball' className='h-24 w-24'/>
                <h3 className='text-gray-300 font-bold tracking-wide'>{text}</h3>
            </div>
        </div>
    )
}

export default EmptyCard
