import commerce from '../assets/img/commerce.avif';
import school from '../assets/img/school.avif';
import blog from '../assets/img/blog.avif';
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
export default function Projects() {
  return (
    <section
      className="container"
      id="projects"
     
    >
  <h2>Projects</h2>

  <motion.div className="columns" variants={parent} initial='hidden' whileInView="visible"
  viewport={{ once: true }}>

    <motion.div className="card project-card" variants={child}>
      
      <h3>
        
          E-commerce
        
      </h3>
      <img src={commerce} alt='man-in-sweater' className='img'
      sizes='(max-width: 768px) 100vw, 361px'/>
      <p>A responsive e-commerce platform that enables users to browse products,
         manage their cart, and enjoy a smooth online shopping experience."</p>
      <a className='button .project-demo-btn' href="https://e-commerce-website-sepia-five.vercel.app/"  target="_blank"
  rel="noopener noreferrer">
    View Demo
    </a>
    </motion.div>

    <motion.div className="card project-card" variants={child}>
      <h3>
      
          Blog Project
  
      </h3>
       <img src={blog} alt='beach' className='img'
      sizes='(max-width: 768px) 100vw, 361px'/>
      <p>Travel Blog Website — Built with Django and Python,
         allowing users to explore destinations and read travel articles through a responsive web experience.</p>
       <a className='button' href="https://my-django-project-ynus.onrender.com/"  target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
    </motion.div>

    <motion.div className="card project-card" variants={child}>
    
      <h3>
        
          Django Backend
       
      </h3>
       <img src={school} alt='teacher' className='img'
      sizes='(max-width: 768px) 100vw, 361px'/>
      <p>Developed a full-stack student grading management system using React and Django,
         enabling teachers to create, view, update, and delete student records and grades through a secure and efficient interface.</p>
    <a className='button' href="https://my-django-project-ynus.onrender.com/accounts/login/"  target="_blank" rel="noopener noreferrer">
    View Demo
    </a>
    </motion.div>

  </motion.div>
</section>
    )
}