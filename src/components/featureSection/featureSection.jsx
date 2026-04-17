import { Wallet, TrendingUp, Zap, ShieldCheck } from "lucide-react"; // Usando lucide-react para os ícones

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
    <section className="w-full bg-gray-100 py-24">
      <div className="max-w-[1600px] mx-auto px-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-28">
          <h2 className="text-5xl font-medium text-gray-900 mb-7">
            Why Traders Choose Us
          </h2>
          <p className="text-gray-500 text-lg max-w-4xl mx-auto">
            Discover the advantages that set us apart in the trading industry.
          </p>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start"
            >
              {/* ÍCONE */}
              <div className={`p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* CONTEÚDO */}
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}