import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [fullname,setfullName] = useState("");
  const [username,setUsername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const Navigate = useNavigate();



  const saveuser=() =>{
    if (username != "" && fullname != "" && email != "" && password != ""){
        localStorage.setItem("fname",fullname )
        localStorage.setItem("playerid", username)
        localStorage.setItem("uemail", email)
        localStorage.setItem("upass", password)

     

        alert("Signed in")
        Navigate("/login")
      }
    else(
      alert("sign in failed try again")
    )
  }


    return (

    <>
    <div className="log-sign_container">

          <div className="signup-container">
            <h1 className="Title"> Sign-Up </h1>
            <div className="sign-up">
              <div className="email">
                <p>Full Name</p>
                <input value={fullname} onChange={(e)=>{setfullName(e.target.value)}} id="fullname" type="text" />
              </div>
              <div className="username">
                <p>Username</p>
                <input value={username} onChange={(e)=>{setUsername(e.target.value)}} id="username" type="text" />
              </div>
              <div className="email">
                <p>Email</p>
                <input value={email} onChange={(e)=>{setemail(e.target.value)}} id="email" type="email" />
              </div>
              <div className="password">
                <p>Password</p>
                <input value={password} onChange={(e)=>{setpassword(e.target.value)}} id="password" type="password" />
              </div>
            </div>
              <div className='btom'>
                <Link to='/login'>
                  <button className='btn'>Log-in</button>
                </Link>

                  <button onClick={saveuser} className='btn'>Sign-up</button>

              </div>
        </div>  
    </div>
    </>

    );
}

export default Signup;