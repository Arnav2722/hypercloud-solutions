export default function ClientsSection() {
  const clients = [
    {
      id: 1,
      name: "Kotak Mahindra Bank",
      logo: "src/assets/kotak-mahindra-bank-seeklogo.png",
    },
    { id: 2, name: "OYO", logo: "src/assets/oyo-rooms-seeklogo.png" },
    { id: 3, name: "HDFC Bank", logo: "src/assets/hdfc-bank-seeklogo.png" },
    { id: 4, name: "Axis Bank", logo: "src/assets/axis-bank-seeklogo.png" },
    { id: 5, name: "Zomato", logo: "src/assets/zomato-seeklogo.png" },
    { id: 6, name: "Swiggy", logo: "src/assets/swiggy-seeklogo.png" },
    {
      id: 7,
      name: "Bandhan Bank",
      logo: "src/assets/bandhan-bank-seeklogo.png",
    },
    { id: 8, name: "OLA", logo: "src/assets/ola-seeklogo.png" },
    { id: 9, name: "TATA 1MG", logo: "src/assets/tata-1mg-seeklogo.png" },
    {
      id: 10,
      name: "Urban Company",
      logo: "src/assets/urban-company-seeklogo.png",
    },
    { id: 11, name: "boAt", logo: "src/assets/boat-seeklogo.png" },
  ];

  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden">
          <div className="flex w-fit animate-slide">
            {doubledClients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg min-w-[200px] flex items-center justify-center mx-4"
              >
                <div className="text-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-8 bg-blue-900/50 [mask-image:linear-gradient(to_right,white,transparent)]"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-blue-900/50 [mask-image:linear-gradient(to_left,white,transparent)]"></div>
        </div>
      </div>
    </section>
  );
}
