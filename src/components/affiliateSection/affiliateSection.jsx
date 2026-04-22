import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cartaoTrade from '../../assets/cartao-trade.png';

export default function AffiliateSection() {
  const benefits = [
    "Up to $1,200 per qualified referral",
    "Real-time tracking dashboard",
    "Weekly payments directly to your account",
    "Dedicated affiliate manager support",
  ];

  const navigate = useNavigate();

  return (
    /* Mantido bg-gray-100. 
       Ajuste: Adicionado 'block' e garantido que não existam margens externas (m-0).
       O padding pb-16/24 preenche o espaço com cinza até encostar no preto do Footer. */
    <section className="w-full bg-gray-100 pt-16 md:pt-24 pb-16 md:pb-24 block overflow-hidden m-0 border-none">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-28">

        <div className="relative w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LADO DA IMAGEM (CARTÃO) */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[550px] transition-all duration-500 hover:scale-105 hover:rotate-1">
              <img
                src={cartaoTrade}
                alt="TradePro Card"
                className="w-full h-auto drop-shadow-[0_35px_70px_rgba(0,0,0,0.15)]"
              />
              {/* Brilho de fundo ajustado para contrastar no cinza */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-200/20 blur-[100px] -z-10 rounded-full" />
            </div>
          </div>

          {/* LADO DO TEXTO */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            {/* Mantido font-medium conforme original */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-6 tracking-tight">
              Earn with Our <br className="hidden md:block" />
              <span className="text-blue-600">Affiliate Program</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join our lucrative affiliate program and earn up to $1,200 per referred client.
              No hidden fees, transparent tracking, and payments you can count on.
            </p>

            <ul className="space-y-4 mb-10 inline-block lg:block text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  {/* Mantido font-medium conforme original */}
                  <span className="font-medium text-sm md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button 
                onClick={() => navigate("/createAccount")}
                /* Mantido font-medium conforme original */
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-blue-200 active:scale-95"
              >
                Join Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}