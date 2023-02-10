import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState("");
  const continents = ["Africa", "Europe", "Asia", "America", "Oceania"];
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {continents.map((c) => {
          <FormControlLabel value={c} control={<Radio />} label={c} />;
        })}

        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
