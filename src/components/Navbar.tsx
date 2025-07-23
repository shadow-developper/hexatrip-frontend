import { LinkDesktop, LinkMobile } from ".";

const Navbar = () => {
  return (
    <nav className="border-t-2 border-b-2">
      <div className="align-center">
        <LinkMobile />
        <LinkDesktop />
      </div>
    </nav>
  );
};

export default Navbar;