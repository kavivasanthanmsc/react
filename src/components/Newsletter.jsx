function Newsletter() {
  return (
    <section className="py-16 px-5">

      <div className="max-w-5xl mx-auto">

        <div className="relative bg-[#f4f3f9]
          rounded-tl-[180px] rounded-bl-[80px]
          rounded-br-[40px]
          p-8 sm:p-12 lg:p-24 text-center">

          
          <div className="absolute -top-5 right-2 sm:right-8 lg:-right-5
            w-14 h-14 rounded-full bg-[#6b52e5]
            text-white flex items-center justify-center shadow-xl">
            ➤
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl
            font-bold text-[#393b53] leading-relaxed">
            Subscribe to get information, latest news and other interesting
            offers at Bon Voyage
          </h2>


          {/* Email + Button */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

            <div className="flex flex-1 max-w-xl bg-white rounded-xl overflow-hidden">

              <span className="px-4 flex items-center text-gray-400">
                ✉
              </span>

              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-4 outline-none"
              />

            </div>

            <button
              className="bg-[#ff7d61] text-white px-8 py-4
              rounded-xl hover:bg-[#ff6342] transition"
            >
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Newsletter