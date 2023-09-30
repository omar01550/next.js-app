<<<<<<< HEAD
"use client";
=======
"use client"
>>>>>>> 9be80c4ce3387baf69680233c8789d33234314e8


import { useEffect, useState } from 'react'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import './globals.css'
import Slider from './components/slider/slider'
import Card from './components/card/card'
import Footer from './components/footer/footer';
import { createContext } from 'react'



export const checkisInCart = (cart, id) => cart.filter(ele => ele.id == id) ? true : false;





export const CartContext = createContext();


export default function RootLayout({ children }) {





  const [openSidebar, setOpenSideBar] = useState(false)

  const [cart, setCart] = useState([])


  useEffect(() => {
    setCart(window.localStorage.products && JSON.parse(window.localStorage.products))
  }, [])








  useEffect(() => {

    window.localStorage.products = JSON.stringify(cart)

  }, [cart])


  return (
    <html lang="en">



      <body >
        <CartContext.Provider value={{
          cart: cart,
          setCart: setCart
        }}>
          <Header openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} cartCount={cart.length} />
          <Sidebar openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />
          {children}


          <Footer />
        </CartContext.Provider>
      </body>
    </html >
  )
}
