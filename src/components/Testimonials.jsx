import { motion } from "framer-motion";

const users = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Miller",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Emma Wilson",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Alex Brown",
  },
];

function Testimonials() {
  return (
    <section
  id="testimonials"
  className="py-32 px-6 bg-[#fafafa] overflow-hidden"
>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            What our customer
            <br />
            says About Us
          </h2>
        </motion.div>

        <div className="relative mt-28 min-h-[700px]">

          {/* Floating Avatars */}

          <motion.img
            src={users[0].image}
            alt=""
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute top-0 left-0 w-24 h-24 rounded-full object-cover shadow-xl"
          />

          <motion.img
            src={users[1].image}
            alt=""
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-10 right-0 w-24 h-24 rounded-full object-cover shadow-xl"
          />

          <motion.img
            src={users[2].image}
            alt=""
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute bottom-0 left-20 w-24 h-24 rounded-full object-cover shadow-xl"
          />

          <motion.img
            src={users[3].image}
            alt=""
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-10 right-20 w-24 h-24 rounded-full object-cover shadow-xl"
          />

          {/* Main Card */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-[40px] shadow-xl p-10 md:p-16 text-center"
          >

            <div className="flex justify-center mb-8">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-6">
              Elementum delivered the site
              within the timeline and exceeded
              our expectations.
            </h3>

            <p className="text-gray-500 leading-8">
              Their team understood our goals,
              translated our vision into an
              outstanding digital experience,
              and helped us grow our online
              presence significantly.
            </p>

            <div className="mt-10">
              <h4 className="font-semibold">
                Olivia Parker
              </h4>

              <p className="text-gray-400 text-sm">
                Marketing Director
              </p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;