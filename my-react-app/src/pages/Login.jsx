import { Link } from 'react-router';
import '../components/login-signup.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login () {
  const [than,setThan] = useState();
  const [those,setThose] = useState();
  const Navigate = useNavigate();

  
    const validateuser = () =>{
    let name = localStorage.getItem("playerid")
    let pwd = localStorage.getItem("upass")
    console.log({name}, {pwd})
    
    if (name === than && pwd === those){
      Navigate("/")
      alert("signed in")
    }
    else(
      alert("wrong login do not hack(it is easy to hack btw)")

    )
  }

  


    return (

    <>
    <div className='log-sign_container'>

             <div className="login-container">
              <h1 className="Title"> Login </h1>
              <div className="login">
                <div className="email">
                  <p>User name</p>
                    <input type="text" value={than} onChange={(e)=>{setThan(e.target.value)}} id="username"/>
                </div>
                <div className="email">
                  <p>Password</p>
                    <input type="password" value={those} onChange={(e)=>{setThose(e.target.value)}} id="password" />
                </div>
              </div>
                <div className='btom'>

                  <button onClick={validateuser} className='btn'>Login</button>
                 
                 
                  <Link to= '/signup'>
                    <button  className='btn'>Sign-up</button>
                  </Link>

                  
                  
                </div>

        </div>  
    </div>
    </>
    );
}

export default Login;