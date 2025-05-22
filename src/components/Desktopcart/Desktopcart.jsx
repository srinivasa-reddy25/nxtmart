import './index.css'

import Desktopcartitem from '../Desktopcartitem/Desktopcartitem'
import { FaOpencart } from "react-icons/fa";
import BuildContext from '../../context';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



function Desktopcart() {
    const navigate = useNavigate()
    const { cart, iscartempty, clearCart } = useContext(BuildContext)
    const numberofitems = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
    }
        , 0);
    const totalprice = cart.reduce((accumulator, currentValue) => {
        return accumulator + (parseInt(currentValue.price.slice(1,)) * currentValue.quantity);
    }, 0);

    return (
        <>{
            iscartempty ? <div className='Desktopemptycartcontainer'>
                <FaOpencart />
                <p className='Desktopemptycarttext'> Your Cart is Empty</p>
            </div>
                :
                <div className='desktopcart'>
                    <h1 className='desktopcartheading'>Items</h1>
                    <div className='desktopcartitems'>
                        <div className='desktopcartitemslist'>
                            {cart.map((eachitem) => <Desktopcartitem key={eachitem.id} itemdetails={eachitem} />)}
                        </div>
                        <div className='desktopcarttotal'>
                            <h1 className='desktopcarttotalheading'>{`Total (${numberofitems} items): ₹${totalprice}`}</h1>
                            <button className='desktopcartcheckout' onClick={() => {
                                navigate("/payment")
                                clearCart()
                            }}>Checkout</button>
                        </div>
                    </div>
                </div>
        }
        </>

    )
}

export default Desktopcart