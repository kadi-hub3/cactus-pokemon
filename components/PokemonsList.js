import React, {useState, useEffect} from 'react'
import {db,getDocs, collection } from '../firebase/config'
import Card from './Card'
import EmptyCard from './EmptyCard'

const PokemonsList = () => {
    const [pokes, setPokes] = useState([]);
    const [showCard, setShowCard] = useState(false);
    const [showEvolution, setShowEvolution] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState({});

    const getPokemons = async() =>{
        const pokemonsCol = collection(db, 'pokemons');
        const pokemonSnapshot = await getDocs(pokemonsCol);
        const pokemonList = pokemonSnapshot.docs.map(doc => doc.data());
        const pokemon = pokemonList.map((item)=> item)
        console.log(pokemon)
        setPokes(pokemon)
      }

    useEffect(()=>{
        getPokemons()
    },[])

    return (
        <div className="w-screen h-full md:h-screen bg-gray-800 grid grid-cols-1 lg:grid-cols-3">
        <div className='h-60 md:h-80 lg:h-screen flex flex-wrap grid grid-cols-4 overflow-y-scroll lg:grid-cols-3'>
        {pokes.sort((a,b)=> a.id>b.id?1:-1).map((poke)=>{
            return (
                <div key={poke.id} className='bg-gray-800 p-2' onClick={()=>{ setShowCard(!showCard); setSelectedPokemon(poke); console.log(selectedPokemon)}}>
                        <img src={poke.img} className='h-4/5 w-5/5 hover:bg-gray-900 p-1' alt='pokemon img'/>
                </div>
                )
            })}
        </div>
        <div className="h-10/12 grid place-items-center my-2 lg:place-items-start">
        {showCard ? (
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
                    next_evolution={selectedPokemon.next_evolution}/>
        ):(<EmptyCard text='Select a Pokemon'/>)
}
        </div>
        <div className="h-full grid place-items-center m-2 lg:place-items-start">
        {showEvolution ? (
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
                    next_evolution={selectedPokemon.next_evolution}/>

        ):<EmptyCard text='Select an Evolution'/>}
        </div>

        </div>
    )
}

export default PokemonsList
