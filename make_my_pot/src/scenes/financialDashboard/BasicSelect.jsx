import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BasicSelect({ text, width, style = {}, data = ["1", "2", "3"] }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, padding: "5px 10px" }}>
      <FormControl style={{ width: width, ...style }} size="small">
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={text}
          onChange={handleChange}
          sx={{
            "& .MuiSelect-icon": {
              fontSize: 70,
              color: "#A2B5BB",
            },
          }}
        >
          {data?.map((d) => (
            <MenuItem value={d}>{d}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
