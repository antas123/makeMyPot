import React from 'react'
import SceneHeader from '../../../components/scene/SceneHeader'
import MainContentWrapper from '../../../components/wrappers/MainContentWrapper'
import FooterContentWrapper from '../../../components/wrappers/FooterContentWrapper'
import ThoughtBox from '../ThoughtBox'
import moneyBag from "../imagesDashboard/MoneyBag.png"
import calendar from "../imagesDashboard/Calendar.png"
import finGrow from "../imagesDashboard/FinancialGrowth.png"
import MiddleSection from './MiddleSection'
import StackedAreas from './StackedAreas'
import Barchart from '../ManageYourLoans/Barchart'

const Goals = () => {
  return (
    <>

     <SceneHeader/>

     <MainContentWrapper>
       <div>

       </div>

       <div style={{display:"flex", flexDirection:"column", padding:"10px", }} >
         <div style={{display:"flex",flexDirection:"row", gap:"20px"}} >
            <h3>Financial Freedom</h3>
            <div style={{backgroundColor:"lightgreen", padding:"5px", height:"20px", marginTop:"15px"}}>
                Achievable
            </div>
         </div>
       <div style={{display:"flex", flexDirection:"row", marginBottom:"70px"}}>
          
          <MiddleSection img={moneyBag} heading={"Corpus Required"} money={"12,34,55,234"} />
          <MiddleSection img={finGrow} heading={"Monthly SIP"} money={"12,343"} />
          <MiddleSection img={calendar} heading={"Freedom in"} years={"12"} />
 
       </div>   
       </div>


     
       <div style={{display:"flex", marginBottom:"30px",width:"60%", flexDirection:"column", margin:"auto"}} >
       <p style={{fontSize:"18px", color:"grey"}} >How retirement corpus is used post retirement?</p>
        <StackedAreas/>
      </div>
       
       <div style={{padding:"10px", display:"flex", width:"60%",margin:"auto", flexDirection:"column"}}>
       <p style={{fontSize:"18px", color:"grey"}} >How retirement corpus is used post retirement?</p>
       <Barchart/>
       </div>

     </MainContentWrapper>

      <FooterContentWrapper>
        <ThoughtBox/>
      </FooterContentWrapper>
    </>
  )
}

export default Goals