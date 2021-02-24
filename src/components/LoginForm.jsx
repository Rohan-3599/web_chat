import React,{useState} from 'react'
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './formstyles.css'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
const projectID = 'd7b047cf-f476-4bfd-98da-edd77240b797';
const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    
}));
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
    
        try {
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });
    
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
    
          window.location.reload();
        } catch (err) {
            setError('Please Enter Correct credentials')
        }
      };
      const classes = useStyles();
    return (
    <div className="limiter">
        <div className="container-login100">
        <div className="wrap-login100">
        <form className="login100-form validate-form" onSubmit={handleSubmit}>
        <span className="login100-form-title p-b-26">
						Login
					</span>
                    <span className="btn-show-pass"> 
                            <Avatar className={classes.avatar} variant="circular">
                            <LockOutlinedIcon />
                            </Avatar>
                            
						
                            </span>
						
				
                    <div className="wrap-input100 validate-input" data-validate = "Enter Username">
                        <input className="input100" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
                        <span className="focus-input100" data-placeholder="Username"></span>
                    </div>
                    <div className="wrap-input100 validate-input" >
						
						<input className="input100" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
						<span className="focus-input100" ></span>
					</div>
                    <div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" type="submit">
								Login
							</button>
						</div>
					</div>
                    <div className="text-center p-t-115">
						<span className="txt1">
							{error}
						</span>

					</div>
                    <div className="signup">
                    <a className="txt2" href="#">
							Sign Up
					</a>
    </div>
                    
        </form>
        </div>
        </div>
        
    </div>
    )
}

export default LoginForm
