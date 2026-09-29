function Step({ color, title, image }) {
  return (
    <div className="flex items-start gap-4 mb-7">

      <div
        className={`w-12 h-12 rounded-xl ${color} flex-shrink-0 flex items-center justify-center`}
      >
        <img
          src={`/images/${image}`}
          alt=""
          className=""
        />
      </div>

      <div>

        <h3 className="font-bold text-[#5E6282]">
          {title}
        </h3>

        <p className="text-sm text-[#84829A] mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Urna, tortor tempus.
        </p>

      </div>

    </div>
  )
}

function EasyTrip() {
  return (
    <section
      id="booking"
      className="py-16 lg:py-24"
    >

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}
        <div>

          <p className="font-semibold text-[#5E6282] text-lg">
            Easy and Fast
          </p>

          <h2 className="text-[#14183E] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-3 mb-10">
            Book Your Next Trip
            <br />
            In 3 Easy Steps
          </h2>

          <Step
            color=""
            title="Choose Destination"
            image="Group 7 (1).png"
          />

          <Step
            color=""
            title="Make Payment"
            image="Group 11.png"
          />

          <Step
            color=""
            title="Reach Airport on Selected Date"
            image="Group 12 (1).png"
          />

        </div>

        {/* RIGHT */}
        <div className="relative max-w-md mx-auto w-full">

          {/* Main Card */}
          <div className="bg-white rounded-3xl p-5 shadow-2xl">

            <img
              src="/images/bdc4e9e798bb7e15ae87fe31c13c5b3cc6d31461.jpg"
              alt="Greece"
              className="w-full h-48 object-cover rounded-2xl"
            />

            <h3 className="font-bold text-gray-800 mt-4">
              Trip To Greece
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              14-29 June | by Robbin joseph
            </p>

            <div className="flex gap-3 mt-5">

              <img
                src="/images/LEAF.png"
                className="w-9 h-9 p-2 rounded-full bg-gray-100"
                alt=""
              />

              <img
                src="/images/map icon.png"
                className="w-9 h-9 p-2 rounded-full bg-gray-100"
                alt=""
              />

              <img
                src="/images/send.png"
                className="w-9 h-9 p-2 rounded-full bg-gray-100"
                alt=""
              />

            </div>

            <div className="flex justify-between items-center mt-6 text-sm text-gray-400">

              <span className="flex items-center gap-2">

                <img
                  src="/images/building 1.png"
                  className="w-5"
                  alt=""
                />

                24 people going

              </span>

              <img
                src="/images/heart (6) 1.png"
                className="w-5"
                alt=""
              />

            </div>

          </div>

          {/* Floating Card */}
          <div className="absolute right-2 sm:-right-10 bottom-10 bg-white rounded-2xl p-4 shadow-2xl w-52 sm:w-60">

            <div className="flex gap-3">

              <img
                src="/images/0936a74669c796b13d6446c8177e79c2a2249ca6.png"
                className="w-11 h-11 rounded-full object-cover"
                alt=""
              />

              <div className="flex-1">

                <small className="text-gray-400">
                  Ongoing
                </small>

                <h4 className="font-bold text-gray-800 text-sm">
                  Trip to Rome
                </h4>

                <p className="text-[#4B40C5] text-xs font-bold">
                  40% completed
                </p>

                <div className="w-full h-1 bg-gray-200 rounded-full mt-2">

                  <div className="w-[40%] h-full bg-[#8A79DF] rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default EasyTrip