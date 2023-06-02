import "./header.css"
import imgs from "./wallpaper.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headertitle">
            <span className="headertitlesm">React & Node</span>
            <span className="headertitlebl">Blog</span>
        </div>
        <img className="headerimg" src={imgs} alt="header-back" />
    </div>
  )
}
