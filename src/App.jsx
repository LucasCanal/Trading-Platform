import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Ticker from "./components/ticker/ticker";
import HeroSection from "./components/heroSection/heroSection";
import FeatureSection from "./components/featureSection/featureSection";
import MarketsSection from "./components/marketsSection/marketsSection";
import DetailedFeatures from "./components/detailedFeatures/detailedFeatures";
import AccountTypes from "./components/accountType/accountType";
import AffiliateSection from "./components/affiliateSection/affiliateSection";
import Rodape from "./components/rodape/rodape";

import LoginPage from "./pages/login";
import CreateAccount from "./pages/createAccount";
import Dashboard from "./pages/dashboard";

// Componente de Rota Privada
function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/createAccount" ||
    location.pathname === "/dashboard";

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col w-full">
              <HeroSection />
              <Ticker />
              <FeatureSection />
              <MarketsSection />
              <DetailedFeatures />
              <AccountTypes />
              <AffiliateSection />
              <Rodape />
            </div>
          }
        />

        {/* Autenticação */}
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isAuthPage && location.pathname !== "/" && <Rodape />}
    </div>
  );
}

export default App;