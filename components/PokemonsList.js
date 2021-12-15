import React, {useState, useEffect} from 'react'
import {db,getDocs, collection } from '../firebase/config'
import Card from './Card'
import EmptyCard from './EmptyCard'

const PokemonsList = () => {
    const [pokes, setPokes] = useState([]);
    const [showCard, setShowCard] = useState(false);
    const [showEvolution, setShowEvolution] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const [selectedEvolutionPokemon, setSelectedEvolutionPokemon] = useState({});

    const getPokemons = async() =>{
        const pokemonsCol = collection(db, 'pokemons');
        const pokemonSnapshot = await getDocs(pokemonsCol);
        const pokemonList = pokemonSnapshot.docs.map(doc => doc.data());
        const pokemon = pokemonList.map((item)=> item)
        console.log(pokemon)
        setPokes(pokemon)
      }

    const fetchPokemon = (id) => {
        const pokemon = pokes.filter(p => p.id === id)
        setSelectedEvolutionPokemon(pokemon)
    }

    useEffect(()=>{
        getPokemons()
    },[])

    return (
    <div className="w-screen h-full md:h-screen bg-gray-800 grid grid-rows-2 grid-cols-1 lg:grid-cols-3">
        <div className='h-60 md:h-80 lg:h-screen flex flex-wrap grid grid-cols-4 overflow-y-scroll lg:grid-cols-3'>
            {pokes.sort((a,b)=> a.id>b.id?1:-1).map((poke)=>{
                return (
                    <div key={poke.id} className='bg-gray-800 p-2' onClick={()=>{ setShowCard(!showCard); setSelectedPokemon(poke); setShowEvolution(false);}}>
                            <img src={poke.img} className='h-4/5 w-5/5 hover:bg-gray-900 p-1' alt='pokemon img'/>
                    </div>
                    )
                })}
        </div>
        <div className="h-10/12 flex flex-col items-center my-2 lg:place-items-start">
            {showCard ? (
                <>
                    <Card  open={showCard}
                            onClose={() => {
                            setShowCard(!showCard);
                            setSelectedPokemon();
                            }} name={selectedPokemon.name} 
                            img={selectedPokemon.img} 
                            type={selectedPokemon.type} 
                            height={selectedPokemon.height} 
                            weight={selectedPokemon.weight} 
                            weaknesses={selectedPokemon.weaknesses}
                            />
                    <div className='w-10/12 flex justify-around'> 
                        {selectedPokemon.next_evolution && selectedPokemon.next_evolution.map(evolution=>{
                                return (
                                    <p key={evolution.name} className='flex flex-col tracking-wide text-gray-200'>Next Evolution<button className='font-bold hover:text-blue-300' onClick={()=>{setShowEvolution(!showEvolution); fetchPokemon(parseInt(evolution.num));}}>{evolution.name}</button></p>
                                )
                        })}
                    </div>        
                </>
                ):(<EmptyCard text='Select a Pokemon'/>)
            }
        </div>
        <div className="h-full grid place-items-center m-2 lg:place-items-start">
            {showEvolution? 
                selectedEvolutionPokemon.map((poki=>{
                    return(
                        <Card  
                        open={showEvolution}
                        onClose={() => {
                        setShowEvolution(!showEvolution);
                        setSelectedEvolutionPokemon();
                        }} 
                        key={poki.id}
                        name={poki.name} 
                        img={poki.img} 
                        type={poki.type} 
                        height={poki.height} 
                        weight={poki.weight} 
                        weaknesses={poki.weaknesses}
                        next_evolution={poki.next_evolution}
                        />
                    )
                })
            ):<EmptyCard text='Select an Evolution'/>}
        </div>
    </div>
    )
}

export default PokemonsList
