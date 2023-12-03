import { Button, Grid } from "@mui/material";
import TextCell from "./TextCell";
import AmountTable from "./AmountTable";

const TableRow3 = ({ subtitle }) => {
  return (
    <Grid container>
      <Grid item md={8}>
        <div
          style={{
            display: "flex",
            height: "50px",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <TextCell text={subtitle[0]} />
        </div>
      </Grid>
      <Grid item md={4}>
        <AmountTable text={subtitle[1]} />
      </Grid>
      <Grid item md={8}>
        <div
          style={{
            display: "flex",
            height: "50px",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <Button
            sx={{
              width: "50%",
              backgroundColor: "orange",
              color: "white",
              "&:hover": {
                backgroundColor: "orange", // Change this to the desired light orange color
              },
            }}
          >
            {subtitle[2]}
          </Button>
          <AmountTable text={subtitle[3]} />
        </div>
      </Grid>
      <Grid item md={4}>
        <AmountTable text={subtitle[4]} />
      </Grid>
    </Grid>
  );
};

export default TableRow3;
