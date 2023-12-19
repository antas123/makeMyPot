import "./App.css";
import Navbar from "./components/extras/Navbar";
import Scene from "./scenes/Scene";
import Sidebar from "./components/extras/Sidebar";
import TempDrawer from "./components/extras/TempDrawer";
import { useState, useEffect, useRef, createContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./scenes/home/Home";
import YourFinancials from "./scenes/yourFinancial/YourIncomePostTax/YourFinancials";
import FinancialDashboard from "./scenes/financialDashboard/FinancialDashboard";
import IncomeAndExpensesReport from "./scenes/financialDashboard/incomeAndExpensesReport/IncomeAndExpensesReport";
import NetWorthAnalysisReport from "./scenes/financialDashboard/NetWorthAnalysisReport/NetWorthAnalysisReport";
import ManageLoans from "./scenes/financialDashboard/ManageYourLoans/ManageLoans";
import Goals from "./scenes/financialDashboard/RetirementPlanning/RetirementPlanning";
import axios from "axios";
import YourExpenses from "./scenes/yourFinancial/YourExpenses/YourExpenses";
import {
  getActiveTabFromPath,
  getPageFromPath,
} from "./constants/NavigationData";
import YourFixedAssets from "./scenes/yourFinancial/YourFixedAssets/YourFixedAssets";
import YourFinancialAssets from "./scenes/yourFinancial/YourFinancialAssets/YourFinancialAssets";
import YourLiabilities from "./scenes/yourFinancial/YourLiabilities/YourLiabilities";
import { isHomePage, isNotAuthenticated } from "./utils/helpers";
import { Box, Button, Modal, Typography } from "@mui/material";
import { UserInternalData } from "./constants/UserInternalData";
import RetirementPlanning from "./scenes/financialDashboard/RetirementPlanning/RetirementPlanning";
import EvaluateAndPlanGoals from "./scenes/financialDashboard/EvaluateAndPlanGoals/EvaluateAndPlanGoals";
import Signin from "./scenes/Signin";
import Login from "./scenes/Login";

const UserContext = createContext();
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [globalData, setGlobalData] = useState({});
  const [appUserData, setAppUserData] = useState({});
  const [activePage, setActivePage] = useState(
    getPageFromPath(window.location.pathname)
  );
  const [activeTabOption, setActiveTabOption] = useState(
    getActiveTabFromPath(window.location.pathname)
  );
  const [error, setError] = useState("");
  const [userInternalData, setUserInternalData] = useState({
    ...UserInternalData,
  });

  console.log("uee", userInternalData);

  const initialRender = useRef(true);
  const navigate = useNavigate();
  console.log(window.location.pathname);

  useEffect(() => {
    setActivePage(getPageFromPath(window.location.pathname));
    setActiveTabOption(getActiveTabFromPath(window.location.pathname));
  }, [window.location.pathname]);

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
    window.addEventListener("resize", handleResize);
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

  const changeAppUserDataHandler = (tab, key, value) => {
    setAppUserData((prev) => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [key]: value,
      },
    }));
  };

  // const changeUserInternalDataHandler = () => {};

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const updateActivePageHandler = (page) => setActivePage(page);

  const renderScene = (element) => <Scene>{element}</Scene>;

  const navigateToIncomeHandler = () => {
    navigate("/yourFinancials/1");
    setError("");
  };

  return (
    <UserContext.Provider value={{ userInternalData, setUserInternalData }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {!isNotAuthenticated() && (
          <div>
            <Navbar
              activePage={activePage}
              updateActivePage={updateActivePageHandler}
              updateTabOption={() => setActiveTabOption(1)}
            />
          </div>
        )}

        <div
          style={{
            display: window.location.pathname === "/home" ? "block" : "flex",
            flexDirection: "row",
            width: window.location.pathname === "/home" ? "90vw" : "100vw",
          }}
        >
          {!isHomePage() && (
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
          )}
          <Modal
            open={error}
            onClose={navigateToIncomeHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Income required!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {error}
              </Typography>
              <Button
                type="primary"
                sx={{
                  margin: "20px 0",
                  border: "1px solid orange",
                  color: "orange",
                }}
                onClick={navigateToIncomeHandler}
              >
                Add income
              </Button>
            </Box>
          </Modal>

          <div
            style={{
              // flex: "4",
              height: "90vh",
              padding: "0",
              width: window.location.pathname === "/home" ? "100vw" : "90vw",
              // backgroundColor:"pink"
            }}
          >
            <Routes>
              <Route path="" element={<Navigate to="/home" replace />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route
                exact
                path="/yourFinancials/1"
                element={renderScene(
                  <YourFinancials
                    data={[...(globalData?.IncomeClassification || [])]}
                    changeAppUserData={changeAppUserDataHandler}
                    incomeDetails={appUserData?.income || {}}
                  />
                )}
              />
              <Route
                exact
                path="/yourFinancials/2"
                element={renderScene(
                  <YourExpenses
                    data={[
                      ...(globalData?.EssentialExpenseRatioClassification ||
                        []),
                    ]}
                    changeAppUserData={changeAppUserDataHandler}
                    incomeDetails={appUserData?.income || {}}
                    setError={setError}
                    expenseDetails={appUserData?.expense || {}}
                  />
                )}
              />
              <Route
                exact
                path="/yourFinancials/3"
                element={renderScene(
                  <YourFixedAssets
                    data={[
                      ...(globalData?.FixedAssetsGenericInformation || []),
                    ]}
                    fixedAssetDetails={appUserData?.fixedAsset || {}}
                    changeAppUserData={changeAppUserDataHandler}
                  />
                )}
              />
              <Route
                exact
                path="/yourFinancials/4"
                element={renderScene(
                  <YourFinancialAssets
                    data={[
                      ...(globalData?.FinancialAssetsClassification || []),
                    ]}
                    financialAssetDetails={appUserData?.financialAsset || {}}
                    changeAppUserData={changeAppUserDataHandler}
                  />
                )}
              />
              <Route
                exact
                path="/yourFinancials/5"
                element={renderScene(
                  <YourLiabilities
                    data={[
                      ...(globalData?.DebtToIncomeRatioClassification || []),
                    ]}
                    incomeDetails={appUserData?.income || {}}
                    changeAppUserData={changeAppUserDataHandler}
                    liabilityDetails={appUserData?.liabilities || {}}
                    setError={setError}
                  />
                )}
              />
              <Route
                exact
                path="/financialDashboard/1"
                element={renderScene(<FinancialDashboard />)}
              />
              <Route
                exact
                path="/financialDashboard/2"
                element={renderScene(
                  <IncomeAndExpensesReport appData={appUserData} />
                )}
              />
              <Route
                exact
                path="/financialDashboard/3"
                element={renderScene(
                  <NetWorthAnalysisReport
                    appData={appUserData}
                    internalAppData={userInternalData}
                    apiData={[...(globalData?.IncomeClassification || [])]}
                  />
                )}
              />
              <Route
                exact
                path="/financialDashboard/4"
                element={renderScene(
                  <ManageLoans liabilities={userInternalData.liabilities} />
                )}
              />
              <Route
                exact
                path="/financialDashboard/5"
                element={renderScene(
                  <EvaluateAndPlanGoals
                    changeAppUserData={changeAppUserDataHandler}
                    goalPlanningDetails={appUserData?.goalPlanningDetails || {}}
                  />
                )}
              />
              <Route
                exact
                path="/financialDashboard/6"
                element={renderScene(
                  <RetirementPlanning
                    changeAppUserData={changeAppUserDataHandler}
                    retirementPlanningDetails={
                      appUserData?.retirementPlanning || {}
                    }
                  />
                )}
              />
            </Routes>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };
