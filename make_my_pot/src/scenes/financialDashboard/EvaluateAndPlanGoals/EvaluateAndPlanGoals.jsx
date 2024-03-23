import React from "react";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import SceneHeader from "../../../components/scene/SceneHeader";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";
import FormBox from "./FormBox";
import List from "./List";


const EvaluateAndPlanGoals = ({ width }) => {
  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.evaluateAndPlanGoals} />
      <MainContentWrapper thoughtCount={0} component="main">
        <div style={{ padding: "30px" }}>
         <FormBox width={width}/>
        </div>
        <div style={{ padding: "30px" }}>
          <List/>
        </div>
      </MainContentWrapper>
    </>
  );
};

export default EvaluateAndPlanGoals;
