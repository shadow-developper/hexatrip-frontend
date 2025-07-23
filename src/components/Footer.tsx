import { col1, col2, col3, col4, colTitles, icons, text } from "../utils/footerData";
import logo from "../assets/images/Logo.webp";

const Footer = () => {
  return <footer className="min-h-[30vh] bg-sky-900 text-white pb-12">
      <div className="align-center pt-6 grid grid-cols-1 lg:grid-cols-5 gap-6 place-items-center">
        <div className="w-[150px] h-[150px]">
          <img src={logo} alt="Logo footer" className="w-full h-full object-cover"/>
        </div>
        <div className="w-full h-full">{text}</div>
        <div className="w-full h-full flex flex-col md:flex-row lg:flex-col justify-between items-start gap-7">
          <div className="flex flex-col items-start">
            <span>Safe Payement</span>
            <img src={icons.stripe} alt="Stripe logo" className="h-[40px]"/>
          </div>
          <div className="">
            <span>Accepted Payement Types</span>
            <div className="flex justify-start gap-x-4 flex-wrap">
              <img src={icons.visa} alt="Visa logo" className="h-[40px]"/>
              <img src={icons.master} alt="Master logo" className="h-[40px]"/>
              <img src={icons.bitcoin} alt="Bitcoin logo" className="h-[40px]"/>
              <img src={icons.amex} alt="Amex logo" className="h-[40px]"/>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span>Our parteners</span>
            <img src={icons.iata} alt="Iata logo" className="h-[40px]"/>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="align center text-center capitalize mt-12 text-xl">
        <p>Shadow - {new Date().getFullYear()}</p>
      </div>
  </footer>
}

export default Footer;