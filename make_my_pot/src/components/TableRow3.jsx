import { Button, Grid } from "@mui/material";
import TextCell from "./TextCell";
import AmountTable from "./AmountTable";
import { UserContext } from "../App";
import { useContext } from "react";
import { UserInternalData } from "../constants/UserInternalData";

const TableRow3 = ({ subtitle, icon, name, tab, ind }) => {
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
    <div style={{ display: "flex" }}>
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
          <AmountTable
            text={subtitle[1]}
            value={userInternalData[tab][name][ind].currentBalance}
            changeValue={(val) =>
              updateRowInInternalUserData("currentBalance", val)
            }
          />
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
                  backgroundColor: "orange",
                },
              }}
            >
              {subtitle[2]}
            </Button>
            <AmountTable
              text={subtitle[3]}
              value={userInternalData[tab][name][ind].employerBalance}
              changeValue={(val) =>
                updateRowInInternalUserData("employerBalance", val)
              }
            />
          </div>
        </Grid>
        <Grid item md={4}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AmountTable
              text={subtitle[4]}
              value={userInternalData[tab][name][ind].employeeBalance}
              changeValue={(val) =>
                updateRowInInternalUserData("employeeBalance", val)
              }
            />
          </div>
        </Grid>
      </Grid>
      {isLast ? (
        <div
          style={{ display: "flex", alignItems: "flex-end" }}
          onClick={addRowToInternalUserData}
        >
          <img
            src={icon}
            style={{
              width: "20px",
              height: "20px",
              padding: "15px 20px",
              cursor: "pointer",
            }}
          />
        </div>
      ) : (
        <div style={{ width: "60px" }}></div>
      )}
    </div>
  );
};

export default TableRow3;
