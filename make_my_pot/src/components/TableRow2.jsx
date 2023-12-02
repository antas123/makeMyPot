import { Grid } from "@mui/material";
import TextCell from "./TextCell";
import AmountTable from "./AmountTable";

const TableRow2 = ({ subtitle }) => {
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
          <AmountTable text={subtitle[1]} />
        </div>
      </Grid>
      <Grid item md={4}>
        <AmountTable text={subtitle[2]} />
      </Grid>
    </Grid>
  );
};

export default TableRow2;
