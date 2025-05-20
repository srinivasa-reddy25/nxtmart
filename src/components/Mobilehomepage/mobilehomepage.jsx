import './index.css'


import { FiHome } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";


import Categoryitem from '../categoryItem/categoryitem'
import Maincontaineritems from '../MaincontainerItems/maincontaineritems'

function Mobilehomepage({categoriesdata,onclickinglogout}) {
  
  return (
     <div className='Homepagecontainer'>
            <div className='categoriesContainer'>
                <Categoryitem categoryName={"All"}/>
                {categoriesdata.map((eachcat,index)=>{
                    return  <Categoryitem categoryName={eachcat.name} key={index}/>
                })}
            </div>
            <div className='mainBody'>
                 {/* <Maincontaineritems categorydata={categoriesdata[0]}/> */}
                {categoriesdata.map((eachitem,index)=>{
                    return <Maincontaineritems categorydata={eachitem} key={index}/>
                })}
            </div>  
            <div className='navbarContainer'>
                <a href="#" className='homeLink linkactive'><FiHome /></a>
                <a href="#" className='cartLink'><FiShoppingCart /></a>
                <a href="#" onClick={onclickinglogout} className='logoutlink'><TbLogout2 /></a>
            </div>
        </div>
  )
}

export default Mobilehomepage