import "./App.css";
import Navbar from "./components/extras/Navbar";
import Scene from "./scenes/Scene";
import Sidebar from "./components/extras/Sidebar";
import TempDrawer from "./components/extras/TempDrawer";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./scenes/home/Home";
import YourFinancials from "./scenes/yourFinancial/YourFinancials";
import FinancialDashboard from "./scenes/financialDashboard/FinancialDashboard";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [activePage, setActivePage] = useState("Your Financials");
  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
  };
  useEffect(() => {
    // Add event listener to update isMobile on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateActivePageHandler = (page) => setActivePage(page);

  //If u got this, consider u have all my changes as of 21st nov..........
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Navbar updateActivePage={updateActivePageHandler} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
        }}
      >
        <div
          style={{
            flex: "1",
            minWidth: "max-content",
            height: "90vh",
            position: isMobile ? "absolute" : "relative",
          }}
        >
          {isMobile ? (
            <TempDrawer activePage={activePage} />
          ) : (
            <Sidebar activePage={activePage} />
          )}
        </div>

        <div
          style={{
            flex: "4",
            height: "90vh",
          }}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Scene>
                  <Home />
                </Scene>
              }
            />
            <Route
              exact
              path="/yourFinancials"
              element={
                <Scene>
                  <YourFinancials />
                </Scene>
              }
            />
            <Route
              exact
              path="/financialDashboard"
              element={
                <Scene>
                  <FinancialDashboard />
                </Scene>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
