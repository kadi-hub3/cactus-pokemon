import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PokemonsList from '../components/PokemonsList'

const Home = () => {
  return (
    <>
    <Navbar/>
    <PokemonsList/>
    <Footer/>
    </>
  )
}

export default Home
