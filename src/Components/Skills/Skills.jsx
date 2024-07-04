import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import slider1 from "../../assets/image/slide1.png";
import slider2 from "../../assets/image/slide2.png";
import slider3 from "../../assets/image/slide3.png";
import slider4 from "../../assets/image/slide4.png";
import slider5 from "../../assets/image/slide5.png";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: <FaHtml5 /> },
    { name: "CSS", logo: <FaCss3 /> },
    { name: "JavaScripts", logo: <FaJava /> },
    { name: "Bootstrap", logo: <FaBootstrap /> },
    { name: "Tailwind CSS", logo: <SiTailwindcss /> },
    { name: "React", logo: <FaReact /> },
    { name: "Firebase", logo: <SiFirebase /> },
    { name: "Node JS", logo: <FaNodeJs /> },
    { name: "Express", logo: <SiExpress /> },
    { name: "MongoDB", logo: <SiMongodb /> },
  ];
  return (
    <div id="skill" className="border-b-2 border-[#363131] mb-10">
      <div className="max-w-[1170px] mx-auto text-white px-5 lg:px-0">
        <div className="relative px-5 lg:px-0">
          <h2 className="relative z-30">
            <span className="text-4xl font-bold relative z-30">
              See my work
            </span>
            <span className="absolute h-14 w-14 bg-[#217C7C] rounded-full -left-3  lg:-left-4 top-0 transform -translate-y-2 z-0"></span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row py-10 gap-5 min-h-screen">
          <div
            data-aos="fade-up"
            className="bg-[#217c7c]  p-[50px] pt-[50px] pb-[50px] px-10 rounded-l-[20px] border-2 border-[#807d7d]"
          >
            <h2 className="font-bold text-3xl">My Skills</h2>
            <div className="pt-5">
              {skills.map((skill, idx) => (
                <p className="flex items-center mb-3 text-xl" key={idx}>
                  <span className="mr-2">{skill.logo}</span>{" "}
                  <span>{skill.name}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="carousel w-full h-full">
              {/* slide 1 */}
              <div
                id="slide1"
                className="carousel-item relative w-full min-h-[300px] group"
              >
                <img src={slider1} className="w-full" />
                <div className="absolute top-8 md:top-1/3 left-1/2 text-center -translate-x-1/2 bg-[#217C7C] p-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="font-bold text-xl lg:text-5xl uppercase">
                    Diagnostic Management Website
                  </h2>
                  <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
                    <a
                      className="btn project-btn cursor-pointer border-2"
                      href="https://pro-assignment-twelve.web.app/"
                      target="_blank"
                    >
                      Live Link
                    </a>

                    <a
                      className="btn project-btn cursor-pointer border-2"
                      href="https://github.com/bapibiswas100808/pro-assignment-twelve-client"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* slide 2 */}
              <div
                id="slide2"
                className="carousel-item relative w-full min-h-[300px] group"
              >
                <img src={slider2} className="w-full" />
                <div className="absolute top-8 md:top-1/3 left-1/2 text-center -translate-x-1/2   bg-[#217C7C] p-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="font-bold text-xl lg:text-5xl uppercase">
                    Event Management Website
                  </h2>
                  <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
                    <a
                      className="btn project-btn cursor-pointer"
                      href="https://pro-assignment-eleven.web.app/"
                      target="_blank"
                    >
                      Live Link
                    </a>

                    <a
                      className="btn project-btn cursor-pointer"
                      href="https://github.com/bapibiswas100808/pro-assignment-eleven-client"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* slide 3 */}
              <div
                id="slide3"
                className="carousel-item relative w-full min-h-[300px] group"
              >
                <img src={slider3} className="w-full" />
                <div className="absolute top-2 md:top-1/3 left-1/2 text-center -translate-x-1/2 bg-[#217C7C] p-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="font-bold text-xl lg:text-5xl uppercase">
                    Art & Craft store Management Website
                  </h2>
                  <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
                    <a
                      className="btn project-btn cursor-pointer"
                      href="https://pro-assignment-ten.web.app/"
                      target="_blank"
                    >
                      Live Link
                    </a>

                    <a
                      className="btn project-btn cursor-pointer"
                      href="https://github.com/bapibiswas100808/pro-assignment-ten-client"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* slide 4 */}
              <div
                id="slide4"
                className="carousel-item relative w-full min-h-[300px] group"
              >
                <img src={slider4} className="w-full" />
                <div className="absolute top-8 md:top-1/3 left-1/2 text-center -translate-x-1/2   bg-[#217C7C] p-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="font-bold text-xl lg:text-5xl uppercase">
                    Business Management Website
                  </h2>
                  <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
                    <a
                      className="btn project-btn cursor-pointer"
                      href="https://essons-business-service.netlify.app/"
                      target="_blank"
                    >
                      Live Link
                    </a>

                    <a
                      className="btn project-btn cursor-pointer"
                      href="https://github.com/bapibiswas100808/Business-website"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* slide 5 */}
              <div
                id="slide5"
                className="carousel-item relative w-full min-h-[300px] group"
              >
                <img src={slider5} className="w-full" />
                <div className="absolute top-8 md:top-1/3 left-1/2 text-center -translate-x-1/2  bg-[#217C7C] p-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="font-bold text-xl lg:text-5xl uppercase">
                    Interior Design Landing Page
                  </h2>
                  <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
                    <a
                      className="btn project-btn cursor-pointer"
                      href="https://bapibiswas100808.github.io/Design/"
                      target="_blank"
                    >
                      Live Link
                    </a>

                    <a
                      className="btn project-btn cursor-pointer"
                      href="https://github.com/bapibiswas100808/Design"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
