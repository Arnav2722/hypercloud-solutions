import { Users, BarChart3,  Scale } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Users,
      title: "Oracle Fusion Cloud",
      bgColor: "bg-yellow-100"
    },
    {
      icon: BarChart3,
      title: "Analytics Solutions",
      bgColor: "bg-blue-100"
    },
    {
      icon: BarChart3,
      title: "INFOR",
      bgColor: "bg-blue-100"
    },
    {
      icon: Scale,
      title: "SAP specialization",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-yellow-600">Solutions</span>
              <br />
              <span className="text-blue-900">we deliver</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-[40px] hover:bg-blue-300 duration-700 ease-in-out text-center"
                >
                  <div
                    className={`${solution.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}
                  >
                    <solution.icon className="h-8 w-8 text-blue-600 " />
                  </div>
                  <h3 className="text-blue-900 font-semibold text-lg">
                    {solution.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Business presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}