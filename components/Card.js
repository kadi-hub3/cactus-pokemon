import React from 'react'

const Card = ({name, img, height, weight, weaknesses, type, next_evolution}) => {
    
    return (
        <div className="w-80 md:w-96 h-full lg:h-96 border border-white lg:m-6">
            <div className='from-blue-400 to-blue-600 bg-gradient-to-r w-full h-full flex flex-col items-center'>
                <img
                    className="h-32 w-32"
                    alt={name}
                    src={img}
                />
                <div className='lg:h-10/12 w-10/12 md:leading-7 px-2 bg-white'>
                    <div className='grid place-items-center py-6'>
                        <h2 className='font-black text-lg tracking-wide py-4'>{name}</h2>
                        <p>{type.map(typ=><span className='mx-1 p-1 border border-red-400 text-red-400 font-bold'>{typ}</span>)}</p>
                    </div>
                    <p className='tracking-wide'><span className='font-bold'>Height: </span>{height}</p>
                    <p className='tracking-wide'><span className='font-bold'>Weight: </span>{weight}</p>
                    <p className='tracking-wide'><span className='font-bold'>Weaknesses: </span>{weaknesses.map(weakness=>`${weakness}, `)}</p>
                </div>
         
            </div>
            <div className='flex justify-items-center h-10'>
                <p className='tracking-wide'><span className='font-bold'>Evolutions: </span>{next_evolution=>console.log(next_evolution)}</p>

            </div>
        </div>

    )
}

export default Card
