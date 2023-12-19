import React, { useContext } from "react";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import SceneHeader from "../../../components/scene/SceneHeader";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";
import FormBox from "./FormBox";
import List from "./List";
import { UserContext } from "../../../App";

const EvaluateAndPlanGoals = ({ changeAppUserData, goalPlanningDetails }) => {
  const { userInternalData, setUserInternalData } = useContext(UserContext);
  const goalList = [...userInternalData.goalAndPlan.goals];
  const addGoalHandler = () => {
    setUserInternalData((prev) => ({
      ...prev,
      goalAndPlan: {
        ...prev.goalAndPlan,
        goals: [
          ...prev.goalAndPlan.goals,
          {
            goalName: goalPlanningDetails?.goalName,
            targetYear: goalPlanningDetails?.targetYear,
            currentCostForGoal: goalPlanningDetails?.currentCostForGoal,
            goalType: goalPlanningDetails?.goalType,
            inflationAdjCost: goalPlanningDetails?.inflationAdjCost,
            financialAssetCurrentCost:
              goalPlanningDetails?.financialAssetCurrentCost,
            fixedAssetCurrentCost: goalPlanningDetails?.fixedAssetCurrentCost,
          },
        ],
      },
    }));
  };
  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.evaluateAndPlanGoals} />
      <MainContentWrapper thoughtCount={0} component="main">
        <div style={{ padding: "30px" }}>
          <FormBox
            changeAppUserData={changeAppUserData}
            goalPlanningDetails={goalPlanningDetails}
            addGoalHandler={addGoalHandler}
          />
        </div>
        {goalList.length ? (
          <div style={{ padding: "30px" }}>
            <List />
          </div>
        ) : null}
      </MainContentWrapper>
    </>
  );
};

export default EvaluateAndPlanGoals;
