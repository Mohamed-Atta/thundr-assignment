import logo from "../../logo.png";
import './Header.css';

const Header = () => {
  return (
    <div className="app-header">
      <img src={logo} className="app-logo" alt="nasdaq logo" />
      <h1 className="app-dev-name">Mohamed Atta</h1>
    </div>
  );
};

export default Header;
