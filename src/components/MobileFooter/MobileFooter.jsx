import './index.css'

import { FiHome } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom'

import { useContext } from 'react';
import BuildContext from '../../context';

import { useNavigate, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'


function MobileFooter() {
    const { cart } = useContext(BuildContext)
    const numberofitems = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
    }
        , 0);
    const navigate = useNavigate()
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
        return <Navigate to="/login" />
    }
    const onclickinglogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }
    return (
        <div className='navbarContainer'>
            <Link to="/" className='homeLink linkactive'>
                <FiHome />
            </Link>
            <Link to="/cart" className='cartLink'>
                {numberofitems === 0 ? null
                    : <div className='mobilenumberofitemscontainer'>
                        <span className='numberofitems'>{numberofitems}</span>
                    </div>
                }
                <FiShoppingCart />
            </Link>
            <Link to="/login" className='logoutLink' onClick={() => (onclickinglogout())}>
                <TbLogout2 />
            </Link>
        </div>
    )
}

export default MobileFooter