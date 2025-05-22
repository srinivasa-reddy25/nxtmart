import './index.css'

import { useContext } from 'react'

import BuildContext from '../../context'

function DesktopsidebarcategoryItem({ categoryName }) {


    const { activeCategory, setActiveCategory } = useContext(BuildContext)

    const onclickingcategoryItemDesktop = () => {
        setActiveCategory(categoryName)
    }
    const categoryId = categoryName.toLowerCase().replace(/\s+/g, '-');

    return (
        <a href={`#${categoryId}`} className={`desktopcategorycontainersidebar ${categoryName === activeCategory ? "actuvecategory" : null}`} onClick={onclickingcategoryItemDesktop} >
            <p className='desktopcategoryname'>
                {categoryName}
            </p>
        </a>
    )
}

export default DesktopsidebarcategoryItem