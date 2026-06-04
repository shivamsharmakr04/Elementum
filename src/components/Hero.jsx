import { motion } from "framer-motion";

const people = [
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/men/13.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
  "https://randomuser.me/api/portraits/men/16.jpg",
];

function Hero() {
  return (
    <section
  id="home"
  className="section min-h-screen px-6 py-20"
>
    

      <motion.div
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
      >

        <div className="text-center">

          <h1 className="text-5xl md:text-8xl leading-tight font-light">

            The thinkers and
            <br />

            doers were changing

            <br />

            the
            <span className="highlight-green">
              status
            </span>

            Quo with

            <span className="highlight-pink">
              change
            </span>

          </h1>

          <p className="max-w-2xl mx-auto mt-10 text-gray-500">
            We are a team of strategists,
            designers, communicators,
            researchers. Together, we
            believe that progress only
            happens when you refuse
            to play things safe.
          </p>

        </div>

        <div className="flex justify-center flex-wrap gap-8 mt-20">

          {people.map((img,index)=>(
            <motion.img
              key={index}
              src={img}
              alt=""
              whileHover={{
                scale:1.1
              }}
              className="w-28 h-28 rounded-full object-cover shadow-lg"
            />
          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;