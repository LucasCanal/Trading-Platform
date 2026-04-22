import { LineChart, Bitcoin, Gem, Activity } from "lucide-react";

export default function MarketsSection() {
  const markets = [
    {
      title: "Forex",
      description: "Trade 60+ currency pairs with tight spreads from 0.0 pips.",
      linkText: "Explore Forex",
      icon: <LineChart className="w-6 h-6 text-gray-600" />,
    },
    {
      title: "Cryptocurrency",
      description: "Access Bitcoin, Ethereum, and 50+ digital assets 24/7.",
      linkText: "Explore Crypto",
      icon: <Bitcoin className="w-6 h-6 text-gray-600" />,
    },
    {
      title: "Precious Metals",
      description: "Diversify with Gold, Silver, Platinum, and Palladium.",
      linkText: "Explore Metals",
      icon: <Gem className="w-6 h-6 text-gray-600" />,
    },
    {
      title: "Indices",
      description: "Trade global stock indices including S&P 500, NASDAQ, FTSE.",
      linkText: "Explore Indices",
      icon: <Activity className="w-6 h-6 text-gray-600" />,
    },
  ];

  return (
    /* Mantido bg-white. Ajustado py para mobile (py-16) */
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-28">
        
        {/* CABEÇALHO: Tipografia responsiva */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-5 md:mb-7 tracking-tight">
            Markets at Your Fingertips
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Access global markets with institutional-grade execution and competitive pricing.
          </p>
        </div>

        {/* GRID DE MERCADOS: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {markets.map((market, index) => (
            <div 
              key={index}
              className="group p-8 md:p-10 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start"
            >
              {/* ÍCONE ESTILIZADO: Transição para azul suave no hover */}
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform">
                  {market.icon}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">
                {market.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-lg">
                {market.description}
              </p>

              {/* LINK ESTILO APPLE: Aumentado o hit-target no mobile */}
              <a 
                href="#" 
                className="mt-auto flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all py-2"
              >
                {market.linkText} 
                <span className="text-xl">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}