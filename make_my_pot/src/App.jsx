import "./App.css";
import Navbar from "./components/extras/Navbar";
import Scene from "./scenes/Scene";
import Sidebar from "./components/extras/Sidebar";
import { Route, Routes } from "react-router-dom";
import FinancialDashboard from "./scenes/financialDashboard/FinancialDashboard";
import YourFinancials from "./scenes/yourFinancial/YourFinancials";
import Home from "./scenes/home/Home";

const routes = {
  home: {
    menuItems: [
      {
        link: "/",
        path: "/",
        component: <h1>Home</h1>,
      },
    ],
  },
  yourFinancials: {
    menuItems: [
      {
        link: "/yourFinancials",
        component: <h1>F1</h1>,
      },
      {
        link: "/yourFinancials/2",
        component: <h1>F2</h1>,
      },
      {
        link: "/yourFinancials/3",
        component: <h1>F3</h1>,
      },
      {
        link: "/yourFinancials/4",
        component: <h1>F4</h1>,
      },
      {
        link: "/yourFinancials/1",
        component: <h1>F5</h1>,
      },
    ],
  },
  financialDashboard: {
    menuItems: [
      {
        link: "/financialDashboard/1",
        component: <h1>FD1</h1>,
      },
      {
        link: "/financialDashboard/2",
        component: <h1>FD2</h1>,
      },
      {
        link: "/financialDashboard/3",
        component: <h1>FD3</h1>,
      },
      {
        link: "/financialDashboard/4",
        component: <h1>FD4</h1>,
      },
      {
        link: "/financialDashboard/1",
        component: <h1>FD5</h1>,
      },
    ],
  },
};

function App() {
  //If u got this, consider u have all my changes as of 21st nov..........
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />
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
  );
}

export default App;
