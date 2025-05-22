import './index.css'
import { FaArrowLeft } from "react-icons/fa6";
import CartItem from '../CartItem/CartItem';
import BuildContext from '../../context';
import { Link ,useNavigate} from 'react-router-dom'

const samplecartitems = [
    {
        "id": 1,
        "name": "Orange",
        "weight": "1kg",
        "price": "₹100",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg"
    },
    {
        "id": 2,
        "name": "Apple",
        "weight": "1kg",
        "price": "₹200",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_2.jpg"
    },
    {
        "id": 1,
        "name": "Orange",
        "weight": "1kg",
        "price": "₹100",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg"
    },
    {
        "id": 2,
        "name": "Apple",
        "weight": "1kg",
        "price": "₹200",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_2.jpg"
    },
    {
        "id": 1,
        "name": "Orange",
        "weight": "1kg",
        "price": "₹100",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg"
    },
    {
        "id": 2,
        "name": "Apple",
        "weight": "1kg",
        "price": "₹200",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_2.jpg"
    },
    {
        "id": 1,
        "name": "Orange",
        "weight": "1kg",
        "price": "₹100",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg"
    },
    {
        "id": 2,
        "name": "Apple",
        "weight": "1kg",
        "price": "₹200",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_2.jpg"
    },
    {
        "id": 1,
        "name": "Orange",
        "weight": "1kg",
        "price": "₹100",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg"
    },
    {
        "id": 2,
        "name": "Apple",
        "weight": "1kg",
        "price": "₹200",
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_2.jpg"
    },
]


import { FaOpencart } from "react-icons/fa";

import { useContext } from 'react';


function Mobilecart() {

    const navigate = useNavigate()

    const { cart, iscartempty,clearCart } = useContext(BuildContext)
    const numberofitems = cart.reduce((total, product) => total + product.quantity, 0)
    const totalprice = cart.reduce((total, product) => total + parseInt(product.price.slice(1,)) * (product.quantity), 0)


    const OnclickingCheckoutbutton=()=>{
        navigate("/payment")
        clearCart()
    }

    return (
        <>{
            iscartempty ? <div className='Desktopemptycartcontainer'>

                <FaOpencart />
                <p className='Desktopemptycarttext'> Your Cart is Empty</p>
            </div>
                :
                <div className='mobilecartcontainer'>
                    <div className='cartheadingcontainer'>
                        <Link to='/' className='backbutton'>
                            <FaArrowLeft />
                        </Link>
                        <p className='cartheading'>Checkout</p>
                    </div>
                    <div className='cartitemscontainer'>
                        <h1 className='cartitemsheading'>{`Items (${numberofitems})`}</h1>
                        <div className='cartitems'>
                            {cart.map((eachitem) => (
                                <CartItem key={eachitem.id} itemdetails={eachitem} />
                            ))}
                        </div>
                    </div>
                    <div className='totalpricecontainer'>
                        <h1 className='totalprice'>{`Items (${numberofitems}) : ${totalprice}`}</h1>
                        <button type='button' className='placeorderbutton' onClick={OnclickingCheckoutbutton}>checkout</button>
                    </div>
                </div>
        }
        </>

    )
}

export default Mobilecart