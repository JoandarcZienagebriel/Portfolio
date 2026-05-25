import { useState } from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/Footer';
import Reviews from './components/reviews';

export default function App(){
 
  return(
    <body>

<Nav/>

<Hero/>

<Projects/>

<Skills/>
<Contact/>
<Reviews/>
<Footer/>

</body>
  )
}