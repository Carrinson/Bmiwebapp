import { Link } from "react-router";
import SideBar from "../components/SideBar";

function Dashboard() {
    return (  

        <>
            <SideBar/>
            <div className="dshboard-container">
                    <div className="dsh-heading">
                        <p id="userName" className="name"> Welcome</p>
                        <h1 className="dsh-title">Fola</h1>
                    </div>

 

            </div>
        </>
    );
}

export default Dashboard;