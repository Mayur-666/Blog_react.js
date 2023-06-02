import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"
import img from "../../TopBar/download.jpg"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingswrapper">
            <div className="settingstitle">
                <span className="titleupdate">Update account</span>
                <span className="titledelete">Delete account</span>
            </div>
            <form className="settingsform">
                <label>Profile Picture</label>
                <div className="settingspp">
                    <img src={img} alt="Profilpic" />
                    <label htmlFor="fileinput">
                        <i className="ppicon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}} />
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Sarah" />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Sarah@gmail.com" />
                <label htmlFor="">Password</label>
                <input type="password"/>
                <button className="settingssubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
