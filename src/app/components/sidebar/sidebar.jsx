import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { ArrowLeft, ArrowRightAlt, Search } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Paper } from '@mui/material';
import Link from 'next/link';
import SearchBar from '../searchBar/searcgh';


export default function SideBar({ openSidebar, setOpenSideBar }) {
    return (
        <Box
            className="w-[270px] md:w-[350px] h-[900px] fixed  z-50 py-8 bg-white"
            sx={{
                left: openSidebar ? 0 : -350,
                top: 0,
                transition: "500ms"
            }}
        >

            <Paper className="shadow-lg shadow-slate-50 ">

                <CloseIcon
                    className='absolute right-5'
                    onClick={() => {
                        setOpenSideBar(false)
                    }}
                />
            </Paper>


            <nav aria-label="main mailbox folders" className='pt-9'>
                <List>
                    <Link href='/men'>
                        <ListItem disablePadding>
                            <ListItemButton>

                                <ListItemText primary="men" />
                                <ListItemIcon>
                                    <ArrowRightAlt />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>


                    </Link>

                    <ListItem>
                        <SearchBar sx={{
                            display: {
                                xs: "none",
                                md: "block"

                            }
                        }} />

                    </ListItem>

                    <Link href='/products'>
                        <ListItem disablePadding>
                            <ListItemButton>

                                <ListItemText primary="products" />
                                <ListItemIcon>
                                    <ArrowRightAlt />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>


                    </Link>


                    <ListItem disablePadding>
                        <ListItemButton>

                            <ListItemText primary="wemen" />
                            <ListItemIcon>
                                <ArrowRightAlt />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>



                    <ListItem disablePadding>
                        <ListItemButton>

                            <ListItemText primary="children" />
                            <ListItemIcon>
                                <ArrowRightAlt />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>


                    <ListItem disablePadding>
                        <ListItemButton>

                            <ListItemText primary="shoses" />
                            <ListItemIcon>
                                <ArrowRightAlt />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>


                    <ListItem disablePadding>
                        <ListItemButton>

                            <ListItemText primary="shirts" />
                            <ListItemIcon>
                                <ArrowRightAlt />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>

        </Box>
    );
}