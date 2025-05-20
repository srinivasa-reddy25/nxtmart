import './index.css'

import Itemscard from '../ItemsCard/itemscard'
import { IoIosArrowForward } from "react-icons/io";

function Maincontaineritems({ categorydata }) {
    return (
        <div className='maincontainercatogoryConatiner'>
            <div className='productcontainerHeader'>
                <p className='prodcutcontainerheading'>{categorydata.name} <IoIosArrowForward className='productcardarrow'/></p>
                <a href="#" className='categorycontainerviewbtn'> View all</a>
            </div>
            <div className='productscontainer'>
                {categorydata.products.map((eachProduct, index) => {
                    return <Itemscard eachproductdata={eachProduct} key={index} />
                })}
            </div>

        </div>
    )
}

export default Maincontaineritems
