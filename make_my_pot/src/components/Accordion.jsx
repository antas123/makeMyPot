import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import AmountTable from "./AmountTable";
import TextCell from "./TextCell";

const Item = styled(Paper)(() => ({
  //   ...theme.typography.body2,
  padding: 1,
  textAlign: "center",
  color: "black",
}));

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

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
          <MonetizationOnTwoToneIcon
            sx={{
              color: "lightgreen",
              fontSize: "28px",
              opacity: 0.75,
              marginRight: "20px",
              width: "50px",
            }}
          />
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={8}>
              <div style={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "larger",
                    fontFamily: "sans-serif",
                    fontWeight: "lighter",
                    width: "-webkit-fill-available",
                  }}
                >
                  Account Balance/ liquid-funds
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              {/* <div
                style={{
                  display: "flex",
                  padding: 0,
                  height: "40px",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "70px",
                    border: "1px solid gray",
                    textAlign: "center",
                    backgroundColor: "#DDDDDD",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  <div style={{ padding: "5px", textAlign: "center" }}>Rs</div>
                </Typography>
                <Typography
                  sx={{
                    width: "max-content",
                    padding: "0 50px",
                    border: "1px solid gray",
                    borderLeft: "none",
                    fontSize: "20px",
                    backgroundColor: "#DDDDDD",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ padding: "5px", textAlign: "center" }}>
                    5,28,800
                  </div>
                </Typography>
              </div> */}
              <AmountTable onHead />
            </Grid>
          </Grid>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            backgroundColor: "#F5F7F8",
            paddingRight: 0,
            paddingLeft: "70px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              paddingRight: "46px",
              height: "50px",
            }}
          >
            <Grid container>
              <Grid item md={8}>
                <div
                  style={{
                    display: "flex",
                    height: "50px",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "20px", // Add left spacing
                    marginRight: "20px", // Add right spacing
                  }}
                >
                  <TextCell />
                  <AmountTable />
                  <TextCell />
                </div>
              </Grid>
              <Grid item md={4}>
                <AmountTable />
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              backgroundColor: "white",
              paddingRight: "46px",
              height: "50px",
            }}
          >
            <Grid container>
              <Grid item md={8}>
                <div
                  style={{
                    display: "flex",
                    height: "50px",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "20px", // Add left spacing
                    marginRight: "20px", // Add right spacing
                  }}
                >
                  <TextCell />
                  <AmountTable />
                  <TextCell />
                </div>
              </Grid>
              <Grid item md={4}>
                <AmountTable />
              </Grid>
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
