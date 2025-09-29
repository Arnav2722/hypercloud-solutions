import { Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Headquarter */}
          <div>
            <div className="w-12 h-1 bg-blue-400 mb-4"></div>
            <p className="text-blue-300 text-sm mb-4">Our Office3</p>
            <h3 className="text-2xl font-bold text-white mb-6">Headquarter</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
              make a type specimen book.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-white">+91-9966882222</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-white">abc@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Where to find us */}
          <div>
            <div className="w-12 h-1 bg-blue-400 mb-4"></div>
            <p className="text-blue-300 text-sm mb-4">Our Office3</p>
            <h3 className="text-2xl font-bold text-white mb-6">Where to find us?</h3>
            
            {/* World Map Dots */}
            <div className="relative h-40 mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-12 gap-1 opacity-30">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  ))}
                </div>
              </div>
              {/* Location markers */}
              <div className="absolute top-8 left-16 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-12 left-32 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-16 right-20 w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="w-12 h-1 bg-blue-400 mb-4"></div>
            <p className="text-blue-300 text-sm mb-4">Get in touch</p>
            <h3 className="text-2xl font-bold text-white mb-6">Hyper Cloud Solutions Social links</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Taking seamless key performance indicators offline to maximise the long tail.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
                <Facebook className="h-6 w-6 text-blue-900" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
                <Linkedin className="h-6 w-6 text-blue-900" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
                <Twitter className="h-6 w-6 text-blue-900" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
                <div className="h-6 w-6 bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">?</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}