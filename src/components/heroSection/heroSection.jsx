import heroImage from "../../assets/hero-finance.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    // Adicionei 'mb-20' para empurrar o que vier abaixo
    <section className="w-full bg-gray-100 overflow-hidden mb-16">
      {/* Container expandido para 1600px para ocupar melhor a tela */}
      <div className="max-w-[1600px] mx-auto px-10 py-20 lg:py-32 flex items-center justify-between gap-16">

        {/* BLOCO DE TEXTO: Agora mais largo (650px) para o texto não ficar espremido */}
        <div className="flex-shrink-0 w-full max-w-[650px]">
          <h1 className="text-5xl lg:text-7xl text-gray-900 leading-[1.1] tracking-tight">
            Trade with Confidence
          </h1>

          <p className="mt-8 text-lg lg:text-2xl text-gray-500 leading-relaxed max-w-[550px]">
            Experience next-generation trading with institutional-grade technology,
            competitive spreads, and lightning-fast execution.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <button
              onClick={() => navigate("/login")}
              className="bg-[#1a73e8] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all active:scale-95">
              Start Trading
            </button>
            <button className="text-[#1a73e8] font-semibold text-lg hover:gap-3 flex items-center gap-2 transition-all">
              Learn More <span className="text-2xl">→</span>
            </button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex text-yellow-400 text-xl">
              ★★★★★
            </div>
            <p className="text-gray-600">
              <span className="font-bold text-gray-900">4.8</span> out of 5 based on <strong>12,847</strong> reviews
            </p>
          </div>
        </div>

        {/* IMAGEM: Aumentada para 650px de altura para dar impacto */}
        <div className="relative flex-1 hidden md:block h-[650px] overflow-visible">
          <img
            src={heroImage}
            alt="Trading"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />

          {/* Efeitos de Glow e Círculos da Referência 1 */}
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-[100px] -z-10"></div>

          {/* Bolinha inferior esquerda */}
          <div className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%] w-16 h-16 bg-[#add8e6] opacity-60 rounded-full shadow-inner"></div>

          {/* Bolinha superior direita */}
          <div className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] w-16 h-16 bg-[#add8e6] opacity-50 rounded-full shadow-inner"></div>
        </div>

      </div>
    </section>
  );
}