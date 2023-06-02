import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
        <span className="registertitle">REGISTER</span>
        <form className="registerform">
            <label >Username</label>
            <input className="registerinput" type="email"  placeholder="Enter your username..." />
            <label >Email</label>
            <input className="registerinput" type="email"  placeholder="Enter your email..." />
            <label >Password</label>
            <input className="registerinput" type="password" placeholder="Enter your password..." />
            <button className="regisbutton">Register</button>
        </form>
        <button className="loginbutton">
          <Link className="link" to="/login">Login</Link></button>
      
    </div>
  )
}
