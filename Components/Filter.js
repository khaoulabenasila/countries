import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Slider,
  Box
} from "@mui/material";
import React, { useState } from "react";

const Filter = () => {
  const continents = ["Africa", "Europe", "Asia", "America", "Oceania"];
  const [selectedContinent, setSelectedContinent] = useState("");
  const handleChange = (event) => {
    setSelectedContinent(event.target.value);
  };

  return (
    <div>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          backgroundColor: "black"
        }}
      >
        <Box width="15%">
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>

        <Box width="80%">
          <FormControl>
            <RadioGroup
              style={{
                display: "inline",
                color: "white"
              }}
              onChange={handleChange}
            >
              {continents.map((continent) => {
                return (
                  <FormControlLabel
                    value={continent}
                    control={
                      <Radio
                        style={{
                          color: "blue"
                        }}
                      />
                    }
                    label={continent}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};

export default Filter;
