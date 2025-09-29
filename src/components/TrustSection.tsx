export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Business team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-6">
              <div className="w-12 h-1 bg-blue-600 mb-4"></div>
              <p className="text-gray-600 text-sm mb-2">
                Growing With Our Clients
              </p>
            </div>

            <h2 className="text-5xl font-bold mb-8">
              <span className="text-yellow-600">25 Years Of</span>
              <br />
              <span className="text-blue-900">Your Trust</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </p>

            {/* Signature */}
            <div className="flex items-center space-x-6">
              <div className="mb-8">
                {/* <div className="text-3xl font-script text-gray-800 mb-2">Lisa Miller</div> */}
                <img
                  className="text-3xl font-script text-gray-800 mb-2"
                  src="/src/assets/imgi_10_img-signature.png"
                  alt="Lisa Miller"
                />
              </div>

              {/* Decorative Dots Pattern */}
              <div className="grid grid-cols-8 gap-2 w-32">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
