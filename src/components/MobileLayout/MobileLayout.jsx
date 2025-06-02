import './index.css'

import MobileFooter from '../MobileFooter/MobileFooter'



function MobileLayout({ children }) {
    return (
        <div className='Homepagecontainer'>
            <>
                {children}
            </>
            <MobileFooter />
        </div>
    )
}

export default MobileLayout