import { useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const handleRegister = () => {
    console.log("handleRegister");
  };

  const handleLogin = () => {
    console.log("handleLogin");
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo" onClick={handleNavigate}>
          ninhdkbooking
        </div>
        <div className="navItems">
          <div className="navButton" onClick={handleRegister}>
            Register
          </div>
          <div className="navButton" onClick={handleLogin}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
