import { col1, col2, col3, col4, colTitles, icons, text } from "../utils/footerData";
import logo from "../assets/images/Logo.webp";

const Footer = () => {
  return <footer className="test min-h-[30vh] bg-sky-900 text-white pb-12">
      <div className="align-center pt-6 grid grid-cols-1 lg:grid-cols-5 gap-6 place-content-center">
        <div className="w-[150px] h-[150px]">
          <img src={logo} alt="Logo footer" className="w-full h-full object-cover"/>
        </div>
        <div className="w-full h-full">{text}</div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="align center text-center capitalize mt-12 text-xl">
        <p>Shadow - {new Date().getFullYear()}</p>
      </div>
  </footer>
}

export default Footer;