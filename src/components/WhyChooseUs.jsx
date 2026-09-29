function Card({ icon, color, title }) {
  return (
    <div className="relative bg-white rounded-xl p-10 pt-14 text-center shadow-xl hover:-translate-y-2 transition">

      <div
        className={`absolute -top-9 left-1/2 -translate-x-1/2
        w-[70px] h-[70px] rounded-full ${color}
        flex items-center justify-center shadow-lg`}
      >
        <img
          src={`/images/${icon}`}
          alt=""
          className="w-8"
        />
      </div>

      <h3 className="font-bold text-xl text-black mb-5">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        Lorem ipsum dolor sit amet, consect adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa.
      </p>

    </div>
  )
}


function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-black text-[#2b1c28]">
            <span className="text-[#7F2736]">Why</span>{" "}
            Choose Us
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg lg:text-xl leading-8 text-[#2C2D32]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <Card
            icon="Vector (5).png"
            color="bg-[#4d44c6]"
            title="Handpicked Hotels"
          />

          <Card
            icon="Vector.png"
            color="bg-[#f1b51c]"
            title="World Class Service"
          />

          <Card
            icon="Vector (6).png"
            color="bg-[#f2552c]"
            title="Best Price Guarantee"
          />

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs