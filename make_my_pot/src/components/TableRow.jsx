import { Grid } from "@mui/material";
import TextCell from "./TextCell";
import AmountTable from "./AmountTable";
import { useContext } from "react";
import { UserContext } from "../App";
import { UserInternalData } from "../constants/UserInternalData";

const TableRow = ({ subtitle, icon, name, tab, ind }) => {
  const { userInternalData, setUserInternalData } = useContext(UserContext);
  const isLast = ind === userInternalData[tab][name].length - 1;

  const addRowToInternalUserData = () => {
    const obj = { ...UserInternalData[tab][name][0] };
    setUserInternalData((prev) => {
      return {
        ...prev,
        [tab]: {
          ...prev[tab],
          [name]: [...prev[tab][name], { ...obj }],
        },
      };
    });
  };
  const updateRowInInternalUserData = (col, value) => {
    setUserInternalData((prev) => {
      return {
        ...prev,
        [tab]: {
          ...prev[tab],
          [name]: prev[tab][name].map((item, index) =>
            index === ind
              ? {
                  ...item,
                  [col]: value,
                }
              : item
          ),
        },
      };
    });
  };

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
          <TextCell
            text={subtitle[0]}
            value={userInternalData[tab][name][ind].name}
            updateVal={(e) =>
              updateRowInInternalUserData("name", e.target.value)
            }
          />
        </div>
      </Grid>
      <Grid item md={4}>
        <div style={{ display: "flex" }}>
          <AmountTable
            text={subtitle[1]}
            value={userInternalData[tab][name][ind].amount}
            changeValue={(val) => updateRowInInternalUserData("amount", val)}
          />
          {isLast && (
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={addRowToInternalUserData}
            >
              <img
                src={icon}
                style={{
                  width: "20px",
                  height: "20px",
                  padding: "0 20px",
                  cursor: "pointer",
                }}
              />
            </div>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default TableRow;
