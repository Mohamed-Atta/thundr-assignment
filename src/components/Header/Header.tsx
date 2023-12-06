import logo from "../../logo.png";
import './Header.css';

const Header = () => {
  return (
    <div className="app-header">
      <img src={logo} className="app-logo" alt="nasdaq logo" />
    </div>
  );
};

export default Header;
