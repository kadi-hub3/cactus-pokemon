import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PokemonsList from '../components/PokemonsList'

const Home = () => {
  return (
    <>
    <Navbar/>
    <section className="w-screen bg-gray-800 grid grid-rows-2 lg:grid-cols-2">
      <PokemonsList/>
    </section>
    <Footer/>
    </>
  )
}

export default Home
