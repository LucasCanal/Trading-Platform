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
    <section className="w-full py-24">
      <div className="max-w-[1600px] mx-auto px-10">

        <div className="relative w-full flex flex-col lg:flex-row items-center gap-20 lg:px-10">
          
          {/* LADO ESQUERDO: CARTÃO AUMENTADO */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            {/* Aumentei o max-w para 550px para dar mais destaque */}
            <div className="relative z-10 w-full max-w-[550px] transition-all duration-500 hover:scale-105 hover:rotate-1">
              <img
                src={cartaoTrade}
                alt="TradePro Card"
                className="w-full h-auto drop-shadow-[0_35px_70px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>

          {/* LADO DIREITO: TEXTO E CONTEÚDO */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-6">
              Earn with Our <br />
              <span className="text-blue-600">Affiliate Program</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Join our lucrative affiliate program and earn up to $1,200 per referred client.
              No hidden fees, transparent tracking, and payments you can count on.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <button 
            onClick={() => navigate("/createAccount")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-blue-200 active:scale-95">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}