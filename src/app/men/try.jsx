"use client"


import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, Container, IconButton, Stack } from '@mui/material';
import { BarChartSharp, Menu } from '@mui/icons-material';


export default function BasicRating() {
    const [value, setValue] = React.useState(2);
    const [open, setOpen] = React.useState(false)
    return (
        <div className="page bg-red-500" >
            <Stack direction={"row"}>
                <Box flex={2} className="bg-blue-400" sx={{
                    display: {
                        xs: open ? "block" : "none",
                        md: "block"
                    }
                }}>
                    left
                </Box>

                <Box flex={4} className="bg-zinc-600">
                    center
                </Box>

                <Box flex={2}>
                    left
                </Box>





            </Stack>

            <IconButton onClick={() => {
                setOpen(!open)
            }}>
                <Menu />
            </IconButton>
        </div>
    );
}