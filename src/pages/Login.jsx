import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("🟢 Already logged in:", user.email);
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login successful, redirecting...");
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed: " + error.message);
      console.error("❌ Firebase error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded bg-slate-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded bg-slate-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
