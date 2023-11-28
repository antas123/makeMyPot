import { Grid } from "@mui/material";
import TextCell from "./TextCell";
import AmountTable from "./AmountTable";

const TableRow = ({ subtitle }) => {
  return (
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
          <TextCell text={subtitle} />
        </div>
      </Grid>
      <Grid item md={4}>
        <AmountTable />
      </Grid>
    </Grid>
  );
};

export default TableRow;
