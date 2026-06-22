import { useState } from "react";

export default function Nav(){
  const [menuOpen, setMenuOpen] = useState(false);
 
    return(
      <>
     {menuOpen && <div className="overlay" onClick={()=>setMenuOpen(false)}/>}
        
        <nav>
          <div className="nav-header">
          
  <a href="#" id="site_id">Joandarc Ziena</a>
<button className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
          ☰
        </button>
        </div>
        {(menuOpen || window.innerWidth >= 768)&& (
  <ul className="nav-items">
    <li><a href="#home">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
   
  </ul>)}
 
</nav>
</>
    )
}
