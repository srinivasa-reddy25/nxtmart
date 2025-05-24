import './index.css'

import Categoryitem from '../categoryItem/categoryitem'
import Maincontaineritems from '../MaincontainerItems/maincontaineritems'

import { ClipLoader } from "react-spinners";

import BuildContext from '../../context'
import { useContext } from 'react';

function Mobilehomepage({ categoriesdata }) {
    const { isloading, isError } = useContext(BuildContext)
    
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
                <div className='loadingcontainer' >
                    <ClipLoader
                        color={"#36d7b7"}
                        loading={isloading}
                        // cssOverride={override}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>

                {categoriesdata.map((eachitem, index) => {
                    return <Maincontaineritems categorydata={eachitem} key={index} />
                })}
            </div>
        </>
    )
}

export default Mobilehomepage