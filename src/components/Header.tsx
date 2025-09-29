import { Facebook, Twitter, Linkedin, Cloud } from "lucide-react";

export default function Header() {
  return (
    <header className="relative">
      {/* Navigation */}
      <nav className="bg-gray-500 backdrop-blur-lg shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/src/assets/white-logo.png" className="h-16" alt="" />
                <div className="text-white font-bold text-lg"></div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 bg-yellow-600 rounded-full">
                <a
                  href="#"
                  className=" text-white px-4 py-2 text-sm font-medium hover:bg-yellow-700 transition-colors rounded-full"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-white px-4 py-2 text-sm font-medium hover:bg-yellow-700 transition-colors rounded-full"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className=" text-white px-4 py-2 text-sm font-medium hover:bg-yellow-700 transition-colors rounded-full"
                >
                  CAREER
                </a>
                <a
                  href="#"
                  className=" text-white px-4 py-2 text-sm font-medium hover:bg-yellow-700 transition-colors rounded-full"
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className=" text-white px-4 py-2 text-sm font-medium hover:bg-yellow-700 transition-colors rounded-full"
                >
                  BLOG
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white hidden md:inline">
                Visit our social pages
              </span>
              <div className="flex space-x-2">
                <a
                  href="https://www.facebook.com"
                  className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-colors"
                >
                  <Facebook className="h-4 w-4 text-gray-700" />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-colors"
                >
                  <Twitter className="h-4 w-4 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
