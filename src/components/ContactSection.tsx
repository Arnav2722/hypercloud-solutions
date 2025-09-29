import { MapPin, ChevronDown } from 'lucide-react';

export default function ContactSection() {
  const offices = [
    {
      city: "San Diego",
      address: "411 D Avenue, San Diego, CS 91950"
    },
    {
      city: "San Diego",
      address: "411 D Avenue, San Diego, CS 91950"
    },
    {
      city: "San Diego",
      address: "411 D Avenue, San Diego, CS 91950"
    },
    {
      city: "San Diego",
      address: "411 D Avenue, San Diego, CS 91950"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <div className="w-12 h-1 bg-blue-600 mb-4"></div>
              <p className="text-gray-600 text-sm mb-4">Our Offices</p>
            </div>
            
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-yellow-600">Let's </span>
              <span className="text-blue-900">Talk</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Come and visit our quarters or simply send us an email anytime you want. We are open 
              to all suggestions from all clients, old or new.
            </p>

            {/* Office Locations */}
            <div className="grid grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{office.city}</h3>
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Request a Call Back</h3>
            <p className="text-gray-600 mb-8">
              If you'd like to talk to our consulting team, contact us via the form and we'll 
              get back to you shortly.
            </p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>
              
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none appearance-none bg-white">
                  <option>What would you like to discuss?</option>
                  <option>Consulting Services</option>
                  <option>Implementation</option>
                  <option>Managed Services</option>
                  <option>Custom Applications</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}