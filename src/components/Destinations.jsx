

function DestinationCard({ image , place , price , days}) {
  return(
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300">
      <img src={image} alt={place} className="w-full  h-[300px] sm:h-[350px] lg:h-[380px] object-cover" />
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-2 gap-3">
          <span className="text-lg font-semibold text-[#5d6d7e]">
            {place}
          </span>
          <span className="text-lg font-semibold text-[#5d6d7e]">
            {price}
          </span>
        </div>
        <p className="text-gray-500 p-5">{days} </p>
      </div>

      </div>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <p className="text-[#4B40C5] text-xl font-bold">
          Top Selling
        </p>

        <h2 className="text-[#14183E] text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
          Top Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          <DestinationCard
            image="/images/32e1459ae49e57046b9c9bf320fe245919168bb0.png"
            place="Rome, Italy"
            price="₹5.42 Lakh"
            days="10 Days Trip"
          />

          <DestinationCard
            image="/images/599d5437ff6f71a7522170940c3ac66332ac8d2f.jpg"
            place="London, UK"
            price="₹4.2 Lakh"
            days="12 Days Trip"
          />

          <DestinationCard
            image="/images/1119f8e879b2e4cb46bd33155639a62530f9a579.png"
            place="Full Europe"
            price="₹15 Lakh"
            days="28 Days Trip"
          />

        </div>
      </div>
    </section>
  );
}

export default Destinations;