import './index.css'

import DesktopHomapageNavbar from '../DesktopHomapageNavbar/DesktopHomapageNavbar'


function DesktopLayout({ children }) {

    return (
        <div className='desktophompagecontainer'>
            <>
                <DesktopHomapageNavbar  />
                {children}
            </>
        </div>
    )
}

export default DesktopLayout