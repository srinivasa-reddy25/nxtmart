import './index.css'

import { useContext } from 'react'
import BuildContext from '../../context'

function DesktopProductitem({ eachproductdata }) {

    const { AddItemTocart, removeFromCart } = useContext(BuildContext)

    return (
        <div className='desktopproductcard'>
            <div className='desktopimnagecontainer'>
                <img src={eachproductdata.image} alt="" className='desktopproductimage' />
            </div>
            <div className='desktopcontentcontainer'>
                <div className='desktoppriceandAddbtnContainer'>
                    <p className='desktopproductname'>{eachproductdata.name.slice(0, 12)}</p>
                    <p className='desktopproductquatity'>{eachproductdata.weight}</p>
                    <p className='desktopproductPrice'>{eachproductdata.price}</p>
                </div>
                <div className='desktopproductaddbtncontainer'>
                    {!eachproductdata.quantity > 0 ? <button className='desktopproductAddbtn' onClick={() => (AddItemTocart(eachproductdata))}>Add</button>
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

export default DesktopProductitem