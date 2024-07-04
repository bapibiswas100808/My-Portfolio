import logo from "../../assets/image/logo5.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-lg">
        <a>Home</a>
      </li>
      <li className="text-lg">
        <a href="#hero">About</a>
      </li>
      <li className="text-lg">
        <a href="#service">Services</a>
      </li>
      <li className="text-lg">
        <a href="#skill">My Work</a>
      </li>
      <li className="text-lg">
        <a href="#blogs">Blogs</a>
      </li>
      <li className="text-lg">
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="border-b-2 border-[#363131] py-2">
      <div className="max-w-[1170px] mx-auto">
        <div className="navbar bg-[#1c1c20]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden bg-[#217C7C]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex">
              <div className="hidden md:block">
                <img className="h-14 mr-2" src={logo} alt="" />
              </div>
              <div className="text-white flex justify-center items-center flex-col ml-3 md:ml-0">
                <p className="text-xl">Bapi Biswas</p>
                <p className="text-sm">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a
              href="/resume.pdf"
              className="btn project-btn text-md md:text-lg"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
