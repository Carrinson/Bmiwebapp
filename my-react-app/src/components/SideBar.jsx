import { Link } from "react-router";
import Bmi from "../pages/Bmi";
function SideBar() {
    return ( 
        <>
            <div className="side-bar-con">
                <ul className="side-bar">
                        <Link to= '/'>
                            <button className="side_btn">Profile</button>
                        </Link>
                    
                    
                    
                    <Link to='/Bmi'>
                        <button className="side_btn">BMI</button>
                    </Link>

                    <button className="side_btn">History</button>
                    {/* <button className="side_btn">Settings</button> */}
                    <span>--------------</span>
                    {/* <li>Profile</li> */}
                    <li>Settings</li>
                    <Link to='/login'>
                        <li>Sign-out</li>
                    </Link>

                    {/* <li>Settings</li> */}
                </ul>
            </div>
        </>
     );
}

export default SideBar;