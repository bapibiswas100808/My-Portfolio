import profileImg from "../../assets/image/hero-image5.png";

const Hero = () => {
  return (
    <div className="border-b-2 border-[#363131]">
      <div className="max-w-[1170px] mx-auto my-10 ">
        <div className="hero text-white min-h-screen pb-3">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-5">
            <div className="flex-1">
              <img
                src={profileImg}
                className="rounded-3xl shadow-2xl border-2 border-[#363131]"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl font-bold mb-4">Bapi Biswas</h1>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Front End Developer
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
              <button className="btn project-btn text-xl">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
