const Card = ({name, img, height, weight, weaknesses, type}) => {
    return (
        <div className="w-64 md:w-80 lg:h-full border border-white rounded-md">
            <div className='from-blue-400 to-blue-600 bg-gradient-to-r w-full h-full flex flex-col items-center'>
                <div className='relative h-40 w-40'>
                <img
                    className="absolute top-20 "
                    alt={name}
                    src={img}
                />
                </div>
                <div className='lg:h-10/12 w-10/12 md:leading-7 px-2 bg-white'>
                    <div className='grid place-items-center py-6'>
                        <h2 className='font-black text-lg tracking-wide py-4'>{name}</h2>
                        <p>{type && type.map(typ=><span className='mx-2 p-1 border border-red-400 text-red-400 font-bold rounded'>{typ}</span>)}</p>
                    </div>
                    <p className='tracking-wide'><span className='font-bold'>Height: </span>{height}</p>
                    <p className='tracking-wide'><span className='font-bold'>Weight: </span>{weight}</p>
                    <p className='tracking-wide'><span className='font-bold'>Weaknesses: </span>{weaknesses && weaknesses.map(weakness=>`${weakness}, `)}</p>
                </div>
            </div>
            <hr className='my-4 lg:my-2'/>
        </div>

    )
}

export default Card
