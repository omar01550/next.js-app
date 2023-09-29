import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function OutlinedAlerts({ open, status, setOpen }) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>


            {
                open ?
                    <Stack direction="row" items={"center"} sx={{

                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Alert variant="outlined" severity={status ? "success" : "error"} flex={5}>
                            {
                                status ? "item added" : "failed to add item"
                            }
                        </Alert>
                        <HighlightOffIcon onClick={() => {
                            setOpen(false)
                        }} flex={1} />

                    </Stack >
                    :
                    <></>


            }

        </Stack >
    );
}