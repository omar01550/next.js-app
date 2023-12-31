import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

export default function CustomizedInputBase() {

    const [searchword, setSearchWord] = React.useState("");

    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: {
                    "xs": "none",
                    "md": "flex"
                },
                alignItems: 'center', width: 400

            }}
        >

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search For Products"
                inputProps={{ 'aria-label': 'search google maps' }}
                onKeyUp={(e) => {
                    setSearchWord(e.target.value);
                }}
                onSubmit={(e) => { e.preventDefault() }}
            />
            <Link href={"/search/?word=" + searchword}>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Link>

        </Paper>
    );
}
