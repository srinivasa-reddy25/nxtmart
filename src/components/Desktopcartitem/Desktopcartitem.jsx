import './index.css'

import { useContext } from 'react'
import BuildContext from '../../context'

function Desktopcartitem({ itemdetails }) {
    const { AddItemTocart, removeFromCart } = useContext(BuildContext)
    return (
        <>
            <div className='Desktopcartitem'>
                <div className='Desktopcartitemcontainer'>
                    <div className='Desktopcartitemimagecontainer'>
                        <img src={itemdetails.image} alt="cart item" className='Desktopcartitemimage' />
                    </div>
                    <div className='Desktopcartitemdetails'>
                        <h1 className='Desktopcartitemname'>{itemdetails.name}</h1>
                        <p className='Desktopcartitemquantity'>{itemdetails.weight}</p>
                        <p className='Desktopcartitemprice'>{itemdetails.price}</p>
                    </div>
                </div>

                <div className='Desktopaddandremovebuttoncontainer'>
                    <div className='Desktopaddandremovebutton'>
                        <a type='button' className='Desktopremovebutton' onClick={() => (removeFromCart(itemdetails))}>-</a>
                        <p className='Desktopquantity'>{itemdetails.quantity}</p>
                        <a type='button' className='Desktopaddbutton' onClick={() => (AddItemTocart(itemdetails))}>+</a>
                    </div>
                    {/* <button type='button' className='removebutton'>Remove</button> */}
                </div>

            </div>
            <hr className='Desktopcartitemhr' />
        </>

    )
}

export default Desktopcartitem