const EvolutionBtn = () => {
    return (
          <div className='w-10/12 flex justify-around'> 
                        {selectedPokemon.next_evolution && selectedPokemon.next_evolution.map(evolution=>{
                                return (
                                    <p key={evolution.name} className='flex flex-col tracking-wide text-gray-200'>Next Evolution<button className='font-bold hover:text-blue-300' onClick={()=>{setShowEvolution(!showEvolution); fetchPokemon(parseInt(evolution.num));}}>{evolution.name}</button></p>
                                )
                        })}
                    </div> 
    )
}

export default EvolutionBtn
