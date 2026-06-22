import { useState } from 'react';
import { Cursor } from "motion-plus/react";
import Nav from './components/nav';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/Footer';


export default function App(){
 
  return(
    <div>
 <Cursor>
    <div className="custom-cursor" />
 </Cursor>
<Nav/>

<Hero/>

<Projects/>

<Skills/>
<Contact/>

<Footer/>

</div>
  )
}