import { Link } from "react-router";

function Signup() {

    return (
    <>
                     <div className="signup-container">
            <h1 className="Title"> Sign-Up </h1>
            <div className="sign-up">
              <div className="email">
                <p>Full Name</p>
                <input id="fullname" type="text" />
              </div>
              <div className="username">
                <p>Username</p>
                <input id="username" type="password" />
              </div>
              <div className="email">
                <p>Email</p>
                <input id="email" type="password" />
              </div>
              <div className="password">
                <p>Password</p>
                <input id="password" type="password" />
              </div>
            </div>
              <div className='btom'>
                <Link to='/'>
                  <button className='btn'>Log-in</button>
                </Link>
                <Link to= '/signup'>
                  <button className='btn'>Sign-up</button>
                </Link>
              </div>
        </div>  
    </>

    );
}

export default Signup;