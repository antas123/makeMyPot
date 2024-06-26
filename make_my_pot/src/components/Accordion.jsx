import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import AmountTable from "./AmountTable";
import TableRow from "./TableRow";
import TableRow2 from "./TableRow2";
import TableRow3 from "./TableRow3";
import TableRow4 from "./TableRow4";
import PlusIcon from "../assets/plus.png";
import { UserContext } from "../App";

const Item = styled(Paper)(() => ({
  //   ...theme.typography.body2,
  padding: 1,
  textAlign: "center",
  color: "black",
}));

const AccordionRow = ({ subtitle, isSpecial = false, name, tab, index }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingRight: "46px",
        height: isSpecial ? "100px" : "50px",
      }}
    >
      {subtitle.length === 2 ? (
        <TableRow
          icon={PlusIcon}
          subtitle={[...subtitle]}
          name={name}
          tab={tab}
          ind={index}
        />
      ) : subtitle.length === 3 ? (
        <TableRow2
          icon={PlusIcon}
          subtitle={[...subtitle]}
          name={name}
          tab={tab}
          ind={index}
        />
      ) : subtitle.length === 4 ? (
        <TableRow4
          icon={PlusIcon}
          subtitle={[...subtitle]}
          name={name}
          tab={tab}
          ind={index}
        />
      ) : (
        <TableRow3
          icon={PlusIcon}
          subtitle={[...subtitle]}
          name={name}
          tab={tab}
          ind={index}
        />
      )}
    </div>
  );
};

export default function ControlledAccordions({
  title,
  subtitle,
  icon,
  value,
  changeValue,
  special = false,
  isSpecialRow = false,
  name,
  tab,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const { userInternalData } = React.useContext(UserContext);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ padding: "10px", paddingBottom: "5px" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          sx={{
            border: "0.5px solid lightgray",
            borderColor: "gray",
            alignItems: "baseline",
          }}
          expandIcon={
            <ExpandMoreIcon sx={{ color: "orange", width: "30px" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <img
            src={icon}
            alt="icon"
            style={{ width: "45px", height: "40px", marginRight: "10px" }}
          />
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={8}>
              <div style={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontWeight: "lighter",
                    width: "-webkit-fill-available",
                    padding: "2px",
                  }}
                >
                  {title}
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              <AmountTable onHead value={value} changeValue={changeValue} />
            </Grid>
          </Grid>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            backgroundColor: special ? "white" : "#F5F7F8",
            paddingRight: 0,
            paddingLeft: "70px",
          }}
        >
          {userInternalData &&
            userInternalData[tab][name]?.map((data, ind) => (
              <AccordionRow
                subtitle={[...subtitle]}
                isSpecial={isSpecialRow}
                name={name}
                tab={tab}
                index={ind}
              />
            ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
