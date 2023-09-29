


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

    window.localStorage.setItem("products", JSON.stringify(cart))

  }, [cart])


  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem("products")))
  }, [])

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
