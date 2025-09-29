export default function BetterBusinessSection() {
  const team = [
    {
      name: "Narendra Meena",
      title: "Dy. GM - Analytical Product",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Aarti Sharma",
      title: "Analytical (Sales Engineer)",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Vijay Sharma",
      title: "Dy. GM - Analytical Product",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="w-12 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 text-sm mb-4">Growing With Our Clients</p>
          <h2 className="text-5xl font-bold">
            <span className="text-yellow-600">Better Business</span>
            <br />
            <span className="text-blue-900">With Hyper Cloud</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}