import { ReactTyped } from "react-typed";
const Blogs = () => {
  return (
    <div className="border-b-2 border-[#363131] mb-10">
      <div className="max-w-[1170px] mx-auto text-white">
        <div className="relative px-5 lg:px-0">
          <h2 className="relative z-30">
            <span className="text-4xl font-bold relative z-30"> My Blogs</span>
            <span className="absolute h-14 w-14 bg-[#217C7C] rounded-full -left-3  lg:-left-4 top-0 transform -translate-y-2 z-0"></span>
          </h2>
        </div>
        <div className="py-10">
          <h2 className="text-white text-center text-3xl font-bold">
            Coming Soon
            <ReactTyped
              strings={[".", "..", "...", "....", "......"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
