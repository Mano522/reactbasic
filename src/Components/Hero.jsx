function Hero({ title, description }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <button className="hero-button">Get Started</button>
    </section>
  );
}
export default Hero;