// import React from 'react'
// import hat from "../imagesDashboard/Student.png"
// import Rupee from "../imagesDashboard/Rupee.png"
// import inflation from  "../imagesDashboard/inflation.png"
// import calendar from "../imagesDashboard/Calendar.png"
// import tree from "../imagesDashboard/FinancialGrowth.png"
// import del from "../imagesDashboard/Delete.png"
// import edit from "../imagesDashboard/Edit.png"
// const List = () => {
//   return (
//     <div style={{backgroundColor:"white", padding:"10px 30px", position:"relative"}}>
//         <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: "20px",
//             }}
//           >
//             <h3>Goal Will be here</h3>
//             <div
//               style={{
//                 backgroundColor: "#94A684",
//                 padding: "5px",
//                 height: "20px",
//                 marginTop: "15px",
//               }}
//             >
//               achievable
//             </div>
            
//         </div>
//         <div style={{position:"absolute", right:"2%", top:"9%"}}>
//                 <img  style={{height:"2em"}} src={del} alt="" />
//                 <img style={{height:"2em"}} src={edit} alt="" />
//         </div>
//          <div style={{display:"flex", flexDirection:"row"}}>
//             <div style={{flex:"2", display:"flex", flexDirection:"column"}}>
//                 <div style={{flex:"1", display:"flex", flexDirection:"row", marginBottom:"20px"}}>
//                     <div style={{flex:"1",display:"flex", gap:"1em"}} >
//                     <img style={{height:"60px", width:"50px"}} src={hat} alt="" />
//                     <p>Higher education</p>
//                     </div>
//                     <div style={{flex:"1",display:"flex", gap:"1em"}}>
//                     <img style={{height:"60px", width:"50px"}} src={calendar} alt="" />
//                     <p>Target Year : 2024</p>
//                     </div>
//                 </div>
//                 <div style={{flex:"1", display:"flex", flexDirection:"row"}}>
//                     <div style={{flex:"1",display:"flex", gap:"1em"}}>
//                     <img style={{height:"50px", width:"50px"}}  src={Rupee} alt="" />
//                     <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
//                     <p style={{margin:"0"}} >Current Cost</p>
//                     <p style={{margin:"0"}}>24,45,555</p>
//                     </div>
//                     </div>
//                     <div style={{flex:"1",display:"flex", gap:"1em"}}>
//                     <img style={{height:"50px", width:"50px"}}  src={inflation} alt="" />
//                     <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
//                     <p style={{margin:"0"}} >Inflation adjusted</p>
//                     <p style={{margin:"0"}}>Rs 24,45,555</p>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             <div style={{flex:"1", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"1em"}}>
//               <img style={{height:"100px"}} src={tree} alt="" />
//                 <div>
//                   <p style={{fontSize:"18px"}}>Monthly SIP</p>
//                   <p>34,444</p>
//                 </div>
//             </div>
//          </div>

//     </div>
//   )
// }

// export default List
import React from 'react';
import hat from "../imagesDashboard/Student.png";
import Rupee from "../imagesDashboard/Rupee.png";
import inflation from "../imagesDashboard/inflation.png";
import calendar from "../imagesDashboard/Calendar.png";
import tree from "../imagesDashboard/FinancialGrowth.png";
import del from "../imagesDashboard/Delete.png";
import edit from "../imagesDashboard/Edit.png";

const List = ({ goals, deleteGoal }) => {
  console.log(goals,'jjj')
  return (
    <div style={{ backgroundColor: "white", padding: "10px 30px", position: "relative" }}>
      {goals?.map((goal) => (
        <div key={goal.id} style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <h3>Goal: {goal.name}</h3>
            <div style={{ backgroundColor: "#94A684", padding: "5px", height: "20px", marginTop: "15px" }}>
              achievable
            </div>
          </div>
          <div style={{ position: "absolute", right: "2%", top: "9%" }}>
            <img style={{ height: "2em", cursor: "pointer" }} src={del} alt="Delete" onClick={() => deleteGoal(goal.id)} />
            <img style={{ height: "2em" }} src={edit} alt="Edit" />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "2", display: "flex", flexDirection: "column" }}>
              <div style={{ flex: "1", display: "flex", flexDirection: "row", marginBottom: "20px" }}>
                <div style={{ flex: "1", display: "flex", gap: "1em" }}>
                  <img style={{ height: "60px", width: "50px" }} src={hat} alt="Hat" />
                  <p>{goal.name}</p>
                </div>
                <div style={{ flex: "1", display: "flex", gap: "1em" }}>
                  <img style={{ height: "60px", width: "50px" }} src={calendar} alt="Calendar" />
                  <p>Target Year: {goal.targetYear}</p>
                </div>
              </div>
              <div style={{ flex: "1", display: "flex", flexDirection: "row" }}>
                <div style={{ flex: "1", display: "flex", gap: "1em" }}>
                  <img style={{ height: "50px", width: "50px" }} src={Rupee} alt="Rupee" />
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ margin: "0" }}>Current Cost</p>
                    <p style={{ margin: "0" }}>Rs {goal.currentCost}</p>
                  </div>
                </div>
               
              </div>
            </div>
            {/* <div style={{ flex: "1", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "1em" }}>
              <img style={{ height: "100px" }} src={tree} alt="Tree" />
              <div>
                <p style={{ fontSize: "18px" }}>Monthly SIP</p>
                <p>Rs {goal.monthlySIP}</p>
              </div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
