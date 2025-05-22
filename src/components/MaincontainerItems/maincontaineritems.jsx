import './index.css'

import Itemscard from '../ItemsCard/itemscard'
import { IoIosArrowForward } from "react-icons/io";

function Maincontaineritems({ categorydata }) {

    const categoryId = categorydata.name.toLowerCase().replace(/\s+/g, '-');
    
    return (
        <div className='maincontainercatogoryConatiner' id={categoryId}>
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
