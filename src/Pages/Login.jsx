import  { useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(" Please fill in all fields. ");
      return;
    }
    localStorage.setItem("password", "password123");
    localStorage.setItem("userEmail", email);
    navigate("/users");
  };

    const isPasswordValid = password.length >= 8;
 return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h3>

        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />

          <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (min 8 chars)"
            type="password"
          />

          <button
            type="submit"
            disabled={!isPasswordValid}
            className={`w-full py-2 rounded-lg text-white transition-colors ${
              isPasswordValid
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">Don't have an account?</p>
      </div>
    </div>
  );
}
