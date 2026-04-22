import { ShieldCheck, Percent, Headphones, Award, Lock, BarChart3 } from "lucide-react";

export default function DetailedFeatures() {
  const details = [
    {
      title: "Regulated Broker",
      description: "Licensed by FCA, ASIC, and CySEC for your protection.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Tight Spreads",
      description: "Competitive spreads starting from 0.0 pips on major pairs.",
      icon: <Percent className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "24/5 Support",
      description: "Expert multilingual support available around the clock.",
      icon: <Headphones className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Award Winning",
      description: "Recognized industry leader with multiple trading awards.",
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Secure Trading",
      description: "Bank-grade security with segregated client funds.",
      icon: <Lock className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Advanced Tools",
      description: "Professional trading platforms and analytical tools.",
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    /* Mantido bg-gray-100. Ajustado o padding vertical para mobile */
    <section className="w-full bg-gray-100 py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-28">
        
        {/* HEADER: Ajustado para consistência com as outras seções */}
        <div className="text-center mb-16 md:mb-28">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-5 md:mb-7 tracking-tight">
            Why Choose TradePro
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Join thousands of traders who trust us with their investments
          </p>
        </div>

        {/* GRID: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-10 md:gap-y-16">
          {details.map((item, index) => (
            <div key={index} className="flex items-start gap-5 group">
              
              {/* ÍCONE COM FUNDO SUAVE: Mantido o azul original */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:rotate-3 transition-transform">
                  {item.icon}
                </div>
              </div>

              {/* TEXTO */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}