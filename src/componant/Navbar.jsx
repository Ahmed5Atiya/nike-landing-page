import { navLinks } from "../constant";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
function Navbar() {
  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex items-center justify-between max-container">
        <a href="#">
          <img src={headerLogo} alt="logo" />
        </a>
        <ul className="max-lg:hidden  flex   items-center gap-3">
          {navLinks.map((item) => (
            <li key={item.label} className="py-3 px-4  text-gray-400">
              <a
                className="text-lg leading-normal font-montserrat"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="text-white py-2 px-8 max-lg:hidden bg-blue-600 text-[18px] rounded-full font-montserrat">
          Sign in
        </button>
        <div className="hidden max-lg:flex  ">
          <img src={hamburger} alt="Icon" width={30} height={30} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
