import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.webp";
import { ContactRound, MapPinHouse, Phone, UserRound } from "lucide-react";

const Header = () => {
  return (
	<header className="">
    <div className="">
      <div className="">
        <Link to="/" className="">
          <div className="">
            <img src={logo} alt=""></img>
          </div>
          <p className="">HexaTrip</p>
        </Link>
      </div>
      <div className="">
        <Link to="/agencies" className="">
            <MapPinHouse size="" className=""/>
            <p className="">Our agencies</p>
        </Link>
        <Link to="/advisors" className="">
            <UserRound size="" className=""/>
            <p className="">Our advisors</p>
        </Link>
        <Link to="/hotline" className="">
            <Phone size="" className=""/>
            <p className="">+33301254876</p>
        </Link>
        <Link to="/profile" className="">
            <ContactRound size="" className=""/>
            <p className="">Your account</p>
        </Link>
      </div>
    </div>
  </header>
  )
}

export default Header;