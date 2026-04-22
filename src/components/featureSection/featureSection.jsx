import { Wallet, TrendingUp, Zap, ShieldCheck } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      title: "Funded Account",
      description: "Start trading with up to $100,000 in funding with our evaluation program.",
      icon: <Wallet className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Cashback Rewards",
      description: "Earn up to 15% cashback on every trade you make across all markets.",
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Fast Execution",
      description: "Lightning-fast order execution with average speeds under 10ms.",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Regulated Broker",
      description: "Fully regulated by top-tier financial authorities worldwide.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
  ];

  return (
    /* Mantido o bg-gray-100. Ajustado o padding vertical para mobile (py-16) */
    <section className="w-full bg-gray-100 py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-28">
        
        {/* CABEÇALHO DA SEÇÃO: Reduzi o mb no mobile para não distanciar muito do conteúdo */}
        <div className="text-center mb-16 md:mb-28">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4 md:mb-7 tracking-tight">
            Why Traders Choose Us
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Discover the advantages that set us apart in the trading industry.
          </p>
        </div>

        {/* GRID DE CARDS: Ajustado para 1 coluna no mobile e 2 no tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start"
            >
              {/* ÍCONE: Mantido o azul original */}
              <div className={`p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* CONTEÚDO */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}