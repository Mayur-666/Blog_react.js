import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <span className="logintitle">LOGIN</span>
        <form className="loginform">
            <label >Email</label>
            <input className="logininput" type="email"  placeholder="Enter your email..." />
            <label >Password</label>
            <input className="logininput" type="password" placeholder="Enter your password..." />
            <button className="logibutton">Login</button>
        </form>
        <button className="registerbutton">
          <Link className="link" to="/register">Register</Link></button>
      
    </div>
  )
}
