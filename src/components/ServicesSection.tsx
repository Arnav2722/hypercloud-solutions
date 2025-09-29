export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-yellow-600">What </span>
            <span className="text-blue-900">We Do</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Professional Consulting Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Professional Consulting</h3>
              <p className="text-gray-600 mb-6">
                Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing...
              </p>
              
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Professional consulting" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors">
                View more →
              </button>
            </div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8npm">
            <div className="text-center">
              <div className="text-blue-900 font-bold text-5xl transform mb-4">Implementation</div>
            </div>
            
            <div className="text-center">
              <div className="text-blue-900 font-bold text-5xl transform  mb-4">Managed Services</div>
            </div>
            
            <div className="text-center">
              <div className="text-blue-900 font-bold text-5xl transform mb-4">Custom Application</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}