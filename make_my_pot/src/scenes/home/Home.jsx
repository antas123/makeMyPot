import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import Part8 from "./Part8";
import logo from "../financialDashboard/imagesDashboard/LOGO.png"

const Home = () => {
  return (
    <div style={{ textAlign: "center", overflowX: "hidden" }}>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Part8/>
      <div style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly", padding:"20px"}} >
        <img style={{height:"3em", width:"12em"}} src={logo} alt="" />
        <div style={{display:"flex", flexDirection:"row", gap:"1em",color:"#6B3500", width:"33vw", height:"8vh"}}>
          <h5>Home</h5>
          <h5>Your Financials</h5>
          <h5>Financial Dashboard</h5>
          <h5>Privacy</h5>
          <h5>T & C</h5>
        </div>
        <p style={{fontSize:"1em", padding:"0"}}>@ 2023 MakeMyPot</p>
      </div>
    </div>
  );
};

export default Home;
