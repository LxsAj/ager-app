import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen animate-fade-in">
      <img src={logo} alt="AGER Logo" className="splash-logo" />
      <h1 className="splash-title">AGER</h1>
      <p className="splash-subtitle">Loading AGER...</p>
    </div>
  );
}

export default LoadingScreen;



