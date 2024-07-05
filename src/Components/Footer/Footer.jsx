import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/image/logo5.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="border-b-2 border-[#363131]">
        <div className="max-w-[1170px] mx-auto">
          <footer className="footer text-white p-10">
            <aside>
              <img src={logo} className="h-14" alt="" />
              <p className="text-xl">
                <span className="text-2xl"> Bapi Biswas.</span> <br />
                <span className="text-xl">Front End Web Developer</span>
                <br /> <span>141, East Baniakhamar Road</span> <br /> Khulna,
                Bangladesh.
              </p>
            </aside>
            <nav>
              <h6 className="footer-title">Social Links</h6>
              <div className="grid grid-flow-col gap-4 text-2xl">
                <a
                  href="https://www.linkedin.com/in/biswasbapi/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://github.com/bapibiswas100808" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/Bapi.Biswas08"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold">Contact Info:</p>
                <p className="text-lg">
                  <span className="mr-2 font-semibold">Email:</span>
                  biswasbapi086@gmail.com
                </p>
                <p className="text-lg">
                  <span className="mr-2 font-semibold">Phone:</span>
                  +8801642078595
                </p>
              </div>
            </nav>
          </footer>
        </div>
      </div>
      <aside>
        <p className="text-white text-center text-xl py-3">
          Copyright © {new Date().getFullYear()} - All right reserved by Bapi
          Biswas.
        </p>
      </aside>
    </div>
  );
};

export default Footer;
