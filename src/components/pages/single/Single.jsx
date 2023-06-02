import Sidebar from "../../sidebar/Sidebar";
import Singlepost from "../../singlePost/Singlepost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
        <Singlepost />
        <Sidebar />
    </div>
  )
}
