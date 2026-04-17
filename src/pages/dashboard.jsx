import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Wallet, ArrowLeftRight, History, Settings, LogOut,
  Bell, Search, Download, BarChart3, Globe, Contact2, MessageSquare,
  Menu, TrendingUp, TrendingDown, ChevronRight, Maximize2, Camera,
  MoreVertical, ChevronDown, Send
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- DADOS FAKE (movidos para cá como mock centralizado) ---
const lineChartData = [
  { name: 'Jan', eth: 8000, xrp: 5000 },
  { name: 'Feb', eth: 9500, xrp: 6500 },
  { name: 'Mar', eth: 9000, xrp: 7000 },
  { name: 'Apr', eth: 11000, xrp: 8500 },
  { name: 'May', eth: 10200, xrp: 8800 }, // FIX: "May" estava faltando
  { name: 'Jun', eth: 10500, xrp: 9000 },
  { name: 'Jul', eth: 12000, xrp: 10000 },
];

const contacts = [
  { name: "Thomas", handle: "@thomas", color: "bg-gray-700" },
  { name: "Olivia", handle: "@olivia", color: "bg-pink-400" },
  { name: "Karen",  handle: "@karen",  color: "bg-blue-400" },
  { name: "Eric",   handle: "@eric",   color: "bg-purple-400" },
  { name: "Harry",  handle: "@harry",  color: "bg-gray-500" },
  { name: "Amelia", handle: "@amelia", color: "bg-slate-600" },
];

const sellOrders = [
  { price: 82.3, amount: 0.15, total: "$134,12" },
  { price: 83.9, amount: 0.18, total: "$237,31", highlighted: "blue" },
  { price: 84.2, amount: 0.25, total: "$252,58" },
  { price: 86.2, amount: 0.35, total: "$126,26" },
  { price: 91.6, amount: 0.75, total: "$46,92" },
  { price: 92.6, amount: 0.21, total: "$123,27" },
  { price: 93.9, amount: 0.55, total: "$212,56" },
  { price: 94.2, amount: 0.18, total: "$129,26" },
];

const buyOrders = [
  { price: 86.2, amount: 0.35, total: "$126,26" },
  { price: 93.9, amount: 0.55, total: "$212,56" },
  { price: 84.2, amount: 0.25, total: "$252,58" },
  { price: 91.6, amount: 0.75, total: "$46,92",  highlighted: "amber" },
  { price: 83.9, amount: 0.18, total: "$237,31" },
  { price: 82.3, amount: 0.15, total: "$134,12" },
  { price: 92.6, amount: 0.21, total: "$123,27" },
  { price: 94.2, amount: 0.18, total: "$129,26" },
];

// FIX: todos os cards agora têm name, symbol e icon consistentes
const cryptoCards = [
  { name: "Blue Card",  symbol: "BLUE", price: "$65,123", change: "4% (30 days)", trend: "down", color: "bg-[#6094f8]", icon: "◈" },
  { name: "Zcash",      symbol: "ZEC",  price: "$65,123", change: "4% (30 days)", trend: "down", color: "bg-[#5e6682]", icon: "ⓩ" },
  { name: "Bitcoin",    symbol: "BTC",  price: "$65,123", change: "4% (30 days)", trend: "up",   color: "bg-[#f2ad43]", icon: "₿" },
  { name: "Ethereum",   symbol: "ETH",  price: "$65,123", change: "4% (30 days)", trend: "up",   color: "bg-[#a353c7]", icon: "Ξ" },
];

// FIX: helper para validar e formatar o valor de transferência
function formatTransferAmount(raw) {
  const numeric = raw.replace(/[^0-9,\.]/g, "");
  return numeric;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTabStat, setActiveTabStat]     = useState("Ethereum");
  const [userData, setUserData]               = useState({ fullName: "User", email: "" });
  const [isDateEnabled, setIsDateEnabled]     = useState(true);
  const [isValueEnabled, setIsValueEnabled]   = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [transferAmount, setTransferAmount]   = useState("8.621,22"); // FIX: valor coerente com o mock da tela

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    // FIX: redireciona para login se não houver sessão
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    if (storedUser) {
      try { setUserData(JSON.parse(storedUser)); } catch (e) { console.error(e); }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  // FIX: validação numérica no input de transferência
  const handleTransferChange = (e) => {
    setTransferAmount(formatTransferAmount(e.target.value));
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] text-[#1c2230] font-sans overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-72 bg-[#111625] text-white flex flex-col py-8 shadow-2xl z-30 flex-shrink-0">
        <div className="flex items-center gap-3 px-8 mb-12">
          <div className="w-10 h-10 bg-[#2952e3] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">T</div>
          <span className="text-xl font-bold tracking-tight text-white">TradePro</span>
        </div>
        <nav className="flex-grow px-4 space-y-1 overflow-y-auto">
          <p className="px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Main Menu</p>
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard"    active />
          <SidebarItem icon={<Wallet size={20} />}          label="My Wallet" />
          <SidebarItem icon={<History size={20} />}         label="Transactions" />
          <SidebarItem icon={<ArrowLeftRight size={20} />}  label="Trading" />
          <SidebarItem icon={<BarChart3 size={20} />}       label="Exchange" />
          <SidebarItem icon={<Globe size={20} />}           label="Market Capital" />
          <div className="pt-10">
            <p className="px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Others</p>
            <SidebarItem icon={<Contact2 size={20} />}     label="Contacts" />
            <SidebarItem icon={<MessageSquare size={20} />} label="Messages" />
            <SidebarItem icon={<Settings size={20} />}     label="Settings" />
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-6 py-4 mt-2 rounded-2xl transition-all text-gray-500 hover:text-red-400 hover:bg-red-500/10 group"
            >
              <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
              <span className="font-bold text-sm tracking-tight">Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-grow flex flex-col overflow-y-auto">

        {/* HEADER */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-20 flex-shrink-0">
          <div className="flex items-center gap-6">
            <Menu className="text-gray-400 cursor-pointer" size={24} />
            <h2 className="text-2xl font-black text-[#1c2230]">Dashboard</h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6 mr-4">
              <button className="bg-indigo-50 text-[#2952e3] px-5 py-2 rounded-2xl text-xs font-bold">Trade</button>
              <button className="text-gray-400 text-xs font-bold hover:text-[#1c2230]">Data</button>
              <button className="text-gray-400 text-xs font-bold hover:text-[#1c2230]">Docs</button>
              <button className="text-gray-400 text-xs font-bold hover:text-[#1c2230]">API</button>
            </div>
            <div className="flex items-center gap-6 border-l border-gray-100 pl-8">
              <Search className="text-gray-400 cursor-pointer" size={23} />
              <div className="relative cursor-pointer">
                <Bell className="text-gray-400" size={23} />
                <span className="absolute -top-2 -right-2 bg-[#facc15] text-[#1c2230] text-[10px] font-black flex items-center justify-center w-6 h-6 rounded-full border-2 border-white shadow-sm">6</span>
              </div>
            </div>
            <div className="flex items-center gap-4 border-l border-gray-100 pl-8">
              <div className="text-right">
                <p className="text-sm font-black text-[#1c2230]">{userData.fullName}</p>
                <p className="text-[10px] text-gray-400 font-semibold">{userData.email || "@user"}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 text-[#2952e3] rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm">
                <Contact2 size={26} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO */}
        <div className="p-10 space-y-8">

          {/* CARDS — FIX: nome e símbolo da crypto agora são exibidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoCards.map((card, i) => (
              <div
                key={i}
                className={`${card.color} rounded-[32px] p-6 text-white relative overflow-hidden shadow-lg h-44 flex flex-col justify-between group transition-transform hover:scale-[1.02]`}
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 80 Q 25 70, 50 80 T 100 80 V 100 H 0 Z" fill="white" />
                  </svg>
                </div>

                {/* Topo: badge de variação + ícone da crypto */}
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1 text-[10px] font-bold">
                    {card.trend === "up"
                      ? <TrendingUp  size={12} className="text-emerald-300" />
                      : <TrendingDown size={12} className="text-red-300" />}
                    <span>{card.change}</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold border border-white/20">
                    {card.icon}
                  </div>
                </div>

                {/* Rodapé: preço + nome/símbolo */}
                <div className="z-10">
                  <h4 className="text-3xl font-black tracking-tight">{card.price}</h4>
                  <p className="text-[11px] font-bold text-white/70 mt-1">{card.name} · {card.symbol}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CHARTS */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1c2230]">Crypto Statistics</h3>
                  <p className="text-[10px] text-gray-400 font-medium">Market performance analysis</p>
                </div>
                <div className="flex items-center gap-4">
                  <ToggleSwitch label="Date"  enabled={isDateEnabled}  onToggle={() => setIsDateEnabled(!isDateEnabled)} />
                  <ToggleSwitch label="Value" enabled={isValueEnabled} onToggle={() => setIsValueEnabled(!isValueEnabled)} />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
                {["Bitcoin", "Ripple", "Ethereum", "Zcash", "LiteCoin"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTabStat(tab)}
                    className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                      activeTabStat === tab ? "bg-[#eef2ff] text-[#2952e3]" : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f3f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#8f94a3' }} hide={!isDateEnabled} />
                    <Tooltip content={<CustomTooltipStat />} cursor={{ stroke: '#2952e3', strokeWidth: 1, strokeDasharray: '5 5' }} />
                    <Line type="monotone" dataKey="eth" stroke="#a353c7" strokeWidth={3} dot={isValueEnabled} activeDot={{ r: 6, strokeWidth: 0 }} />
                    <Line type="monotone" dataKey="xrp" stroke="#16c7a3" strokeWidth={3} dot={isValueEnabled} activeDot={{ r: 6, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1c2230]">Market Overview</h3>
                  <p className="text-[10px] text-gray-400 font-medium">Real-time market activity</p>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Camera   size={18} className="cursor-pointer hover:text-gray-600" />
                  <Maximize2 size={18} className="cursor-pointer hover:text-gray-600" />
                  <button className="flex items-center gap-1 text-[#2952e3] font-bold text-[10px] ml-2">
                    <Download size={14} /> Get Report
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-6">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#e7f9f5] text-[#16c7a3] text-[9px] font-black px-2 py-0.5 rounded-md">BUY</span>
                    <span className="text-sm font-bold">$5,673</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-[#fff1f1] text-[#ff5b5b] text-[9px] font-black px-2 py-0.5 rounded-md">SELL</span>
                    <span className="text-sm font-bold">$5,982</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400">
                  <span className="cursor-pointer hover:text-[#1c2230]">Week</span>
                  <span className="bg-[#eef2ff] text-[#2952e3] px-3 py-1.5 rounded-xl cursor-pointer">Month</span>
                  <span className="cursor-pointer hover:text-[#1c2230]">Year</span>
                </div>
              </div>

              {/* FIX: barras crescem da base corretamente */}
              <div className="h-[200px] flex items-end justify-between gap-2">
                {[40, 70, 45, 90, 65, 80, 50, 85, 60].map((h, i) => (
                  <div key={i} className="flex-grow flex flex-col items-center gap-1">
                    <div className="w-full flex items-end justify-center" style={{ height: '160px' }}>
                      <div
                        className={`w-3 rounded-sm transition-all ${i % 2 === 0 ? 'bg-[#16c7a3]' : 'bg-[#ff5b5b]'}`}
                        style={{ height: `${h}%` }}
                      />
                    </div>
                    <span className="text-[8px] text-gray-400 font-bold">3:20PM</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEÇÃO INFERIOR */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* QUICK TRANSFER */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1c2230]">Quick Transfer</h3>
                  <p className="text-[10px] text-gray-400 font-medium mt-0.5">Send funds instantly to your contacts</p>
                </div>
                <button className="flex items-center gap-2 bg-white text-[#1c2230] px-3 py-2 rounded-2xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#7c3aed]">
                    <span className="text-white text-sm">Ξ</span>
                  </span>
                  23,511 ETH
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
              </div>

              {/* CONTACTS */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#1c2230]">Recent Contacts</span>
                  <button className="text-xs font-bold text-[#2952e3] hover:underline">View More</button>
                </div>
                <div className="flex items-center gap-5 overflow-x-auto pb-1">
                  {contacts.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedContact(i)}
                      className="flex flex-col items-center gap-1.5 flex-shrink-0"
                    >
                      <div
                        className={`w-12 h-12 ${c.color} rounded-full flex items-center justify-center text-white font-bold text-sm border-2 transition-all ${
                          selectedContact === i
                            ? "border-[#2952e3] scale-110 shadow-lg shadow-blue-200"
                            : "border-transparent"
                        }`}
                      >
                        {c.name[0]}
                      </div>
                      <span className="text-[9px] font-bold text-[#1c2230]">{c.name}</span>
                      <span className="text-[8px] text-gray-400">{c.handle}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* AMOUNT — FIX: input com validação numérica */}
              <div className="flex flex-col items-center gap-2 py-4 border-t border-gray-50">
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Amount ETH</span>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    inputMode="decimal"
                    value={transferAmount}
                    onChange={handleTransferChange}
                    className="text-4xl font-black text-[#1c2230] text-center bg-transparent border-none outline-none w-48"
                  />
                  <span className="text-2xl font-black text-[#2952e3]">|</span>
                </div>
              </div>

              {/* SEND BUTTON */}
              <button className="w-full bg-[#2952e3] hover:bg-blue-600 active:scale-[0.98] text-white py-5 rounded-2xl text-sm font-black tracking-widest uppercase transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2">
                <Send size={16} />
                Send Money
              </button>
            </div>

            {/* SELL ORDER */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#1c2230]">Sell Order</h3>
                <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
              </div>
              <button className="flex items-center gap-3 mb-6 w-fit">
                <div className="w-8 h-8 bg-[#1a6bc9] rounded-full flex items-center justify-center text-white font-black text-sm">D</div>
                <span className="font-semibold text-[#1c2230]">Dash Coin</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              <div className="grid grid-cols-3 mb-3">
                {["Price", "Amount", "Total"].map(h => (
                  <span key={h} className="text-[10px] font-bold text-gray-400">{h}</span>
                ))}
              </div>
              <div className="flex flex-col gap-1 flex-grow">
                {sellOrders.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-3 py-2.5 rounded-xl transition-colors cursor-pointer hover:bg-gray-50 ${
                      row.highlighted === "blue" ? "bg-[#eef2ff]" : ""
                    }`}
                  >
                    <span className={`text-xs font-bold ${row.highlighted === "blue" ? "text-[#2952e3]" : "text-[#1c2230]"}`}>{row.price}</span>
                    <span className={`text-xs font-bold ${row.highlighted === "blue" ? "text-[#2952e3]" : "text-gray-500"}`}>{row.amount}</span>
                    <span className={`text-xs font-bold ${row.highlighted === "blue" ? "text-[#2952e3]" : "text-[#1c2230]"}`}>{row.total}</span>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-1 text-[#2952e3] font-bold text-xs mt-4 hover:underline">
                Show more <ChevronRight size={14} />
              </button>
            </div>

            {/* BUY ORDER */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#1c2230]">Buy Order</h3>
                <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
              </div>
              <button className="flex items-center gap-3 mb-6 w-fit">
                <div className="w-8 h-8 bg-[#f2ad43] rounded-full flex items-center justify-center text-white font-black text-sm">₿</div>
                <span className="font-medium text-[#1c2230]">Bitcoin</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              <div className="grid grid-cols-3 mb-3">
                {["Price", "Amount", "Total"].map(h => (
                  <span key={h} className="text-[10px] font-bold text-gray-400">{h}</span>
                ))}
              </div>
              <div className="flex flex-col gap-1 flex-grow">
                {buyOrders.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-3 py-2.5 rounded-xl transition-colors cursor-pointer hover:bg-gray-50 ${
                      row.highlighted === "amber" ? "bg-[#fffbeb]" : ""
                    }`}
                  >
                    <span className={`text-xs font-bold ${row.highlighted === "amber" ? "text-[#d97706]" : "text-[#1c2230]"}`}>{row.price}</span>
                    <span className={`text-xs font-bold ${row.highlighted === "amber" ? "text-[#d97706]" : "text-gray-500"}`}>{row.amount}</span>
                    <span className={`text-xs font-bold ${row.highlighted === "amber" ? "text-[#d97706]" : "text-[#1c2230]"}`}>{row.total}</span>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-1 text-[#2952e3] font-bold text-xs mt-4 hover:underline">
                Show more <ChevronRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

// --- COMPONENTES AUXILIARES ---

// FIX: border-l-4 border-transparent nos inativos para manter alinhamento horizontal
function SidebarItem({ icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-l-4 transition-all group ${
        active
          ? "bg-white/5 text-white border-blue-500"
          : "text-gray-500 hover:text-white hover:bg-white/5 border-transparent"
      }`}
    >
      <span className={`${active ? "text-blue-500" : "text-gray-500 group-hover:text-blue-500"} transition-colors`}>
        {icon}
      </span>
      <span className="font-bold text-sm tracking-tight">{label}</span>
    </button>
  );
}

// FIX: ToggleSwitch extraído como componente reutilizável
function ToggleSwitch({ label, enabled, onToggle }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onToggle}>
      <span className={`text-[10px] font-bold transition-colors ${enabled ? "text-[#1c2230]" : "text-gray-400"}`}>
        {label}
      </span>
      <div className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${enabled ? "bg-[#2952e3]" : "bg-gray-200"}`}>
        <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all duration-300 ${enabled ? "right-0.5" : "left-0.5"}`} />
      </div>
    </div>
  );
}

const CustomTooltipStat = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
        <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Market Data</p>
        <div className="text-xs font-black text-[#2952e3]">{payload[0].value.toLocaleString()} USD</div>
      </div>
    );
  }
  return null;
};