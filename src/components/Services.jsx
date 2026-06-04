import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Collaborative & Partnership",
    description:
      "Office of multiple interest content, where creativity meets strategy for impactful results.",
  },
  {
    number: "02",
    title: "We Talk About Our Weight",
    description:
      "Building meaningful digital experiences with strong branding and communication.",
  },
  {
    number: "03",
    title: "Piloting Digital Confidence",
    description:
      "Helping organizations transform their digital presence through innovation.",
  },
];

function Services() {
  return (
        <section
  id="services"
  className="section py-32 px-6"
>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400 mb-4">
            OUR SERVICES
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            What we can
            <span className="highlight-pink ml-3">
              offer
            </span>
            you!
          </h2>
        </motion.div>

        {/* Services */}

        <div className="mt-20">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group border-b border-gray-300 py-10 cursor-pointer"
            >
              <div className="grid lg:grid-cols-12 gap-6 items-center">

                <div className="lg:col-span-1">
                  <span className="text-gray-400 text-lg">
                    {service.number}
                  </span>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-3xl md:text-4xl font-light group-hover:translate-x-3 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-gray-500">
                    {service.description}
                  </p>
                </div>

                <div className="lg:col-span-1 flex justify-end">
                  <FiArrowUpRight
                    size={28}
                    className="group-hover:rotate-45 transition-all duration-300"
                  />
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="px-10 py-4 bg-black text-white rounded-full hover:scale-105 transition">
            View All Services
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Services;