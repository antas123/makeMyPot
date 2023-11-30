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
            marginLeft: "20px", 
            marginRight: "20px", 
          }}
        >
          <TextCell text={subtitle} />
          {/* <AmountTable /> */}
        </div>
      </Grid>
      <Grid item md={4}>
        <AmountTable />
      </Grid>
    </Grid>
  );
};

export default TableRow;
