import commerce from '../assets/img/commerce.png';
import school from '../assets/img/school.png';
import blog from '../assets/img/blog.png';

export default function Projects() {
  return (
    <section
      className="container"
      id="projects"
     
    >
  <h2>Projects</h2>

  <div className="columns">

    <div className="card project-card">
      
      <h3>
        
          E-commerce
        
      </h3>
      <img src={commerce} alt='man-in-sweater'/>
      <a className='button .project-demo-btn' href="https://e-commerce-website-sepia-five.vercel.app/"  target="_blank"
  rel="noopener noreferrer">
    View Demo
    </a>
    </div>

    <div className="card project-card">
      <h3>
      
          Blog Project
  
      </h3>
       <img src={blog} alt='beach'/>
       <a className='button' href="https://my-django-project-ynus.onrender.com/"  target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
    </div>

    <div className="card project-card">
    
      <h3>
        
          Django Backend
       
      </h3>
       <img src={school} alt='teacher'/>
    <a className='button' href="https://my-django-project-ynus.onrender.com/accounts/login/"  target="_blank" rel="noopener noreferrer">
    View Demo
    </a>
    </div>

  </div>
</section>
    )
}