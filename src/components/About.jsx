import { motion } from "framer-motion";

function About() {
  return (
    <section
  id="about"
  className="section px-6 py-20 overflow-hidden"
>
      {/* SECTION 1 */}

      <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            <span className="highlight-green">
              Tomorrow
            </span>
            <br />
            should be
            <br />
            better than today
          </h2>

          <p className="text-gray-600 mt-8 max-w-md">
            We are a team of strategists,
            designers, communicators,
            researchers. Together, we
            believe that progress only
            happens when you refuse
            to play things safe.
          </p>

          <button className="mt-8 border-b border-black pb-1">
            Read More →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="absolute w-64 h-64 bg-pink-200 blur-3xl opacity-40 rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt=""
            className="w-[420px] h-[420px] object-cover rounded-full shadow-xl relative z-10"
          />

          <div className="absolute right-0 top-16 w-24 h-24 bg-red-300 rotate-12"></div>
        </motion.div>
      </div>

      {/* CURVE LINE */}

      <svg
        className="w-full mb-24"
        height="120"
        viewBox="0 0 1200 120"
        fill="none"
      >
        <path
          d="M0 50 C300 150, 600 -50, 1200 60"
          stroke="#f4a5b5"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* SECTION 2 */}

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt=""
            className="w-[420px] h-[420px] object-cover rounded-full shadow-xl"
          />

          <div className="absolute left-10 top-10 w-24 h-24 bg-red-300 rotate-12"></div>

          <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-300 rotate-12"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-light leading-tight">

            <span className="highlight-green">
              See
            </span>

            how we can
            <br />
            help you progress
          </h2>

          <p className="text-gray-600 mt-8 max-w-md">
            We add a layer of fearless
            insights and action that
            allows change makers to
            accelerate their progress
            in areas such as brand,
            design, digital, comms and
            social research.
          </p>

          <button className="mt-8 border-b border-black pb-1">
            Read More →
          </button>
        </motion.div>

      </div>

      {/* BOTTOM CURVE */}

      <svg
        className="w-full mt-24"
        height="120"
        viewBox="0 0 1200 120"
        fill="none"
      >
        <path
          d="M0 50 C300 -50, 800 150, 1200 40"
          stroke="#f4a5b5"
          strokeWidth="3"
          fill="none"
        />
      </svg>

    </section>
  );
}

export default About;