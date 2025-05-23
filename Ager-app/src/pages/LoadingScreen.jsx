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
    <div className="h-screen w-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center flex-col text-center animate-fade-in">
      <img
        src="/logo.png"
        alt="App Logo"
        className="w-24 md:w-32 mb-4 animate-bounce"
      />
      <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide mb-2">
        MyApp
      </h1>
      <p className="text-white text-sm md:text-base opacity-80">
        Getting things ready...
      </p>
    </div>
  );
}

export default LoadingScreen;



