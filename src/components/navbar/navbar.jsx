import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#0f0f0f] text-white sticky top-0 z-50">

      <div className="w-full flex items-center justify-between px-28 py-4">

        {/* Logo */}
        <div className="font-bold text-lg tracking-tight">
          Trade<span className="text-blue-500">Pro</span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-16 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Markets</a>
          <a href="#" className="hover:text-white transition">Platforms</a>
          <a href="#" className="hover:text-white transition">Accounts</a>
          <a href="#" className="hover:text-white transition">Promotions</a>
          <a href="#" className="hover:text-white transition">About Us</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-300 hover:text-white text-sm transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/createAccount")}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition">
            Create Account
          </button>
        </div>

      </div>

    </header>
  );
}