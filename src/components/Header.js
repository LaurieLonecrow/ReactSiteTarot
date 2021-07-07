import Button from "./Button";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h2> Tarot Readings </h2> <h4>A site for reading your future</h4>
        </div>
        <ul>
          <a href="#about">
            <li>How to</li>
          </a>
          <a href="#ten-card">
            <li> Ten Card Spread </li>
          </a>
          <a href="past-present-future">
            <li> Past Present Future </li>
          </a>
        </ul>
        <Button color={"#40bf4f"} text={"Read my Cards"} />
      </nav>
    </header>
  );
};

export default Header;
