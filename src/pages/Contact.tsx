import { motion } from 'framer-motion';

const textVariant = {
  hidden: { y: -25, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
};

function Contact() {
  return (
    <div className="pt-16 flex flex-col items-center">
      <div>
        <motion.h2 
          variants={textVariant} 
          initial="hidden" 
          animate="visible"
          className="cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => window.location.href = "mailto:kis.benjamin05@gmail.com"}
        >
          kis.benjamin05@gmail.com
        </motion.h2>
      </div>
      
      <div className="mt-6">
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <a 
            href="mailto:kis.benjamin05@gmail.com" 
            className="text-xl hover:text-blue-500 transition-colors"
          >
            Send me an email
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;