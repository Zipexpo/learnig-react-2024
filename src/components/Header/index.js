import logo from "../../images/logo.png";
import "./header.css";

export default function Header () {
    return <div className="header">
        <img className="logo" src={logo}/>
        <div className="app-name">Will-do</div>
    </div>
}