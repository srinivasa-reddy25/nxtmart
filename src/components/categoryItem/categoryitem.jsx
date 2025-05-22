import './index.css'

import { IoCart } from "react-icons/io5";
import { useContext } from 'react'

const categoryIcons ={ 
    cart: <IoCart /> 
}

import  BuildContext  from '../../context'

function Categoryitem({ categoryName }) {

    const { activeCategory, setActiveCategory } = useContext(BuildContext)

    const onclickingcategoryItem=()=>{
        setActiveCategory(categoryName)
    }
    const categoryId = categoryName.toLowerCase().replace(/\s+/g, '-');

    return (
        <a href={`#${categoryId}`} className={` ${(activeCategory===categoryName) ? "categoryitemcontainer activeitemcontainer":"categoryitemcontainer"}`} onClick={onclickingcategoryItem} >
            <div className='iconContainer'>
                {categoryIcons.cart}
            </div>
            <p className='categoryitemname'>
                {categoryName}
            </p>
        </a>
    )
}

export default Categoryitem