import './Login.css';
import { Link } from 'react-router';

function Login () {
    return (

    <>
             <div className="login-container">
            <h1 className="Title"> Login </h1>
            <div className="login">
              <div className="email">
              <p>Email</p>
              <input id="email" type="text" />
              </div>
              <div className="email">
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

export default Login;