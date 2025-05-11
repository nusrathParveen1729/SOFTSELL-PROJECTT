import React from "react";
import { Headphones, Plug, CreditCard, BarChart } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is always ready to assist you, day or night. Reach us anytime for quick resolutions.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    desc: "Integrate our solutions with your existing systems effortlessly. We provide simple, step-by-step setup guides.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    desc: "No hidden costs or surprise fees. Our pricing is clear and upfront so you know exactly what you’re paying for.",
  },
  {
    icon: BarChart,
    title: "Scalable Solutions",
    desc: "Whether you’re a small startup or a large enterprise, our solutions scale to meet your growing needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#0D0D2B] overflow-hidden">
      {/* Background Gradient Lights */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-700 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-700 opacity-30 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Why <span className="text-gradient">Choose</span> Us?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-20">
          Here’s why we stand out. We provide unparalleled services that set us apart from the competition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-purple-600/40 transition-all duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-full shadow-lg mb-5 w-fit mx-auto group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
