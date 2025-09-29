import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does your consultancy company specialize in?",
      answer: "We specialize in enterprise-wide strategic solutions including Oracle Fusion Cloud, Analytics Solutions, INFOR, and SAP implementations."
    },
    {
      question: "How experienced are your consultants?",
      answer: "Our consultants have over 25 years of combined experience in enterprise solutions and business consulting across various industries."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve SMEs, Pharma Industry, Manufacturing Units, Service Industry, Production Units, Textile Industries, Trading Industry, and Hospitality Business."
    },
    {
      question: "What industries do you serve?",
      answer: "We provide comprehensive managed services, professional consulting, implementation services, and custom application development."
    },
    {
      question: "What industries do you serve?",
      answer: "Our solutions are designed to scale with your business needs, from small enterprises to large corporations across multiple sectors."
    },
    {
      question: "What industries do you serve?",
      answer: "We offer ongoing support, maintenance, and optimization services to ensure your systems continue to deliver value over time."
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-yellow-400">Frequently Asked </span>
          <span className="text-white">Questions</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Business team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-yellow-400 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-gray-800 font-medium hover:bg-yellow-300 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <Plus 
                    className={`h-5 w-5 transition-transform ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`} 
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}