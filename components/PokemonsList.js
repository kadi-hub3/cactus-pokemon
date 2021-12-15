import React, {useState, useEffect} from 'react'
import {db,getDocs, collection } from '../firebase/config'

const PokemonsList = () => {
    const [pokes, setPokes] = useState([])

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
    <>
        <div className='h-screen flex flex-wrap p-10 grid grid-cols-6 overflow-y-scroll lg:grid-cols-3'>
        {pokes.sort((a,b)=> a.id>b.id?1:-1).map((poke)=>{
            return (
                <div key={poke.id} className='bg-gray-800' onClick={()=>{ setShowCard(!showCard); setSelectedPokemon(poke); console.log(selectedPokemon)}}>
                        <img src={poke.img} className='h-full w-full hover:bg-gray-900 p-2' alt='pokemon img'/>
                </div>
                )
            })}
        </div>
    </>
    )
}

export default PokemonsList
