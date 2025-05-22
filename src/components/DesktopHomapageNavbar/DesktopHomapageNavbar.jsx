import './index.css'

import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom'

import { useNavigate, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function DesktopHomapageNavbar() {

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
    <div className='desktophomepageNavbarcontainer'>
      <div className='logocontainer'>
        <img className='logoimage' src="https://res.cloudinary.com/da98b7kad/image/upload/v1747671535/6fad20838855997d164dd88d885fad87bdfa3be6_fmnbah.png" alt="logo" />
      </div>
      <ul className='desktophomepageNavbar'>
        <li className='HomeNav'>
          <Link to="/" className='homelink'>Home </Link>
        </li>
        <li className='cartnav'>
          <Link to="/cart" className='cartlink'>cart </Link>
        </li>
        <li className='LogoutNavcontainer'>
          <Link to="/" className='desktoplogoutlink' onClick={() => (onclickinglogout())}> <TbLogout2 /> Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default DesktopHomapageNavbar