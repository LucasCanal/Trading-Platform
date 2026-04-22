import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, ChevronRight, UserPlus } from "lucide-react";

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Conta criada com sucesso! 🚀");
        navigate("/login");
      } else {
        alert(data.message || "Erro ao criar conta");
      }
    } catch (err) {
      console.error("Erro na conexão:", err);
      alert("Não foi possível conectar ao servidor. Verifique se o backend está rodando!");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0e121e] text-white flex flex-col font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* HEADER SUPERIOR: Ajustado para não quebrar no mobile */}
      <header className="w-full p-4 md:p-6 lg:px-12 lg:py-8 flex items-center justify-between gap-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-[#4e7bff] hover:text-blue-400 transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">Back to Home</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/login">
            <button className="bg-[#1c2230] text-gray-300 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold border border-white/5 hover:bg-[#252c3d] hover:text-white transition-all active:scale-95 whitespace-nowrap">
              Sign In
            </button>
          </Link>
          <button className="bg-[#1c2230] text-gray-300 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold border border-white/5 flex items-center gap-2 hover:bg-[#252c3d] hover:text-white transition-all">
            <HelpCircle size={16} md:size={18} />
            <span className="hidden xs:block">Help</span>
          </button>
        </div>
      </header>

      {/* CONTEÚDO CENTRAL */}
      <main className="flex-grow flex items-center justify-center px-4 md:px-6 pb-12 md:pb-20 mt-2">
        <div className="bg-white text-[#1f2638] w-full max-w-[540px] p-6 md:p-10 lg:p-14 rounded-[32px] md:rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] flex flex-col items-center">
          
          {/* LOGO E TÍTULO */}
          <div className="mb-8 md:mb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-[#2952e3] rounded-xl flex items-center justify-center font-semibold text-white text-xl shadow-inner">
                T
              </div>
              <span className="text-xl md:text-2xl font-semibold tracking-tight text-[#0e121e]">TradePro</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0e121e]">
              Start Trading.
            </h1>
            <p className="mt-2 text-gray-500 font-medium text-sm md:text-base">Create your pro account today.</p>
          </div>

          {/* FORMULÁRIO */}
          <form onSubmit={handleSubmit} className="w-full space-y-5 md:space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full bg-[#f4f7fb] border border-transparent p-4 md:p-5 rounded-2xl text-base md:text-lg placeholder:text-gray-400 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                required
              />

              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#f4f7fb] border border-transparent p-4 md:p-5 rounded-2xl text-base md:text-lg placeholder:text-gray-400 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                required
              />

              <input
                type="password"
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-[#f4f7fb] border border-transparent p-4 md:p-5 rounded-2xl text-base md:text-lg placeholder:text-gray-400 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                required
              />

              <div className="px-2">
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed text-center md:text-left">
                  By creating an account, you agree to our <a href="#" className="text-[#2952e3] font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-[#2952e3] font-semibold hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2 md:pt-4">
              <button 
                type="submit"
                className="w-full bg-[#2952e3] text-white p-4 md:p-5 rounded-2xl text-base md:text-lg font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-600 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <UserPlus size={20} strokeWidth={3} />
                Create Account
              </button>
            </div>
          </form>

          <footer className="mt-8 md:mt-10">
            <Link to="/login" className="text-[#2952e3] font-semibold text-base md:text-lg flex items-center gap-1 hover:underline underline-offset-4 transition-all text-center">
              Already have an account? <ChevronRight size={18} />
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}