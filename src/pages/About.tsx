import { motion } from "framer-motion";

const textVariant = {
  hidden: { y: 25, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

function About() {
  return (
    <div>
      <div>
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          About Me
        </motion.h1>
      </div>

      <div>
        <motion.p variants={textVariant} initial="hidden" animate="visible">
          <span className="text-blue-500 text-xl" style={{color: "#626ef6"}}>
            <i className="fas fa-graduation-cap"></i>
          </span>
          Computer Science student.
        </motion.p>
        <motion.p variants={textVariant} initial="hidden" animate="visible">
          <span className="text-purple-500 text-xl" style={{color: "#626ef6"}}>
            <i className="fas fa-laptop-code"></i>
          </span>
          Passionate about programming and technology.
        </motion.p>
        <motion.p variants={textVariant} initial="hidden" animate="visible">
          <span className="text-green-500 text-xl" style={{color: "#626ef6"}}>
            <i className="fas fa-chart-line"></i>
          </span>
          Trying to get better every day.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
