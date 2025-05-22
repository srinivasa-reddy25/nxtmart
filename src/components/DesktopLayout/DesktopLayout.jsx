import './index.css'
import DesktopHomepageFooter from '../DesktopHomepageFooter/DesktopHomepageFooter'
import DesktopHomapageNavbar from '../DesktopHomapageNavbar/DesktopHomapageNavbar'

function DesktopLayout({ children ,categoriesdata}) {
    
    return (
        <div className='desktophompagecontainer'>
            <DesktopHomapageNavbar categoriesdata={categoriesdata} />
            <>{children}</>
            <DesktopHomepageFooter />
        </div>
    )
}

export default DesktopLayout