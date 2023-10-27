"use client"

import React from 'react'
import LogoImage from '../../../images/logo.png';
import Image from 'next/image';
import Search from '../searchBar/searcgh';
import emptyHeader from '../../../images/icons/empty-heart.png';
import UserIcon from '../../../images/icons/1077114.png';
import MenuIcon from '../../../images/icons/bars.png';
import Link from 'next/link';
import CartIcon from '../cardIcon/cart';
import { SearchOutlined } from '@mui/icons-material';
import SearchDialog from './searchMobile';
import SearchBar from '../searchBar/searcgh';

const Header = ({ openSideBar, setOpenSideBar }) => {


    return (
        <header className="main-container flex justify-between items-center py-5 shadow-md">



            {/* <Image src={MenuIcon} alt="adidas logo" className="w-[30px] h-[30px] md:hidden"
                onClick={() => {
                    setOpenSideBar(true)
                }}
            /> */}

<Link href="/" >
            <Image src={LogoImage} alt="adidas logo" className="w-[50px] h-[50px]" />

</Link>




            <nav className='links space-x-3 items-center text-2xl font-medium hidden md:flex'>
                {/* <Link href="/men">men</Link>
                <Link href="/wemen">wemen</Link>
                <Link href="/kids">kids</Link> */}
                <Link href="/products">products</Link>

            </nav>


            <div className="header-right flex space-x-2 items-center">
                <SearchBar
                    visibility={{
                        xs: "none",
                        md: "block"
                    }}
                />
{/*                 <SearchDialog /> */}

                {/* <Image src={UserIcon} alt="adidas logo" className="w-[30px] h-[30px]" /> */}

                <Link href="/cart">
                    <CartIcon />

                </Link>
            </div>

        </header>
    )
}

export default Header
