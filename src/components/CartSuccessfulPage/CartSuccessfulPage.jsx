import './index.css'
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

function CartSuccessfulPage() {
    const navigate = useNavigate()

    return (
        <div className='cartsuccessfulpage'>
            <div className='cartsuccessfulpagecontainer'>
                <div className='iconContainersuccess'>
                    <FaCheck />
                </div>
                <h1 className='successfultext'>
                    Payment Successful
                </h1>
                <p className=''>Thank you for Ordering.</p>
                <p>Your payment is successfully completed.</p>
                <button className='returntohomebutton' onClick={()=>(navigate('/', { replace: true }))}>Return to HomePage</button>
            </div>
        </div>
    )
}

export default CartSuccessfulPage