
import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 px-5 sm:px-8 lg:px-16 py-5 lg:py-7 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="bon-voyage-font text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b2545]"
        >
          Bon Voyage
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-16">

          <a href="#destinations" className="nav-link">Destinations</a>
          <a href="#hotels" className="nav-link">Hotels</a>
          <a href="#flights" className="nav-link">Flights</a>
          <a href="#booking" className="nav-link">Booking</a>

        </div>

        {/* Buttons */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-5">

          <button className="nav-btn">Login</button>
          <button className="nav-btn">Sign up</button>

        </div>

        {/* Mobile Button */}
        <button className="lg:hidden text-3xl text-[#0b2545]">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;