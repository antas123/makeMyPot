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
import IncomeAndExpensesReport from "./scenes/financialDashboard/incomeAndExpensesReport/IncomeAndExpensesReport";
import DonutChart from "./components/DonutChart";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [activePage, setActivePage] = useState("Home");
  const [activeTabOption, setActiveTabOption] = useState(1);

  useEffect(() => {
    setActiveTabOption(1);
  }, [activePage]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
  };
  console.log(activePage);
  useEffect(() => {
    // Add event listener to update isMobile on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("trigerred");

  const updateActivePageHandler = (page) => setActivePage(page);

  //If u got this, consider u have all my changes as of 21st nov..........
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Navbar
          activePage={activePage}
          updateActivePage={updateActivePageHandler}
          updateTabOption={() => setActiveTabOption(1)}
        />
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
            <TempDrawer
              activePage={activePage}
              activeTabOption={activeTabOption}
              setActiveTabOption={(option) => setActiveTabOption(option)}
            />
          ) : (
            <Sidebar
              activePage={activePage}
              activeTabOption={activeTabOption}
              setActiveTabOption={(option) => setActiveTabOption(option)}
            />
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
              path="home/1"
              element={
                <Scene>
                  <Home />
                </Scene>
              }
            />
            <Route
              exact
              path="/yourFinancials/1"
              element={
                <Scene>
                  <YourFinancials />
                </Scene>
              }
            />
            <Route
              exact
              path="/financialDashboard/1"
              element={
                <Scene>
                  <FinancialDashboard />
                </Scene>
              }
            />
            <Route
              exact
              path="/financialDashboard/2"
              element={
                <Scene>
                  <IncomeAndExpensesReport />
                </Scene>
              }
            />
            <Route
              exact
              path="/financialDashboard/3"
              element={
                <Scene>
                  <DonutChart />
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
