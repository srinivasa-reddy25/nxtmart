import './index.css'

function Itemscard({ eachproductdata }) {
    return (
        <div className='productcard'>
            <div className='imnagecontainer'>
                <img src={eachproductdata.image} alt="" className='productimage' />
            </div>
            <div className='contentcontainer'>
                <p className='productname'>{eachproductdata.name.slice(0,12)}</p>
                <p className='productquatity'>{eachproductdata.weight}</p>
                <div className='priceandAddbtnContainer'>
                    <p className='productPrice'>{eachproductdata.price}</p>
                    <button className='productAddbtn'>Add</button>
                </div>

            </div>

        </div>
    )
}

export default Itemscard