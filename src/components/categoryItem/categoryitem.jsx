import './index.css'

import { IoCart } from "react-icons/io5";


const categoryIcons ={ 
    cart: <IoCart /> 
}
const isactive = false

function Categoryitem({ categoryName }) {

    return (
        <div className={` ${isactive ? "categoryitemcontainer activeitemcontainer":"categoryitemcontainer"}`}    >
            <div className='iconContainer'>
                {categoryIcons.cart}
            </div>
            <p className='categoryitemname'>
                {categoryName}
            </p>
        </div>
    )
}

export default Categoryitem