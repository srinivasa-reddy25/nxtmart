import './index.css'
import { useContext } from 'react'
import BuildContext from '../../context'

function Itemscard({ eachproductdata }) {
    const { AddItemTocart, removeFromCart } = useContext(BuildContext)


    return (
        <div className='productcard'>
            <div className='imnagecontainer'>
                <img src={eachproductdata.image} alt="" className='productimage' />
            </div>
            <div className='contentcontainer'>
                <p className='productname'>{eachproductdata.name.slice(0, 12)}</p>
                <p className='productquatity'>{eachproductdata.weight}</p>
                <div className='priceandAddbtnContainer'>
                    <p className='productPrice'>{eachproductdata.price}</p>
                    {
                        !eachproductdata.quantity > 0 ? <button className='productAddbtn' onClick={() => (AddItemTocart(eachproductdata))}>Add</button>
                            :
                            <div className='addandremovebuttononmainpage'>
                                <a type='button' className='removebuttonmainpage' onClick={() => (removeFromCart(eachproductdata))}>-</a>
                                <p className='quantitymainpage'>{eachproductdata.quantity}</p>
                                <a type='button' className='addbuttonmainpage' onClick={() => (AddItemTocart(eachproductdata))}>+</a>
                            </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Itemscard