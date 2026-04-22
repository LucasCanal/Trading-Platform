export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Trading",
      links: ["Forex Trading", "Cryptocurrency", "Commodities", "Indices", "Stocks", "CFDs"],
    },
    {
      title: "Accounts",
      links: ["Account Types", "Demo Account", "Live Account", "Islamic Account", "Managed Accounts"],
    },
    {
      title: "Legal",
      links: ["Terms & Conditions", "Privacy Policy", "Risk Disclosure", "Complaints Procedure", "Client Agreement"],
    },
    {
      title: "About Us",
      links: ["Company Info", "Contact Us", "Careers", "News & Analysis", "Educational Resources"],
    },
  ];

  return (
    /* CORREÇÃO: Removido 'mt-20' que causava a linha branca. 
       Mantido o bg-[#0a0a0a] e as fontes originais. */
    <footer className="w-full bg-[#0a0a0a] text-gray-400 pt-20 pb-10 m-0">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-28">
        
        {/* GRID DE LINKS: Ajustado para ser responsivo */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
             <div className="w-10 h-10 bg-[#2952e3] rounded-xl flex items-center justify-center font-semibold text-white text-xl shadow-inner">
              T
            </div>
                <h2 className="text-white text-2xl font-bold">TradePro</h2>
             </div>
             <p className="text-sm leading-relaxed text-gray-500">
               Next-generation trading platform for modern investors.
             </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="col-span-1">
              {/* Mantido font-semibold original */}
              <h3 className="text-white font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <a href="#" className="hover:text-white transition-colors text-sm font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* RISCO ÚNICO E CONSOLIDADO */}
        <div className="pt-10 border-t border-gray-800/50 text-[11px] leading-relaxed text-gray-500">
          <p className="text-justify md:text-left">
            <span className="font-bold text-gray-400 uppercase tracking-widest">Risk Warning:</span> TradePro is a regulated broker by FCA, ASIC, and CySEC. Trading foreign exchange and CFDs involves significant risk and may not be suitable for all investors. The possibility exists that you could sustain a loss of some or all of your initial investment; therefore, you should not invest money that you cannot afford to lose. Please ensure you fully understand the risks involved before trading.
          </p>
          
          <div className="mt-10 pt-8 border-t border-gray-800/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© {currentYear} TradePro. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-gray-400 transition-colors">Cookies Policy</a>
               <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}