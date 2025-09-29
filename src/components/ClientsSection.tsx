import hdfcLogo from "/assets/hdfc-bank-seeklogo.png";
import kotakLogo from "/assets/kotak-mahindra-bank-seeklogo.png";
import swiggyLogo from "/assets/swiggy-seeklogo.png";
import zomatoLogo from "/assets/zomato-seeklogo.png";
import axisLogo from "/assets/axis-bank-seeklogo.png";
import oyoLogo from "/assets/oyo-rooms-seeklogo.png";
import olaLogo from "/assets/ola-seeklogo.png";
import boatLogo from "/assets/boat-seeklogo.png";
import bandhanLogo from "/assets/bandhan-bank-seeklogo.png";
import tataLogo from "/assets/tata-1mg-seeklogo.png";
import urbanLogo from "/assets/urban-company-seeklogo.png";


export default function ClientsSection() {
  const clients = [
    {
      id: 1,
      name: "Kotak Mahindra Bank",
      // 2. Use the imported variable instead of the string path
      logo: kotakLogo,
    },
    { id: 2, name: "OYO", logo: oyoLogo },
    { id: 3, name: "HDFC Bank", logo: hdfcLogo },
    { id: 4, name: "Axis Bank", logo: axisLogo },
    { id: 5, name: "Zomato", logo: zomatoLogo },
    { id: 6, name: "Swiggy", logo: swiggyLogo },
    {
      id: 7,
      name: "Bandhan Bank",
      logo: bandhanLogo,
    },
    { id: 8, name: "OLA", logo: olaLogo },
    { id: 9, name: "TATA 1MG", logo: tataLogo },
    {
      id: 10,
      name: "Urban Company",
      logo: urbanLogo,
    },
    { id: 11, name: "boAt", logo: boatLogo },
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
