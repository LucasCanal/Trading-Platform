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
    <section className="w-full bg-white py-24">
      <div className="max-w-[1600px] mx-auto px-10">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-medium text-gray-900 mb-7">
            Markets at Your Fingertips
          </h2>
          <p className="text-gray-500 text-lg max-w-4xl mx-auto">
            Access global markets with institutional-grade execution and competitive pricing.
          </p>
        </div>

        {/* GRID DE MERCADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {markets.map((market, index) => (
            <div 
              key={index}
              className="group p-10 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start"
            >
              {/* ÍCONE ESTILIZADO (QUADRADO COM BORDAS ARREDONDADAS) */}
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-blue-50 transition-colors">
                {market.icon}
              </div>

              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                {market.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                {market.description}
              </p>

              {/* LINK ESTILO APPLE */}
              <a 
                href="#" 
                className="mt-auto flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
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