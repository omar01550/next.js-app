import * as React from 'react';
import Button from '@mui/material/Button';

import { ArrowRightAlt } from '@mui/icons-material';

import Stack from '@mui/material/Stack';

export default function ButtonComponent({ word, icon }) {
    return (
        <Stack direction="row" spacing={2}>

            <Button variant="contained" endIcon={icon ? icon : <></>} className='text-2xl text-black bg-white mt-3 hover:bg-white hover:text-black :hoveropacity-50'>
                {word}
            </Button>
        </Stack>
    );
}