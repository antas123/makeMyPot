import { Grid } from "@mui/material";
import TextCell from "./TextCell";
import AmountTable from "./AmountTable";

const TableRow4 = ({ subtitle }) => {
  return (
    <Grid container>
      <Grid item md={8}>
        <div
          style={{
            display: "flex",
            height: "50px",
            alignItems: "center",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <TextCell text={subtitle[0]} />
          <TextCell text={subtitle[1]} />
          <AmountTable text={subtitle[2]} />
        </div>
      </Grid>
      <Grid item md={4}>
        <AmountTable text={subtitle[3]} />
      </Grid>
    </Grid>
  );
};

export default TableRow4;
