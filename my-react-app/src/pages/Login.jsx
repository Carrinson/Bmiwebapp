import { Link } from 'react-router';
import '../components/login-signup.css';

function Login () {
    return (

    <>
    <div className='log-sign_container'>

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

                  <Link to= '/'>
                    <button className='btn'>Dasboard</button>
                  </Link>
                  
                </div>

        </div>  
    </div>
    </>
    );
}

export default Login;