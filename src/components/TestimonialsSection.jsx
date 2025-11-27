import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahim Uddin",
      role: "Verified Buyer",
      message:
        "E-Mart made my online shopping so easy. Fast delivery and great product quality!",
      rating: 5,
      imageUrl: "https://i.ibb.co/7yG6RkP/user1.png",
    },
    {
      name: "Ayesha Khan",
      role: "Regular Customer",
      message:
        "I love their service. The support team is very helpful, and return process is smooth.",
      rating: 4,
      imageUrl: "https://i.ibb.co/9pGxYcB/user2.png",
    },
    {
      name: "Imran Hossain",
      role: "New User",
      message:
        "Secure payment and quick response. My order arrived earlier than expected!",
      rating: 5,
      imageUrl: "https://i.ibb.co/jbW5t0x/user3.png",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 py-16">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-md">
          Real reviews from verified users who shop with trust.
        </p>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <FaQuoteLeft className="text-blue-600 text-xl mb-3 opacity-80" />

            {/* Message */}
            <p className="text-sm text-gray-700 mb-4 line-clamp-2">
              {t.message}
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < t.rating ? "text-blue-600" : "text-gray-300"
                  }
                />
              ))}
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={t.imageUrl || null}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-100"
              />

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {t.name}
                </h3>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
