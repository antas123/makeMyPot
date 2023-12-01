import React from "react";
import SceneHeader from "../../../components/scene/SceneHeader";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import ThoughtBox from "../ThoughtBox";
import BasicSelect from "../BasicSelect";
import AmountTable from "../../../components/AmountTable";
import TableComponent from "./TableComponent";
import SidepieChart from "./SidepieChart";
import ManageYourLoansBarChart from "./ManageYourLoansBarChart";
import Barchart from "./Barchart";

const ManageLoans = () => {
  return (
    <>
      <SceneHeader />

      <MainContentWrapper>
        <div style={{ padding: "10px" }}>
          <BasicSelect width={"60%"} text={"Select the loan to evaluate"} />

            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                height: "90%",
              }}
             >
              <div style={{ flex: "2", marginRight:"40px"}}>
                <TableComponent heading={"Prepay partial amount to reduce interest paid and loan term"} gap={10} symbol={['Rs', 'Rs']} />
                <TableComponent heading={"Choose step-up EMI, where you increase EMI amount every year"} gap={10} or={"or"} symbol={['Rs', '%']}/>
                <TableComponent heading={"Swich to loan with lesser interest rate"} gap={10} symbol={['Rs', '%']}/>
              </div>
              <div
                style={{
                  flex: "1",
                  backgroundColor: "#E3F4F4",
                  textAlign: "center",
                }}
              >
              <h3>Break up of total payment</h3>
              <SidepieChart />
            </div>           
          </div>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{border:"1px solid black", padding:"5px"}}>
                <Barchart/>
            </div>
            <div style={{width:"100%", display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{borderBottom:"1px dashed grey", width:"100%", textAlign:"center"}}> 
                  <h4 style={{color:"grey"}}>Loan EMI</h4>
                  <h1>Rs 55,333</h1>
                </div>
                <div style={{borderBottom:"1px dashed grey", width:"100%", textAlign:"center"}}>
                <h4 style={{color:"grey"}}>Total Interest Payable</h4>
                <h1>Rs 55,333</h1>
                </div>
                <div style={{borderBottom:"1px dashed grey", width:"100%", textAlign:"center"}}>
                <h4 style={{color:"grey"}}>Total Payment <br /> (Principal + Interest) </h4>
                <h1>Rs 55,333</h1>
                </div>
            </div>
          </div>
        </div>
      </MainContentWrapper>

      <FooterContentWrapper>
        <ThoughtBox />
      </FooterContentWrapper>
    </>
  );
};

export default ManageLoans;
