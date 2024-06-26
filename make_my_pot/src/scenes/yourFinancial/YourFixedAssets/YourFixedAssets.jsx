import React, { useEffect, useState } from "react";
import SceneHeader from "../../../components/scene/SceneHeader";
import ControlledAccordions from "../../../components/Accordion";
import ThoughtBox from "../../financialDashboard/ThoughtBox";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import SceneFooter from "../../../components/scene/SceneFooter";
import ManWithMoney from "../../../assets/manWithMoney.png";
import CashInHand from "../../../assets/CashInHand.png";
import MoneyBagRupeeOrange from "../../../assets/moneyBagRupeeOrange.png";
import { PlaceholderData } from "../../../constants/PlaceholderData";

const YourFixedAssets = ({ data, fixedAssetDetails, changeAppUserData }) => {
  const { personalRealEstate, investmentRealEstate, physicalGoldAndOthers } =
    fixedAssetDetails;
  const thoughts = data?.map((datapoint) => datapoint?.SummaryNotes);

  const { yourFixedAssets } = PlaceholderData;

  return (
    <>
      <SceneHeader title={yourFixedAssets.accordionTitle} />
      <MainContentWrapper thoughtCount={2} component="main">
        <ControlledAccordions
          title="Real estate (Home/Land) - For personal use"
          subtitle={[...yourFixedAssets.tabs.personalRealEstate]}
          icon={CashInHand}
          value={personalRealEstate}
          changeValue={(val) =>
            changeAppUserData("fixedAsset", "personalRealEstate", val)
          }
          name="personalRealEstate"
          tab="fixedAsset"
        />
        <ControlledAccordions
          title="Real estate (Home/Land/Shop) - For investment purpose"
          subtitle={[...yourFixedAssets.tabs.investmentRealEstate]}
          icon={MoneyBagRupeeOrange}
          value={investmentRealEstate}
          changeValue={(val) =>
            changeAppUserData("fixedAsset", "investmentRealEstate", val)
          }
          name="investmentRealEstate"
          tab="fixedAsset"
        />
        <ControlledAccordions
          title="Physical gold and other precious metals"
          subtitle={[...yourFixedAssets.tabs.physicalGoldAndOthers]}
          icon={ManWithMoney}
          value={physicalGoldAndOthers}
          changeValue={(val) =>
            changeAppUserData("fixedAsset", "physicalGoldAndOthers", val)
          }
          name="physicalGoldAndOthers"
          tab="fixedAsset"
        />
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={2} component="footer">
        {thoughts?.map((thought) => (
          <ThoughtBox text={thought} />
        ))}
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourFixedAssets;
