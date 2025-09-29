import { Building2, Factory, Cog, ShoppingBag, Hotel, UserCheck } from 'lucide-react';

export default function ConsultancySection() {
  const industries = [
    { icon: Building2, title: "SMEs" },
    { icon: Factory, title: "Pharma Industry" },
    { icon: Factory, title: "Manufacturing Units" },
    { icon: UserCheck, title: "Service Industry" },
    { icon: Cog, title: "Production Units" },
    { icon: Building2, title: "Textile Industries" },
    { icon: ShoppingBag, title: "Trading Industry" },
    { icon: Hotel, title: "Hospitality Business" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <div className="w-12 h-1 bg-blue-600 mb-4"></div>
              <p className="text-gray-600 text-sm mb-2">Where Can We Help</p>
            </div>
            
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-yellow-600">Consultancy</span>
              <br />
              <span className="text-blue-900">Excellence</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Objectively integrate enterprise-wide strategic theme areas with 
              functionalized infrastructures. Interactively productize premium 
              technologies.
            </p>

            {/* Industry Grid */}
            <div className="grid grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-[40px] shadow-sm hover:shadow-md  hover:bg-blue-300 transition-all duration-700 ease-in-out">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-black font-medium">{industry.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-[48px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Business consultation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}