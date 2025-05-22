import './index.css'

import DesktopProductitem from '../DesktopProductitem/DesktopProductitem'
import { IoIosArrowForward } from "react-icons/io";

function DesktopProductscontainer({ categorydata }) {
    const categoryId = categorydata.name.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className='desktopcategoriesproductcontainer' id={categoryId}>
            <div className='desktopProdcutcontainerheading'>
                <p className='productscategoryheading'>{categorydata.name} <IoIosArrowForward className='desktopproductcardarrow' /></p>
            </div>
            <div className='desktopProductscontainer'>
                {categorydata.products.map((eachProduct, index) => {
                    return <DesktopProductitem eachproductdata={eachProduct} key={index} />
                })}
            </div>
        </div>
    )
}

export default DesktopProductscontainer