import './index.css'

import Categoryitem from '../categoryItem/categoryitem'
import Maincontaineritems from '../MaincontainerItems/maincontaineritems'



function Mobilehomepage({ categoriesdata }) {


    return (
        <>
            <div className='categoriesContainer'>
                <Categoryitem categoryName={"All"} />
                {categoriesdata.map((eachcat, index) => {
                    return <Categoryitem categoryName={eachcat.name} key={index} />
                })}
            </div>
            <div className='mainBody'>
                {/* <Maincontaineritems categorydata={categoriesdata[0]}/> */}
                {categoriesdata.map((eachitem, index) => {
                    return <Maincontaineritems categorydata={eachitem} key={index} />
                })}
            </div>
        </>
    )
}

export default Mobilehomepage