import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from "../assets/images/motivol2.png";

function Projects() {
    const handleCardClick = () => {
        window.open("https://www.linkedin.com/posts/kis-benj%C3%A1min-tibor-046760354_motivo-activity-7307114517451182080-fBJC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhjejYBnKOP2xrQojfFSjg-Py0imUKoOa8", "_blank");
      };

      const containerVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 1, 
            ease: "easeInOut" 
          } 
        }
      };
  return (
    <div>
      <div>
        <motion.h1
          className="text-2xl font-bold mb-6 text-center"
          style={{ 
            overflow: "hidden",
             whiteSpace: "nowrap",
             margin: "auto",
             marginBottom:"25px"
            }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
        Projects
        </motion.h1>
        
        <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
        >
        <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            {/* <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <h2
              style={{
                margin: "auto",
                marginBottom: "-12px",
              }}
              >Motivo</h2>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <p
              style={{
                margin: "auto",
                marginBottom: "-10px",
              }}
              >How</p>
            </CardItem> */}
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img
                src={Image}
                width="30%"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        </div>
        </motion.div>
        <motion.p variants={containerVariant} initial="hidden" animate="visible"
         className="copyright">More projects incoming</motion.p>
        
        
      </div>
    </div>
  );
}

export default Projects;
