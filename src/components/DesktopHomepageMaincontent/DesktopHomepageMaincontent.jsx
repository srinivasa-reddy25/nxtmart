import './index.css'




import DesktopsidebarcategoryItem from '../DesktopsidebarcategoryItem/DesktopsidebarcategoryItem'
import DesktopProductscontainer from '../DesktopProductscontainer/DesktopProductscontainer'



function DesktopHomepageMaincontent({categoriesdata}) {
    
    return (
        <div className='desktophomepageMainContent'>
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
            </div>
        </div>
    )
}

export default DesktopHomepageMaincontent