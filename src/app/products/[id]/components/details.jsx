"use client"


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CardTravelOutlined } from '@mui/icons-material';
import Alert from "./alert";
import { CartContext, checkisInCart } from '@/app/layout';
import SimpleSnackbar from './snackbar';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function DetailsComponent({ product }) {




    const { cart, setCart } = React.useContext(CartContext);

    const [expanded, setExpanded] = React.useState(false);

    const shoseSizes = [40, 41, 42, 43, 44, 45, 46];
    const shirtsSizes = ["small", "medium", "large", "xl"];
    // snackbar
    const [SnackBarOPen, setSnackBarOpen] = React.useState(false)

    //open alert
    const [open, setOpen] = React.useState(false)
    // select size
    const [size, setSize] = React.useState(product.category == "shirts" ? "small" : 44);

    const handleChange = (event) => {
        setSize(event.target.value)
    };


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className="w-[100%] md:w-[50%] mt-[30px]" sx={{



        }}>
            <CardContent>
                <Typography variant="h3" >

                    {product.title}

                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginTop: "30px" }}>
                    {product.describtion}
                </Typography>
                <h1>{product.categoty}</h1>

            </CardContent>

            <Stack direction="horizontal" sx={{
                marign: "30px"
            }}>
                <Button variant="outlined">
                    sizes
                </Button>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={size}
                        label="Size"
                        onChange={handleChange}
                    >
                        {product.category == "shirts"
                            ? shirtsSizes.map((ele) => {
                                return (

                                    <MenuItem value={ele}>{ele}</MenuItem>

                                )
                            })
                            :
                            shoseSizes.map((ele) => {
                                return (

                                    <MenuItem value={ele}>{ele}</MenuItem>



                                )
                            })

                        }
                    </Select>
                </FormControl>
            </Stack>

            <Stack sx={{ display: "flex", justifyContent: "end" }}>

                <Button endIcon={<CardTravelOutlined />} variant="outlined" onClick={() => {
                    //openAlert

                    const productid = product._id;

                    if (cart.filter(ele => ele._id == productid).length == 0) {
                        setCart([...cart, { ...product, count: 1, size, cost: product.price }])
                        setOpen(true)
                    } else {
                        setSnackBarOpen(true)
                        // let newCount = cart.filter(ele => ele._id == productid)[0].count + 1;
                        // let newCost = newCount * product.price
                        // setCart([...cart.filter(ele => ele._id != productid), { count: newCount, ...product, cost: newCost }])

                    }

                }}>
                    Add To Cart
                </Button>


            </Stack>
            <SimpleSnackbar SnackBarOPen={SnackBarOPen} setSnackBarOpen={setSnackBarOpen} text={"the product is already in your cart"} />

            <Alert open={open} status={true} setOpen={setOpen} />

        </Card >
    );
}
