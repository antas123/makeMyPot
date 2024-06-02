// import React from 'react'
// import BasicSelect from "../BasicSelect";
// import InputtableComponent from "../../../components/InputtableComponent";
// import { Input } from "@mui/material";


// const FormBox = () => {
//   return (
//     <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       backgroundColor: "white",
//     }}
//   >
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         backgroundColor: "white",
//       }}
//     >
//       <div
//         style={{
//           padding: "30px 20px 30px 30px",
//           backgroundColor: "white",
//           display: "flex",
//           flexDirection: "column",
//           gap: "5%",
//           flex: "2",
//         }}
//       >
//         <div style={{ marginBottom: "20px" }}>
//           <Input
//             placeholder={"Goal name for reference"}
//             sx={{
//               border: "1px solid grey",
//               padding: "0 20px",
//               borderBottom: "0",
//               width: "100%",
//               textAlign: "center",
//               alignContent: "center",
//             }}
//           />
//         </div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             backgroundColor: "white",
//             width: "100%",
//             gap: "20px",
//           }}
//         >
//           <div style={{ width: "50%" }}>
//             <InputtableComponent
//               text={"Target Year for the goal"}
//               width={"100%"}
//             />
//           </div>
//           <div style={{ width: "50%" }}>
//             <InputtableComponent
//               text={" cost for the goal"}
//               symbol={"Rs"}
//               width={"100%"}
//             />
//           </div>
//         </div>

//         <div style={{ width: "100%" }}>
//           <p style={{ fontSize: "18px" }}>
//             Estimated Financial assets by the target year
//           </p>
//           <p style={{ fontSize: "18px" }}>
//             Estimated fixed assets for investment by the target year
//           </p>
//         </div>
//       </div>

//       <div
//         style={{
//           flex: "1",
//           width: "100%",
//           padding: "30px 30px 30px 0px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "15px",
//         }}
//       >
//         <div style={{ width: "100%", marginBottom: "8px" }}>
//           <BasicSelect width={"100%"} text={"select goal type"} />
//         </div>


//         <div style={{marginTop:'20px'}}>
//           <InputtableComponent
//             symbol={"Rs"}
//             width={"100%"}
//           />
//         </div>

//         <div>
//           <InputtableComponent
//             symbol={"Rs"}
//             width={"100%"}
//           />
//         </div>
//       </div>
//     </div>
//     <div
//       style={{
//         padding: "0px 30px 20px 30px",
//         backgroundColor: "white",
//       }}
//     >
//       <button style={{ width: "100%", border:"1px solid grey", color:"grey" , height:"38px"}} >
//        <p style={{fontSize:"20px", margin:"0px"}}>CREATE YOUR FINANCIAL GOAL</p> 
//       </button>
//     </div>
//   </div>
//   )
// }

// export default FormBox

import React, { useState } from 'react';
import BasicSelect from "../BasicSelect";
import InputtableComponent from "../../../components/InputtableComponent";
import { Input } from "@mui/material";
import List from './List';  // Make sure to import the List component

const FormBox = () => {
  const [goals, setGoals] = useState([]);

  const [goalName, setGoalName] = useState('');
  const [targetYear, setTargetYear] = useState('');
  const [currentCost, setCurrentCost] = useState('');
  const [inflationAdjustedCost, setInflationAdjustedCost] = useState('');
  const [monthlySIP, setMonthlySIP] = useState('');

  

  const addGoal = () => {
    const newGoal = {
      id: goals.length + 1,
      name: goalName,
      targetYear: targetYear,
      currentCost: currentCost,
      inflationAdjustedCost: inflationAdjustedCost,
      monthlySIP: monthlySIP,
    };
    setGoals([...goals, newGoal]);
    // Clear the input fields after adding the goal
    setGoalName('');
    setTargetYear('');
    setCurrentCost('');
    setInflationAdjustedCost('');
    setMonthlySIP('');
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            padding: "30px 20px 30px 30px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            gap: "5%",
            flex: "2",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <Input
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              placeholder={"Goal name for reference"}
              sx={{
                border: "1px solid grey",
                padding: "0 20px",
                borderBottom: "0",
                width: "100%",
                textAlign: "center",
                alignContent: "center",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              width: "100%",
              gap: "20px",
            }}
          >
            <div style={{ width: "50%" }}>
            <Input
                placeholder={"Target Year for the goal"}
                value={targetYear}
                onChange={(e) => setTargetYear(e.target.value)}
                width={"100%"}
                sx={{
                  border: "1px solid grey",
                  padding: "0 20px",
                  borderBottom: "0",
                  width: "100%",
                  textAlign: "center",
                  alignContent: "center",
                }}
              />
            </div>
            <div style={{ width: "50%" }}>
            <Input
                placeholder={" cost for the goal"}
                symbol={"Rs"}
                value={currentCost}
                onChange={(e) => setCurrentCost(e.target.value)}
                width={"100%"}
                sx={{
                  border: "1px solid grey",
                  padding: "0 20px",
                  borderBottom: "0",
                  width: "100%",
                  textAlign: "center",
                  alignContent: "center",
                }}
              />
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <p style={{ fontSize: "18px" }}>
              Estimated Financial assets per year
            </p>
           
          </div>
        </div>

        <div
          style={{
            flex: "1",
            width: "100%",
            padding: "30px 30px 30px 0px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div style={{ width: "100%", marginBottom: "8px" }}>
            <BasicSelect width={"100%"} text={"select goal type"} />
          </div>

          <div style={{ marginTop: '40px' }}>
          <Input
              symbol={"Rs"}
              value={inflationAdjustedCost}
              onChange={(e) => setInflationAdjustedCost(e.target.value)}
              width={"100%"}
              sx={{
                border: "1px solid grey",
                padding: "0 20px",
                borderBottom: "0",
                width: "100%",
                textAlign: "center",
                alignContent: "center",
              }}
            />
          </div>

        </div>
      </div>
      <div
        style={{
          padding: "0px 30px 20px 30px",
          backgroundColor: "white",
        }}
      >
        <button 
          style={{ width: "100%", border: "1px solid grey", color: "grey", height: "38px" }}
          onClick={addGoal}
        >
          <p style={{ fontSize: "20px", margin: "0px" }}>CREATE YOUR FINANCIAL GOAL</p>
        </button>
      </div>
      <List goals={goals} deleteGoal={deleteGoal} />
    </div>
  );
}

export default FormBox;
