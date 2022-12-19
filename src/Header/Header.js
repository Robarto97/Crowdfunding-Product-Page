import logo from "../images/logo.svg";
const Header = () => {
  const handleMenu = () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".items").classList.toggle("show");
    document.querySelector(".layer").classList.toggle("show");
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="items">
          <li className="item">
            <a href="/">About</a>
          </li>
          <li className="item">
            <a href="/">Discover</a>
          </li>
          <li className="item">
            <a href="/">Get Started</a>
          </li>
        </ul>
        <div onClick={handleMenu} className="hamburger"></div>
      </nav>
    </header>
  );
};

export default Header;
