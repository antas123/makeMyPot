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
import NetWorthAnalysisReport from "./scenes/financialDashboard/NetWorthAnalysisReport/NetWorthAnalysisReport";
import ManageLoans from "./scenes/financialDashboard/ManageYourLoans/ManageLoans";
import axios from "axios";

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
  useEffect(() => {
    // Add event listener to update isMobile on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      min: 0,
      max: 120000,
      summary:
        "You have total income of {{totalIncome}} per year. Individuals in this income range may struggle to meet basic needs and may require financial assistance. Approximately 15% of Indian population have income below Rs 1,20,000.",
      comment:
        "Every small step towards financial stability is a victory. Keep pushing forward, and brighter days are ahead",
    },
    {
      min: 120001,
      max: 300000,
      summary:
        "You have total income of {{totalIncome}} per year. Individuals in this income range group has a modest income, budgeting is crucial, and long-term financial planning may be limited. Approximately 45% of Indian population have income below Rs 3,00,000.",
      comment:
        "Your hard work is laying the foundation for a more secure future. Keep budgeting wisely, and financial freedom will follow.",
    },
    {
      min: 300001,
      max: 600000,
      summary:
        "You have total income of {{totalIncome}} per year. Individuals in this range have a more comfortable income, allowing for some savings and discretionary spending. 45% of Indian population have income below Rs 3,00,000.",
      comment:
        "You've reached a level where you can start saving and enjoying some of life's pleasures. Your financial journey is on an upward trajectory.",
    },
    {
      min: 600001,
      max: 1000000,
      summary:
        "You have total income of {{totalIncome}} per year. Individuals in this income range have relatively higher income, enabling them to address immediate needs and save for the future. Approximately 65% of Indian population have income below Rs 6,00,000.",
      comment:
        "Congratulations on achieving a significant milestone! Continue to invest wisely, and your financial goals will become a reality",
    },
    {
      min: 1000001,
      max: 2000000,
      summary:
        "You have total income of {{totalIncome}} per year. Individuals in this range have a significant income, providing financial security and the ability to make substantial investments. Approximately 8% to 15% of Indian population have income in the range of Rs 10,00,000 to Rs 20,00,000.",
      comment:
        "Your hard work is paying off, and you're in a position to make meaningful investments. The road to financial success is looking bright.",
    },
    {
      min: 2000000,
      max: 5000000,
      summary:
        "You have total income of {{totalIncome}} per year.This high-income group has the financial flexibility to meet various needs, including investments, luxury spending, and substantial savings. Approximately 3% to 8% of Indian population have income in the range of Rs 20,00,000 to Rs 50,00,000.",
      comment:
        "You're in a league where financial opportunities abound. Continue to leverage your success for a prosperous and fulfilling life.",
    },
    {
      min: 5000000,
      summary:
        "You have total income of {{totalIncome}} per year. Individuals in this elite income range have considerable financial resources, enabling them to afford a luxurious lifestyle, make substantial investments, and achieve high levels of financial security. Approximately 3% of Indian population earn income more than Rs 50,00,000.",
      comment:
        "Congratulations on achieving financial excellence! Your achievements open doors to a life of luxury, impact, and boundless opportunities.",
    },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchGlobalConfigData = await axios.get(
  //       "https://q3bumbzd2d.execute-api.us-east-1.amazonaws.com/getGlobalConfiguration",
  //       {
  //         headers: {
  //           "Apigw-Requestid": "PH6G4j46IAMEJvg=",
  //           "Content-Type": "application/json", // Add other headers if needed
  //         },
  //       }
  //     );
  //     console.log(fetchGlobalConfigData.data);
  //   };
  //   fetchData();
  // }, []);

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
                  <YourFinancials data={[...data]} />
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
