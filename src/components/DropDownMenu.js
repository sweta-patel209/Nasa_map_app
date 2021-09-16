import React from 'react';
import {
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent,
  } from "@material-ui/core";

const NATURAL_EVENT_WILDFIRE = 8;
const SEVERE_STORMS = 10;
const VOLCANOS = 12;

const DropDownMenu = (props) => {
    return (
        
           <FormControl className="app__dropdown">
                    <Select
                        variant="outlined"
                        onChange={props.onChange}
                        
                    >
                        <MenuItem style={{background:'red', color:'white'}} value={NATURAL_EVENT_WILDFIRE}>WILDFIRE</MenuItem>
                        <MenuItem style={{background:'red', color:'white'}} value={SEVERE_STORMS}>STORM</MenuItem>
                        <MenuItem style={{background:'red', color:'white'}} value={VOLCANOS}>VOLCANO</MenuItem>
                        
                    </Select>
                </FormControl>
        
    )
}

export default DropDownMenu
