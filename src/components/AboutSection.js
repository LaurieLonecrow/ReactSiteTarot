import Button from "./Button";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-detail">
        <h1>How to use this site...</h1>
        <h3>Looking for answers?</h3>
        <p>Click below for a quick overview of how Tarot Readings work.</p>
        <Button color={"#40bf4f"} text={"Read More"} />
      </div>
    </section>
  );
};

export default About;
