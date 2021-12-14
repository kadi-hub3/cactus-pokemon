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
        <div>
       
        </div>
    )
}

export default PokemonsList
