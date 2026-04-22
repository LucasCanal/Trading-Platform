import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Importe ícones de sua preferência (ex: lucide-react ou react-icons)
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0f0f0f] text-white sticky top-0 z-50 border-b border-white/5">
      {/* Ajuste de Padding: 
          Mobile: px-6 | Tablet: px-12 | Desktop: px-28 (seu padrão)
      */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-28 py-4">

        {/* Logo */}
        <div 
          className="font-bold text-lg tracking-tight cursor-pointer"
          onClick={() => navigate("/")}
        >
          Trade<span className="text-blue-500">Pro</span>
        </div>

        {/* Links Desktop - Ocultos no Mobile */}
        <nav className="hidden lg:flex gap-12 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Markets</a>
          <a href="#" className="hover:text-white transition-colors">Platforms</a>
          <a href="#" className="hover:text-white transition-colors">Accounts</a>
          <a href="#" className="hover:text-white transition-colors">Promotions</a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
        </nav>

        {/* Actions Desktop - Ocultos ou adaptados no Mobile */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-300 hover:text-white text-sm transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/createAccount")}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition active:scale-95">
            Create Account
          </button>
        </div>

        {/* Botão Hambúrguer - Visível apenas no Mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile - Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f] w-full border-t border-white/5 flex flex-col p-6 gap-6">
          <nav className="flex flex-col gap-4 text-sm text-gray-300">
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white">Markets</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white">Platforms</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white">Accounts</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white">Promotions</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white">About Us</a>
          </nav>
          
          <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
            <button
              onClick={() => { navigate("/login"); setIsOpen(false); }}
              className="text-gray-300 text-left text-sm"
            >
              Login
            </button>
            <button
              onClick={() => { navigate("/createAccount"); setIsOpen(false); }}
              className="bg-blue-500 w-full py-3 rounded-md text-sm font-medium"
            >
              Create Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}