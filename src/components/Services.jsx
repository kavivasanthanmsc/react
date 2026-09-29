function ServiceCard({ image, title, description, shadow, cornerImage , cornerImage2}) {
  return (
    <div className="relative">

      {/* BACKGROUND RECTANGLE IMAGE */}
      {cornerImage && (
        <img
          src={`/images/${cornerImage}`}
          alt=""
          className="absolute -top-4 -right-4 w-20 h-20 object-contain z-0 "
        />
      )}
      {cornerImage2 && (
        <img
          src={`/images/${cornerImage2}`}
          alt=""
          className="absolute -bottom-4 -left-4 w-20 h-20 object-contain z-0"
        />
      )}

      {/* CARD */}
      <div
        className={`relative  h-75 z-10 bg-white rounded-3xl p-8 transition duration-300
        hover:-translate-y-2 hover:shadow-2xl
        ${shadow ? "shadow-xl" : "shadow-sm"}`}
      >
        <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
          <img
            src={`/images/${image}`}
            alt={title}
          />
        </div>

        <h3 className="font-bold text-[#1e1d4c] text-lg p-2">
          {title}
        </h3>

        <p className="mt-4 text-base  leading-7  text-gray-600">
          {description}
        </p>
      </div>

    </div>
  )
}

function Services() {
  return (
    <section className="py-16 lg:py-24">

      <div className="max-w-7xl mx-auto px-5 text-center">

        <p className="text-[#4B40C5] uppercase font-extrabold tracking-wide text-lg sm:text-xl">
          Category
        </p>

        <h2 className="text-[#14183E] font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 mb-12">
          We Offer Best Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <ServiceCard
            image="Group 48.png"
            title="Calculated Weather"
            description="As much of information possible with the weather"
          />

         <ServiceCard
            image="Group.png"
            title="Local Events"
            description="Getting good itinerary based on the events"
            shadow={true}
            cornerImage2="Rectangle 157.png"
          />

          <ServiceCard
            image="Group 50.png"
            title="Local Events"
            description="Getting good itinerary based on the events"
            shadow={true}
            cornerImage="Rectangle 158.png"
          />

          <ServiceCard
            image="Group 49.png"
            title="Customization"
            description="We deliver outsourced services for customers"
          />

        </div>

      </div>

    </section>
  )
}

export default Services