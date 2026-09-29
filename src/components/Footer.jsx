
function FooterColumn({ title, link1, link2, link3 }) {
  return (
    <div>

      <h3 className="font-bold text-xl text-black mb-5">
        {title}
      </h3>

      <ul className="space-y-3">

        <li>
          <a href="#" className="hover:text-[#df6951] transition">
            {link1}
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[#df6951] transition">
            {link2}
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[#df6951] transition">
            {link3}
          </a>
        </li>

      </ul>

    </div>
  )
}


function SocialApps() {
  return (
    <div>

      {/* Social Icons */}
      <div className="flex gap-4 mb-5">

        <img
          src="/images/Social.png"
          className="w-15 h-15 hover:-translate-y-2 transition duration-300 "
          
          alt=""
        />

        <img
          src="/images/Social (1).png"
          className="w-15 h-15 hover:-translate-y-2 transition duration-300 "
          alt=""
        />

        <img
          src="/images/Social (2).png"
          className="w-15 h-15 hover:-translate-y-2 transition duration-300 "
          
          alt=""
        />

      </div>


      <p className="font-medium text-sm mb-3">
        Discover our app
      </p>


      {/* App Buttons */}
      <div className="flex flex-wrap  gap-2">

        {/* Google Play */}
        <div className="flex items-center bg-black text-white rounded-xl">

          <img
            src="/images/google-play 1.png"
            className="w-7"
            alt=""
          />

          <div className="ml-1">
            <small className="block text-[8px]">
              Get it on
            </small>

            <span className="text-[10px] font-semibold">
              GOOGLE PLAY
            </span>
          </div>

        </div>


        {/* Apple Store */}
        <div className="flex items-center bg-black text-white  rounded-xl">

          <span className="text-xl">
            
          </span>

          <div className="ml-2">
            <small className="block text-[8px]">
              Available on the
            </small>

            <span className="text-[10px] font-semibold">
              Apple Store
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}


function Footer() {
  return (
    <footer className="py-14">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">


          {/* Logo */}
          <div>

            <h2 className="text-3xl font-bold text-[#0b2545] mb-4">
              Bon Voyage
            </h2>

            <p className="text-sm leading-6 max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>

          </div>


          {/* Company */}
          <FooterColumn
            title="Company"
            link1="About"
            link2="Careers"
            link3="Mobile"
          />


          {/* Contact */}
          <FooterColumn
            title="Contact"
            link1="Help/FAQ"
            link2="Press"
            link3="Affiliates"
          />


          {/* More */}
          <FooterColumn
            title="More"
            link1="Airlinefees"
            link2="Airline"
            link3="Low fare tips"
          />


          {/* Social + Apps */}
          <SocialApps />


        </div>


        {/* Copyright */}
        <div className="text-center mt-16">

          <p className="text-sm font-medium">
            All rights reserved@bonvoyage.co
          </p>

        </div>

      </div>

    </footer>
  )
}


export default Footer
