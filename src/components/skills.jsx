import { motion } from 'motion/react';


const parent={
 hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
 
}
}
const child={
   hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Skills(){
    return(
        <section className="container" id="skills" >

  <h2 id="service_header">Core Skills</h2>

  <motion.div className="columns_skill trigger" variants={parent} initial='hidden' whileInView="visible"
    viewport={{ once: true }}>

    <motion.div className="card skills" variants={child}>
      <h3>Responsive Interfaces</h3>
      <p>
       Fast, adaptive layouts optimized for mobile, tablet, and desktop experiences.
      </p>
    </motion.div>

    <motion.div className="card skills" variants={child}>
      <h3>React Frontend Development</h3>
      <p>
       Scalable React applications with clean architecture and reusable components.

      </p>
    </motion.div>

    <motion.div className="card skills" variants={child}>
      <h3>API Integration</h3>
      <p>
      Secure and efficient integration with REST APIs and third-party services.
      </p>
    </motion.div>

    <motion.div className="card skills" variants={child}>
      <h3>UI/UX Focus</h3>
      <p>
       Minimal, intuitive interfaces designed for clarity, usability, and engagement.
      </p>
    </motion.div>

  </motion.div>

</section>
    )
}