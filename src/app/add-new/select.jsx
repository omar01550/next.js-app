import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectSmall({ label, product, setProduct }) {
    // const [age, setAge] = React.useState(0);


    return (
        <FormControl sx={{
            marginTop: "20px",
            width: "100%"

        }} size="large">
            <InputLabel id="demo-select-small-label">Category</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={product.category || "shose"}
                label={label}
                onChange={(e) => {
                    setProduct({
                        ...product,
                        [label]: e.target.value

                    })
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"shose"}>Shose</MenuItem>
                <MenuItem value={"shirt"}>Shirt</MenuItem>

            </Select>
        </FormControl>
    );
}