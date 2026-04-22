import { useState } from "react";
import { Check } from "lucide-react";

export default function AccountTypes() {
  const [selectedAccount, setSelectedAccount] = useState(1);

  const accounts = [
    {
      name: "Standard",
      spreads: "1.0 pips",
      leverage: "1:500",
      commission: "No Commission",
      features: [
        "Perfect for beginners",
        "No minimum deposit",
        "All trading instruments",
        "Free educational resources",
      ],
      buttonText: "Read More",
    },
    {
      name: "ECN",
      spreads: "0.0 pips",
      leverage: "1:400",
      commission: "$3.50 per lot",
      features: [
        "Direct market access",
        "Raw spreads from 0.0 pips",
        "Institutional liquidity",
        "Advanced traders",
      ],
      buttonText: "Read More",
      badge: "Most Popular",
    },
    {
      name: "Pro",
      spreads: "0.5 pips",
      leverage: "1:200",
      commission: "$1.75 per lot",
      features: [
        "Professional tools",
        "Priority support",
        "VIP treatment",
        "Exclusive market insights",
      ],
      buttonText: "Read More",
    },
  ];

  return (
    /* Mantido bg-gray-50/50. Ajustado py para mobile */
    <section className="w-full bg-gray-50/50 py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-28">
        
        {/* HEADER: Responsivo */}
        <div className="text-center mb-16 md:mb-28">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4 md:mb-6 tracking-tight">
            Choose Your Account Type
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Select the perfect account that matches your trading style and experience
          </p>
        </div>

        {/* GRID DE CARDS: Ajustado gap e comportamento de escala */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 items-stretch">
          {accounts.map((acc, index) => {
            const isSelected = selectedAccount === index;

            return (
              <div 
                key={index}
                onClick={() => setSelectedAccount(index)} 
                className={`relative flex flex-col p-8 rounded-[32px] transition-all duration-500 cursor-pointer ${
                  isSelected 
                  ? "bg-white border-2 border-blue-500 shadow-2xl md:scale-105 z-10" 
                  : "bg-white border border-gray-100 shadow-sm hover:border-blue-200"
                }`}
              >
              
                {acc.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg transition-colors z-20 ${
                    isSelected ? "bg-blue-500 text-white" : "bg-gray-400 text-white"
                  }`}>
                    {acc.badge}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-xl md:text-2xl font-bold mb-6 transition-colors ${isSelected ? "text-blue-600" : "text-gray-900"}`}>
                    {acc.name}
                  </h3>
                  
                  {/* ÁREA DE SPREADS */}
                  <div className={`rounded-2xl p-6 mb-6 transition-colors ${isSelected ? "bg-blue-50" : "bg-gray-50"}`}>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Spreads from</p>
                    <p className={`text-2xl md:text-3xl font-black ${isSelected ? "text-blue-700" : "text-gray-900"}`}>
                      {acc.spreads}
                    </p>
                  </div>

                  {/* INFO ADICIONAL */}
                  <div className="flex justify-between text-left border-b border-gray-100 pb-6 mb-6">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Leverage</p>
                      <p className="text-sm md:text-base font-bold text-gray-700">{acc.leverage}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Commission</p>
                      <p className="text-sm md:text-base font-bold text-gray-700">{acc.commission}</p>
                    </div>
                  </div>
                </div>

                {/* LISTA DE FEATURES */}
                <ul className="space-y-4 mb-10 flex-grow">
                  {acc.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-600">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${isSelected ? "bg-blue-500" : "bg-blue-50"}`}>
                        <Check className={`w-3 h-3 ${isSelected ? "text-white" : "text-blue-500"}`} strokeWidth={4} />
                      </div>
                      <span className="text-sm md:text-base font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-xl font-bold text-sm md:text-base transition-all active:scale-95 ${
                    isSelected 
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-200" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {acc.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}