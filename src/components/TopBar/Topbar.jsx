import "./topbar.css";
import download from "./download.jpg"
import { Link } from "react-router-dom";

export default function Topbar(props) {
  return (
    <div className="top">
      <div className="topleft">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        <i className="topicon fa-brands fa-linkedin"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-stack-overflow"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplist-item">
            <Link className="link" to="/" >HOME</Link>
          </li>
          <li className="toplist-item">
            <Link className="link" to="/" >ABOUT</Link>
          </li>
          <li className="toplist-item">
            <Link className="link" to="/" >CONTACT</Link>
          </li>
          <li className="toplist-item">
            <Link className="link" to="/write" >WRITE</Link>
          </li>
          <li className="toplist-item">{ props.userf && "LOGOUT" }</li>
        </ul>
      </div>
      <div className="topright">
        {
          props.userf ? 
          (<img className="topimg" src={download} alt="Profile" />)
          :
          (
            <ul className="toplist">
              <li className="toplist-item">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="toplist-item">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i className="topsearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
