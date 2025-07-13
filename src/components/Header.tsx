import "./Header.css";
import logo from "../assets/blott_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Blott Logo" className="logo-image" />
      </div>
    </header>
  );
};

export default Header;
