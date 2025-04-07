import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Login to AGER</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded-md px-4 py-2 mb-4 w-full max-w-sm outline-green-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded-md px-4 py-2 mb-2 w-full max-w-sm outline-green-500"
      />

      {error && (
        <p className="text-red-500 text-sm mt-1 mb-3 transition-all duration-300">
          {error}
        </p>
      )}

      <div className="flex justify-between items-center w-full max-w-sm mb-4 text-sm text-gray-600">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember me
        </label>
        <a href="#" className="text-green-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        onClick={handleLogin}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200 ease-in-out hover:scale-105 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {loading && (
        <div className="mt-4">
          <div className="w-6 h-6 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default LoginScreen;
