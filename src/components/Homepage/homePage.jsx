import './index.css'

import { useNavigate, Navigate } from 'react-router-dom'

import Cookies from 'js-cookie'

function HomePage() {


    const navigate = useNavigate()

    const onclickinglogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }
    const jwtToken = Cookies.get('jwt_token')
    
    if (jwtToken === undefined) {
        return <Navigate to="/login" />
    }



    return (
        <div>homePage
            <button className="logoutbutton" onClick={onclickinglogout}>LogOut</button>
        </div>

    )
}

export default HomePage