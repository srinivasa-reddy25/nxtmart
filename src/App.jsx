import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

import BuildContext from './context'

import LoginPage from './components/LoginPage/loginpage'
import NotFound from './components/NotFound/NotFound'
import CartSuccessfulPage from './components/CartSuccessfulPage/CartSuccessfulPage'

import Mobilehomepage from './components/Mobilehomepage/mobilehomepage'
import Mobilecart from './components/Mobilecart/Mobilecart'

import Desktophomepage from './components/Desktophomepage/desktophomepage'
import Desktopcart from './components/Desktopcart/Desktopcart'

import MobileLayout from './components/MobileLayout/MobileLayout';
import DesktopLayout from './components/DesktopLayout/DesktopLayout'

import { useMediaQuery } from 'react-responsive';

// if (!localStorage.getItem('loaclstoredcart')) {
//   localStorage.setItem('loaclstoredcart', JSON.stringify({}));
// }



function App() {

  const [activeCategory, setActiveCategory] = useState("All")
  const [activeNavbar, setActiveNavbar] = useState("home")
  const [iscartempty, setiscartempty] = useState(true)
  const [cart, setCart] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const [categoriesdata, setcategoriesdata] = useState([]);
  const localdata = JSON.parse(localStorage.getItem('loaclstoredcart'));


  const isMobile = useMediaQuery({ maxWidth: 768 });
  const wrap = (Page, Layout, data) => (
    <Layout categoriesdata={data}>
      <Page categoriesdata={data} />
    </Layout>
  );









  const AddItemTocart = (product) => {
    setiscartempty(false);
    if (product.quantity > 0) {
      cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += 1
        }
      })
      setCart([...cart])
    }
    else {
      product.quantity += 1
      setCart([...cart, product]);
    }
  }


  const removeFromCart = (product) => {
    if (cart.reduce((total, product) => total + product.quantity, 0) === 1) {
      setiscartempty(true);
    }

    if (product.quantity === 1) {
      product.quantity -= 1
      setCart(cart.filter(item => item.id !== product.id));
    }
    else if (product.quantity > 0) {
      cart.map((item) => {
        if (item.id === product.id) {
          item.quantity -= 1
        }
      })
      setCart([...cart])
    }
    else {
      setCart(cart.filter(item => item.id !== product.id));
    }
  };
  const clearCart = () => {
    cart.map((item) => {
      item.quantity = 0
    }
    )
    setiscartempty(true);
    setCart([])
  };






  useEffect(() => {
    cart.map((item) => {
      localdata[item.id] = item.quantity;
      localStorage.setItem('loaclstoredcart', JSON.stringify(localdata));
    })
    console.log("cart updated", cart);
  }, [cart])

  const returncartitems = (products) => {
    products.map((product) => {
      if (product.quantity > 0) {
        setiscartempty(false);
        setCart(prev => [...prev, product]);
        // console.log("visited",product)
      }
    })
  }
  


  useEffect(() => {
    const url = "https://apis2.ccbp.in/nxt-mart/category-list-details"
    setIsLoading(true)
    const fetchingData = async () => {
      try {
        const response = await fetch(url)
        const jsondata = await response.json()
        const categoriesdata = await jsondata.categories
        const updatedData = categoriesdata.map((eachitem) => {
          return {
            ...eachitem,
            products: eachitem.products.map((eachitem) => {
              return {
                ...eachitem,
                quantity: localdata[eachitem.id] ? localdata[eachitem.id] : 0,
              }
            })
          }
        }
        )

        setcategoriesdata(updatedData)
        updatedData.map((category) => {
          returncartitems(category.products)
        });
        setIsLoading(false)
        setIsError(false)
      }
      catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    fetchingData()






  }, [])

  // console.log("carttt",cart)


  return (
    <>
      <BuildContext.Provider value={{ activeCategory, setActiveCategory, activeNavbar, setActiveNavbar, cart, setCart, iscartempty, setiscartempty, AddItemTocart, removeFromCart, clearCart, isloading, setIsLoading, isError, setIsError }}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/' element={isMobile ? wrap(Mobilehomepage, MobileLayout, categoriesdata) : wrap(Desktophomepage, DesktopLayout, categoriesdata)}></Route>
            <Route path='/cart' element={isMobile ? wrap(Mobilecart, MobileLayout, categoriesdata) : wrap(Desktopcart, DesktopLayout, categoriesdata)}></Route>
            <Route path="/payment" element={isMobile ? wrap(CartSuccessfulPage, MobileLayout, categoriesdata) : wrap(CartSuccessfulPage, DesktopLayout, categoriesdata)}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BuildContext.Provider>
    </>
  )
}

export default App
