import a_girl_coding from '../assets/img/a_girl_coding.png';

export default function Hero(){
    return(
        <section class="hero" id="home">

  <div class="hero-text">
    <h1 id="header">
     Frontend Developer (React / JavaScript)
    </h1>

    <p id="about_me">
      Hi! I'm Joandarc. I build responsive, user-focused web applications using React and modern JavaScript.
    </p>

    <a href="#contact" class="button">
      Get in touch
    </a>
  </div>

  <div class="hero-image">
    <img
      id="img"
      src={a_girl_coding}
      alt="a girl coding"
      loading="lazy"
      decoding="async"
      fill
      sizes='(max-width: 768px) 100vw, 361px'
    />
  </div>

</section>
    )
}