import './index.css'
// import DesktopHomepageMaincontent from '../DesktopHomepageMaincontent/DesktopHomepageMaincontent'

import './index.css'




import DesktopsidebarcategoryItem from '../DesktopsidebarcategoryItem/DesktopsidebarcategoryItem'
import DesktopProductscontainer from '../DesktopProductscontainer/DesktopProductscontainer'
import DesktopHomepageFooter from '../DesktopHomepageFooter/DesktopHomepageFooter'


import BuildContext from '../../context'
import { useContext } from 'react';
import { ClipLoader } from "react-spinners";


function Desktophomepage({ categoriesdata }) {
  const { isloading, isError } = useContext(BuildContext)

  return (
    <>
      {
        isloading ?
          <div className='loadingcontainer'>
            < ClipLoader
              color={"#36d7b7"}
              loading={isloading}
              size={150}/>
          </div >
          : isError ? <div className='errorcontainer'>
            <img src="https://res.cloudinary.com/da98b7kad/image/upload/v1748101451/Frame_12236_kxv31p.jpg" alt="" />
          </div>
            :
            < div className='desktophomepageMainContent' >
              <div className='sidebarcontainer'>
                <h1 className='sidebarheading'>Categories</h1>
                <div className='sidebarcategorieslist'>
                  <DesktopsidebarcategoryItem categoryName={"All"} />
                  {categoriesdata.map((eachcat, index) => {
                    return <DesktopsidebarcategoryItem categoryName={eachcat.name} key={index} />
                  })}
                </div>
              </div>
              <div className='desktopproductsdisplaycontainer'>
                {categoriesdata.map((eachitem, index) => {
                  return <DesktopProductscontainer categorydata={eachitem} key={index} />
                })}
                <DesktopHomepageFooter />
              </div>

            </div >


      }
    </>


  )

}

export default Desktophomepage
