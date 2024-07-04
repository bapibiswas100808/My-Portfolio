import profileImg from "../../assets/image/hero-image5.png";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id="hero" className="border-b-2 border-[#363131]">
      <div className="max-w-[1170px] mx-auto my-10 ">
        <div className="hero text-white min-h-screen pb-3">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-5">
            <div
              // data-aos="fade-left"
              // data-aos-duration="2000"
              className="flex-1"
            >
              <img
                src={profileImg}
                className="rounded-3xl shadow-2xl border-2 border-[#363131]"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-3xl font-bold mb-4">Bapi Biswas</h1>
              <h2 className="text-3xl lg:text-5xl font-bold">
                <span className="pr-2"> I am a</span>
                <ReactTyped
                  strings={[
                    "Front End Developer",
                    "Programmer",
                    "Creative Thinker",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h2>
              <p className="py-6">
                I am a passionate front-end developer dedicated to creating
                intuitive and visually appealing web applications. I thrive on
                learning new technologies, currently focusing on Next.js. With a
                strong foundation in HTML5, CSS3, JavaScript, and various modern
                frameworks like React, Tailwind, Bootstrap, and Express. By
                leveraging my expertise, I can help businesses enhance their
                online presence, improve user engagement, and drive growth.
              </p>
              <a href="#footer" className="btn project-btn text-xl">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
