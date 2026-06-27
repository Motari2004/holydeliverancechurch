export default function Hero() {
  return (
    <section 
      id="home" 
      className="pt-24 md:pt-28 min-h-[90vh] flex items-center relative"
      style={{
        backgroundImage: `url('/images/church-hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0f1f12]/70 backdrop-blur-sm"></div>
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f12]/90 via-[#0f1f12]/50 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-[#c9a84c]/20 backdrop-blur-sm px-4 py-1 rounded-full text-[#c9a84c] text-sm font-semibold tracking-wider mb-2 border border-[#c9a84c]/30">
              ✝ WELCOME TO OUR CHURCH
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Welcome to{' '}
              <span className="text-[#c9a84c]">Holy Deliverance</span> Church
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              A place of worship, community, and spiritual growth in the heart of Mogonga.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="bg-[#c9a84c] text-[#0f1f12] px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
              >
                Visit Us
              </a>
              <a 
                href="#services" 
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0f1f12] transition-all duration-300 inline-block backdrop-blur-sm hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Our Services
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-[#c9a84c]">10+</div>
                <div className="text-sm text-gray-300">Years of Service</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#c9a84c]">500+</div>
                <div className="text-sm text-gray-300">Community Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#c9a84c]">4</div>
                <div className="text-sm text-gray-300">Weekly Services</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#c9a84c]/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main circle */}
              <div className="relative w-80 h-80 rounded-full bg-[#c9a84c]/10 backdrop-blur-sm flex items-center justify-center border-4 border-[#c9a84c] shadow-2xl shadow-[#c9a84c]/20">
                <div className="text-center">
                  <span className="text-8xl text-[#c9a84c] block">✝</span>
                  <span className="text-xs text-[#c9a84c] font-semibold tracking-wider uppercase mt-2 block">Faith • Hope • Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}