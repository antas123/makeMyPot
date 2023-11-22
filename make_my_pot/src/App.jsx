import "./App.css";
import Navbar from "./components/extras/Navbar";
import Scene from "./scenes/Scene";
import Sidebar from "./components/extras/Sidebar";
import TempDrawer from "./components/extras/TempDrawer";
import { useState, useEffect } from "react";

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
        link: "/yourFinancials/1",
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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
  };
  useEffect(() => {
    // Add event listener to update isMobile on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
   
      <div>
      <Navbar />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection:"row",
          width:"100vw"
        }}
      >
      <div style={{flex:"1",height:"90vh",  position: isMobile?"absolute":"relative"}}>
      {isMobile ? <TempDrawer /> : <Sidebar />}
      </div>
       <div style={{flex:"4", height:"90vh"}}>
       <Scene />
       </div>
       
      </div>

    </div>
  );
}

export default App;