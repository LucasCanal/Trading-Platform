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

// Componente que protege rotas privadas
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
    <div className="w-full min-h-screen bg-gray-50">
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Ticker />
              <FeatureSection />
              <MarketsSection />
              <DetailedFeatures />
              <AccountTypes />
              <AffiliateSection />
              <Rodape />
            </>
          }
        />

        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Rota protegida — só acessa com token válido */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>

      {!isAuthPage && location.pathname !== "/" && <Rodape />}
    </div>
  );
}

export default App;