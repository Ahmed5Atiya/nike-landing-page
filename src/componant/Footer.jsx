import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";
import "../index.css";
function Footer() {
  return (
    <section className="bg-black padding-x padding-t pb-8">
      <footer className="max-container">
        <div className="flex items-start justify-between gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="#">
              <img src={footerLogo} alt="footer" />
            </a>
            <p className=" text-gray-400 capitalize max-w-md text-lg font-montserrat my-7">
              Get shoes ready for the new term at your nearest like store find
              your perfect size in store get rewaeds
            </p>
            <div className=" flex gap-5">
              {socialMedia.map((item) => (
                <div
                  key={item.alt}
                  className="flex p-2 bg-white items-center justify-center"
                >
                  <img src={item.src} alt={item.alt} width={30} height={30} />
                </div>
              ))}
            </div>
          </div>

          {footerLinks.map((link) => (
            <div key={link.links} className="flex flex-col gap-3">
              <h4 className="text-white text-xl">{link.title}</h4>
              <ul className="flex flex-col gap-3 font-montserrat">
                {link.links.map((item) => (
                  <li
                    key={item.name}
                    className="text-gray-400 hover:text-red-400 transition duration-250"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-montserrat items-center max-sm:flex-col gap-4 text-lg text-gray-400 mt-8 border-t-[1px] border-gray-300 py-8">
          <h4 className="">&copy; CopyRight Ahmed Khalid Aitya</h4>
          <p>Terms & conditations</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
