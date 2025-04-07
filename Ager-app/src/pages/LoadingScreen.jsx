import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#00b257] to-[#7ed957]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="AGER Logo"
          className="w-32 h-32 mb-4 animate-bounce"
        />
        {/* App Name */}
        <h1 className="text-4xl font-extrabold text-white tracking-widest mb-2">AGER</h1>
        <p className="text-white text-lg font-semibold">Loading AGER...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;


