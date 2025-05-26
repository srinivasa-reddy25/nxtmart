import './index.css'

import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { FaRegUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


function LoginPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const [errorMsgText, setErrorMsgText] = useState('')

    const onsubmitsuccess = (jwtToken) => {
        Cookies.set('jwt_token', jwtToken, { expires: 1 })
        console.log(jwtToken)
        navigate('/', { replace: true })
    }

    const onsubmitfailure = (errorMsg) => {
        setErrorMsg(true)
        setErrorMsgText(errorMsg)
    }

    const onsubmitingform = async (e) => {

        setErrorMsg(false)
        setErrorMsgText('')
        e.preventDefault()
        const url = 'https://apis.ccbp.in/login'
        const details = {
            username,
            password
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(details)
        }
        const response = await fetch(url, options)
        const jsondata = await response.json()
        if (response.ok === true) {
            onsubmitsuccess(jsondata.jwt_token)
        }
        else {
            onsubmitfailure(jsondata.error_msg)
        }

    }

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
        return <Navigate to="/" />
    }

    return (
        <div className='Loginpagecontainer'>
            <div className='loginpagelogincredentialscontainer'>
                <h1>Login credentials</h1>
                <p>username : rahul</p>
                <p>password : rahul@2021</p>
            </div>
            <div className='loginpagebackgroundimagecontainer'>
                <img className='loginpagebackgroundimage' src="https://res.cloudinary.com/da98b7kad/image/upload/v1747671536/8faf00be5eb69a93a65afbe3d74139ee52d7c888_hlrh9n.jpg" alt="Background" />
                <img className='loginpagebackgroundimage' src="https://res.cloudinary.com/da98b7kad/image/upload/v1747671536/17264c25b2390e63bf21e8f09205a575650c9b3f_wgolmy.jpg" alt="Background" />
                <img className='loginpagebackgroundimage' src="https://res.cloudinary.com/da98b7kad/image/upload/v1747671536/76cc17ce61edba1f611c2f04d50ed2fb0aa0d69c_zr7kwb.jpg" alt="Background" />
                <img className='loginpagebackgroundimage' src="https://res.cloudinary.com/da98b7kad/image/upload/v1747671536/df41397809637783efe77643f73b5262ba12bbea_rfbuj6.jpg" alt="Background" />
            </div>
            <div className='loginformcontainer'>
                <img src="https://res.cloudinary.com/da98b7kad/image/upload/v1747671535/6fad20838855997d164dd88d885fad87bdfa3be6_fmnbah.png" alt="logo" className='loginformlogo' />
                <form action="" className='loginform' onSubmit={onsubmitingform}>
                    <div className='loginformcontainerinput username-input-wrapper'>
                        <label htmlFor="username" className='usernamelable'>Username</label>
                        <span className="input-icon"><FaRegUserCircle /></span>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className='usernameinput'
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='loginformcontainerinput password-input-wrapper'>
                        <label htmlFor="password" className='passwordlable'>Password</label>
                        <span className="input-icon"><FaLock /></span>
                        <input
                            type={!showPassword ? "password" : "text"}
                            id="password"
                            className='passwordinput'
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='showpasswordcontainer' >
                        <input type="checkbox" className='logincheckbox' onChange={() => (setShowPassword((prev) => (!prev)))} />
                        <p className='loginshowpasswordtext'>Show Password</p>
                    </div>
                    <button type="submit" className='loginbtn'>Login</button>
                    {errorMsg && <p className='loginerror'>{errorMsgText}</p>}
                </form>
            </div>
        </div>
    )
}


export default LoginPage