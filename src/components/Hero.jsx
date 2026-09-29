import Navbar from "./Navbar"
import Image from '../assets/hero.png'
function Hero() {
  return (
    <section className="relative min-h-[650px] sm:min-h-[750px] lg:min-h-[857px] overflow-hidden">

      {/* Background Image */}
      <img
        src={Image}
        alt="Travel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="absolute z-10 top-[28%] sm:top-[32%] lg:top-[35%] left-5 sm:left-10 lg:left-16 right-5">

        <h1 className="max-w-[full] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#4B40C5]">
          Travel, enjoy and live a new and full life
        </h1>

        <h5 className="mt-4 max-w-[750px] text-lg sm:text-2xl lg:text-3xl font-bold text-white uppercase">
          Best destination around the world
        </h5>

        <button className="mt-6 sm:mt-8 bg-[#4B40C5] text-white px-7 sm:px-10 py-4 rounded-xl text-base sm:text-lg hover:scale-105 transition">
          Find out more
        </button>

      </div>

    </section>
  )
}

export default Hero