import "./sidebar.css"
import imgz from "./photo.jpg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img className="sbimg" src={imgz} alt="Profiler" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus, dolore? Totam dolorem fugiat,
            necessitatibus rerum quibusdam impedit.
            Magnam delectus veritatis, odio,
            nam ducimus accusamus hic consequuntur 
            dolore nihil architecto inventore?</p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sblist">
            <li className="sblistitem" >Life</li>
            <li className="sblistitem" >Music</li>
            <li className="sblistitem" >Style</li>
            <li className="sblistitem" >Sports</li>
            <li className="sblistitem" >Tech</li>
            <li className="sblistitem" >Cinema</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW</span>
        <div className="sbsocial">
            <i className="sbicon fa-brands fa-facebook"></i>
            <i className="sbicon fa-brands fa-instagram"></i>
            <i className="sbicon fa-brands fa-linkedin"></i>
            <i className="sbicon fa-brands fa-twitter"></i>
            <i className="sbicon fa-brands fa-stack-overflow"></i>
            <i className="sbicon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  )
}
