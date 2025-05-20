import './index.css'


import { useNavigate, Navigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';

import Cookies from 'js-cookie'



import Mobilehomepage from '../Mobilehomepage/mobilehomepage'
import Desktophomepage from '../Desktophomepage/desktophomepage'

import { useEffect, useState } from 'react';


function HomePage() {

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const navigate = useNavigate()
    const [categoriesdata,setcategoriesdata]=useState([]);

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
        return <Navigate to="/login" />
    }

    const onclickinglogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }

    useEffect(()=>{
        const url="https://apis2.ccbp.in/nxt-mart/category-list-details"
        const fetchingData=async()=>{
            const response =await fetch(url)
            const jsondata=await response.json()
            const categoriesdata=jsondata.categories
            setcategoriesdata(categoriesdata)
        }
        fetchingData()
    },[])



    return (
    <>
        {isMobile ? 
        <Mobilehomepage categoriesdata={categoriesdata} onclickinglogout={onclickinglogout}/>
        : <Desktophomepage categoriesdata={categoriesdata} onclickinglogout={onclickinglogout}/>
        }
    </>
    )


}

export default HomePage







