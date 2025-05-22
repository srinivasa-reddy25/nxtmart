import './index.css'




import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";



function DesktopHomepageFooter() {
  return (
    <div className='desktophomepagefooterContainer'>
           <div className='footerdetailscontainer'>
             <p className='contactdetails'>
               For any queries, contact +91-9876543210 or mail us help@nxtmart.co.in
             </p>
             <div className='sociallinkscontainer'>
               <a href="#" className='sociallink'><FaFacebookSquare /></a>
               <a href="#" className='sociallink'><FaPinterestSquare /></a>
               <a href="#" className='sociallink'><FaSquareXTwitter /></a>
               <a href="#" className='sociallink'><FaSquareInstagram /></a>
             </div>
           </div>
           <p className='copyrighttext'>Copyright © 2023 NxtMart Grocery Supplies Pvt Ltd</p>
         </div>
  )
}

export default DesktopHomepageFooter