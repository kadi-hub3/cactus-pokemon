import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PokemonsList from '../components/PokemonsList'

const Home = () => {
  return (
    <div className='bg-gray-800'>
    <Navbar/>
    <PokemonsList/>
    <Footer/>
    </div>
  )
}

export default Home
