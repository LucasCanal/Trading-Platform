import heroImage from "../../assets/hero-finance.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-100 overflow-hidden pb-16 pt-10 md:pt-0">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-12 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* BLOCO DE TEXTO */}
        <div className="flex-shrink-0 w-full lg:max-w-[650px] text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-gray-900 leading-[1.1] tracking-tight font-medium">
            Trade with Confidence
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-2xl text-gray-500 leading-relaxed max-w-[550px]">
            Experience next-generation trading with institutional-grade technology,
            competitive spreads, and lightning-fast execution.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 lg:gap-8 w-full sm:w-auto">
            <button
              onClick={() => navigate("/login")}
              className="w-full sm:w-auto bg-[#1a73e8] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all active:scale-95">
              Start Trading
            </button>
            <button className="text-[#1a73e8] font-semibold text-lg hover:gap-3 flex items-center gap-2 transition-all">
              Learn More <span className="text-2xl">→</span>
            </button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
            <p className="text-gray-600 text-sm md:text-base">
              <span className="font-bold text-gray-900">4.8</span> out of 5 based on <strong>12,847</strong> reviews
            </p>
          </div>
        </div>

        {/* IMAGEM E EFEITOS — Adicionado hidden lg:block */}
        <div className="hidden lg:block relative flex-1 w-full mt-12 lg:mt-0 h-[300px] md:h-[500px] lg:h-[650px]">
          <img
            src={heroImage}
            alt="Trading"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[30%] w-12 h-12 md:w-16 md:h-16 bg-[#add8e6] opacity-60 rounded-full shadow-inner"></div>
          <div className="absolute top-0 right-0 translate-x-[30%] translate-y-[-30%] w-12 h-12 md:w-16 md:h-16 bg-[#add8e6] opacity-50 rounded-full shadow-inner"></div>
        </div>

      </div>
    </section>
  );
}