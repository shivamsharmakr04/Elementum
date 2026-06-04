import { motion } from "framer-motion";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    alert("Successfully subscribed!");
    setEmail("");
  };

  return (
            <section
  id="newsletter"
  className="py-32 px-6"
>

      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-light mb-10"
        >
          Subscribe to
          <br />
          our newsletter
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 px-6 py-4 rounded-full w-full md:w-[450px] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition"
          >
            Subscribe
          </button>
        </motion.form>

      </div>

    </section>
  );
}

export default Newsletter;