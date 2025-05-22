import './index.css'
import { useContext } from 'react'
import BuildContext from '../../context'

function CartItem({itemdetails}) {

    const {AddItemTocart ,removeFromCart} = useContext(BuildContext)

  return (
    <div className='cartitemcontainer'>
        <div className='cartitemimagecontainer'>
            <img src={itemdetails.image} alt="cart item" className='cartitemimage' />
        </div>
        <div className='cartitemdetails'>
            <h1 className='cartitemname'>{itemdetails.name}</h1>
            <p className='cartitemweight'>{itemdetails.weight}</p>
            <p className='cartitemprice'>{itemdetails.price}</p>
        </div>
        <div className='addandremovebuttoncontainer'>
            <div className='addandremovebutton'>
                <a type='button' className='removebutton' onClick={()=>(removeFromCart(itemdetails))}>-</a>
                 <p className='quantity'>{itemdetails.quantity}</p>
                <a type='button' className='addbutton' onClick={()=>(AddItemTocart(itemdetails))}>+</a>
            </div>
            {/* <button type='button' className='removebutton'>Remove</button> */}
        </div>
    </div>
  )
}

export default CartItem