import './index.css'

import DesktopHomapageNavbar from '../DesktopHomapageNavbar/DesktopHomapageNavbar'


function DesktopLayout({ children, categoriesdata }) {

    return (
        <div className='desktophompagecontainer'>
            <>
                <DesktopHomapageNavbar categoriesdata={categoriesdata} />
                {children}
            </>
        </div>
    )
}

export default DesktopLayout