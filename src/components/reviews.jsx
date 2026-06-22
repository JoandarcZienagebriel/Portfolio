import { useState } from "react";

export default function Reviews(){
  const[review,setReview]= useState('');
  return(


<section id="reviews" className="reviews-section container">

  <h2>What People Say</h2>

  
  <div className="reviews-feed">

   

    <div className="review-item">
      <p className="review-text">
        “Clean structure, smooth interactions, and great responsiveness.”
      </p>
      <span className="review-meta">Daniel T · Frontend Developer</span>
    </div>

   

  </div>


  <div className="review-input-bar">

    <input type="text" placeholder="Write a review..." alt="write a review" onChange={(e)=>setReview(e.target.value)} value={review}/>
    <a className="button">Send</a>

  </div>

</section>
  )}