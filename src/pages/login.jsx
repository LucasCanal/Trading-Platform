import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, ChevronRight, CornerDownLeft } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Novo estado para a senha
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Chamada para a rota de login do seu backend Node.js
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Armazenamos o Token JWT e os dados do usuário para uso no Dashboard
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user));
        
        // Redireciona para o Dashboard após o sucesso
        navigate("/dashboard");
      } else {
        // Exibe mensagem de erro (Ex: "Credenciais inválidas")
        alert(data.message || "Erro ao realizar login");
      }
    } catch (err) {
      console.error("Erro na conexão:", err);
      alert("Erro ao conectar com o servidor. O backend está rodando?");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0e121e] text-white flex flex-col font-sans selection:bg-blue-500/30">

      {/* HEADER SUPERIOR */}
      <header className="w-full p-6 lg:px-12 lg:py-8 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#4e7bff] hover:text-blue-400 transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/createAccount")}
            className="bg-[#2952e3] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-blue-900/20">
            Create Account
          </button>
          <button className="bg-[#1c2230] text-gray-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/5 flex items-center gap-2 hover:bg-[#252c3d] hover:text-white transition-all">
            <HelpCircle size={18} />
            Help
          </button>
        </div>
      </header>

      {/* CONTEÚDO CENTRAL */}
      <main className="flex-grow flex items-center justify-center px-6 pb-20">
        <div className="bg-white text-[#1f2638] w-full max-w-[540px] p-8 lg:p-14 rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] flex flex-col items-center">

          {/* LOGO E TÍTULO */}
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#2952e3] rounded-xl flex items-center justify-center font-semibold text-white text-xl shadow-inner">
                T
              </div>
              <span className="text-2xl font-semibold tracking-tight text-[#0e121e]">TradePro</span>
            </div>
            <h1 className="text-4xl font-medium tracking-tight text-[#0e121e]">
              Welcome back!
            </h1>
          </div>

          {/* FORMULÁRIO */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-4">
              {/* CAMPO EMAIL */}
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#f4f7fb] border border-transparent p-5 rounded-2xl text-lg placeholder:text-gray-400 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                required
              />

              {/* CAMPO SENHA - ADICIONADO */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#f4f7fb] border border-transparent p-5 rounded-2xl text-lg placeholder:text-gray-400 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                required
              />

              <div className="flex items-center justify-between px-1">
                <a href="#" className="text-[#2952e3] font-semibold text-[15px] flex items-center gap-1 hover:underline underline-offset-4 transition-all">
                  Forgot password? <ChevronRight size={18} />
                </a>

                <div className="flex items-center gap-3">
                  <span className="text-[15px] font-semibold text-gray-700">Remember me</span>
                  <button
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-12 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${rememberMe ? "bg-[#2952e3]" : "bg-gray-200"
                      }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${rememberMe ? "translate-x-5" : "translate-x-0"
                      }`} />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <button
                type="submit"
                className="w-full bg-[#2952e3] text-white p-5 rounded-2xl text-lg font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-600 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <CornerDownLeft size={20} strokeWidth={3} />
                Login to TradePro
              </button>

              <button
                type="button"
                className="w-full bg-white text-[#1f2638] p-5 rounded-2xl text-lg font-semibold border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 active:scale-[0.98] transition-all"
              >
                Block access
              </button>
            </div>
          </form>

          <footer className="mt-10">
            <Link to="/createAccount" className="text-[#2952e3] font-semibold text-lg flex items-center gap-1 hover:underline underline-offset-4 transition-all">
              Not a client yet? <ChevronRight size={18} />
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}