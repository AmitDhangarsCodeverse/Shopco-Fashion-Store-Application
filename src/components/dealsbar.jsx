import { useState } from "react";
import { Link } from "react-router-dom";

const DealBar = () => {
 const [closedealbar,setclosedealbar] = useState(true);
 return (<>
    {closedealbar && <div className="bg-black flex justify-between items-center xs:p-[4px] sm:p-[4px] md:p-[5px] lg:p-1.5">
   <p className=""></p>
   <p className="signup-msg text-white">Sign up and get 20% of to your first order. <Link to={'/signup'} ><a className="underline cursor-pointer">Sign Up Now</a> </Link></p>
   <i class="ri-xrp-line text-white cursor-pointer xs:mr-3" onClick={()=>setclosedealbar(!closedealbar)}></i>
  </div>}
 </>);
}

export default DealBar;