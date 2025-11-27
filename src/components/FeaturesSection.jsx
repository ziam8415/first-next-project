import { FaTruck, FaShieldAlt, FaHeadset, FaSync } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaTruck className="text-3xl text-blue-600" />,
      title: "Fast Delivery",
      desc: "Reliable and quick delivery service across Bangladesh.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Secure Payment",
      desc: "100% secure payment with trusted payment gateways.",
    },
    {
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      title: "24/7 Support",
      desc: "We provide round-the-clock customer support.",
    },
    {
      icon: <FaSync className="text-3xl text-blue-600" />,
      title: "Easy Returns",
      desc: "Hassle-free return and refund policy for every order.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Our Key Features
        </h2>
        <p className="text-gray-600 text-md">
          Experience smarter shopping with trust, speed, and support.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
