import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';

export default function Input({ label, product, setProduct, validation, setValidation }) {
    return (
        <Box
            sx={{
                width: "100%",
                marginTop: "20px"
            }}
        >

            <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>

            <TextField fullWidth label={label} id={label} onKeyUp={(e) => {
                setProduct({
                    ...product,
                    [label]: label == "price" ? parseInt(e.target.value) : e.target.value
                })

            }} />
        </Box >
    );
}