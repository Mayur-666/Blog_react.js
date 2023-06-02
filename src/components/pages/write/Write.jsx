import "./write.css"
import imgs from "../../post/b.jpg"

export default function Write() {
  return (
    <div className="write">
        <img className="writeimg" src={imgs} alt="" />
        <form className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                    <i className=" writeicon fa-solid fa-plus "></i> {/* fa-bounce */}
                </label>
                <input type="file" id="fileinput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeinput" autoFocus={true} />
            </div>
            <div className="writeformgroup">
                <textarea className="writeinput writetext " type="text" placeholder="Tell your story..." ></textarea>
            </div>
            <button className="writesubmit" >Publish</button>
        </form>
    </div>
  )
}
