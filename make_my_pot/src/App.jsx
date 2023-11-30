import "./App.css";
import Navbar from "./components/extras/Navbar";
import Scene from "./scenes/Scene";
import Sidebar from "./components/extras/Sidebar";
import TempDrawer from "./components/extras/TempDrawer";
import { useState, useEffect, useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./scenes/home/Home";
import YourFinancials from "./scenes/yourFinancial/YourIncomePostTax/YourFinancials";
import FinancialDashboard from "./scenes/financialDashboard/FinancialDashboard";
import IncomeAndExpensesReport from "./scenes/financialDashboard/incomeAndExpensesReport/IncomeAndExpensesReport";
import NetWorthAnalysisReport from "./scenes/financialDashboard/NetWorthAnalysisReport/NetWorthAnalysisReport";
import ManageLoans from "./scenes/financialDashboard/ManageYourLoans/ManageLoans";
import axios from "axios";
import YourExpenses from "./scenes/yourFinancial/YourExpenses/YourExpenses";
import {
  getActiveTabFromPath,
  getPageFromPath,
} from "./constants/NavigationData";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [globalData, setGlobalData] = useState({});
  const [totalIncome, setTotalIncome] = useState("");
  const [activePage, setActivePage] = useState(
    getPageFromPath(window.location.pathname)
  );
  const [activeTabOption, setActiveTabOption] = useState(
    getActiveTabFromPath(window.location.pathname)
  );

  console.log(globalData);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      // Skip the effect on the initial render
      initialRender.current = false;
      return;
    }
    setActiveTabOption(1);
  }, [activePage]);

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

  useEffect(() => {
    const fetchGlobalConfigData = async () => {
      const globalConfigData = await axios.get(
        "https://q3bumbzd2d.execute-api.us-east-1.amazonaws.com/getGlobalConfiguration"
      );
      setGlobalData(globalConfigData.data.TotalIncomePostTax);
    };
    fetchGlobalConfigData();
  }, []);

  const updateActivePageHandler = (page) => setActivePage(page);

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
            <Route path="" element={<Navigate to="/home/1" replace />} />
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
                  <YourFinancials
                    data={[...(globalData?.IncomeClassification || [])]}
                    changeTotalIncome={(income) => setTotalIncome(income)}
                  />
                </Scene>
              }
            />
            <Route
              exact
              path="/yourFinancials/2"
              element={
                <Scene>
                  <YourExpenses
                    data={[
                      ...(globalData?.EssentialExpenseRatioClassification ||
                        []),
                    ]}
                    annualIncome={totalIncome}
                  />
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
                  <NetWorthAnalysisReport />
                </Scene>
              }
            />
            <Route
              exact
              path="/financialDashboard/4"
              element={
                <Scene>
                  <ManageLoans />
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
