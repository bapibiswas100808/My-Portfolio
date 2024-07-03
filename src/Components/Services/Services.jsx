import { FaMobile } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { LuFrame } from "react-icons/lu";

const Services = () => {
  return (
    <div className="min-h-screen max-w-[1170px] mx-auto text-white py-10">
      <div className="service-area relative px-5 lg:px-0">
        <h2 className="relative z-30">
          <span className="text-4xl font-bold relative z-30"> What I do?</span>
          <span className="absolute h-14 w-14 bg-[#217C7C] rounded-full -left-3  lg:-left-4 top-0 transform -translate-y-2 z-0"></span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 my-10 px-5 lg:px-0">
        {/* one */}
        <div className="flex-1 single-service p-10 bg-gray-800 rounded-lg relative z-20 overflow-hidden transition duration-1000">
          <FaMobile className="text-4xl mb-14"></FaMobile>
          <h2 className="text-3xl font-bold mb-5">
            Responsive Web Development
          </h2>
          <p>
            Specialize in building websites that are responsive and
            mobile-friendly. Ensure that your websites provide an optimal
            viewing experience across a wide range of devices and screen sizes
            using technologies like HTML5, CSS3 and JavaScript.
          </p>
          <span className="absolute h-60 w-60 bg-[#217C7C] rounded-full top-[-120px] left-[-60px] z-[-1] transition duration-500"></span>
        </div>
        {/* two */}
        <div className="flex-1 single-service p-10 bg-gray-800 rounded-lg relative z-20 overflow-hidden transition duration-1000">
          <LuFrame className="text-4xl mb-14"></LuFrame>
          <h2 className="text-3xl font-bold mb-5">
            Frontend Framework Development
          </h2>
          <p>
            Focus on developing robust frontend architectures and components
            using popular frameworks such as React.js, Tailwind CSS or
            Bootstrap. Provide expertise in creating interactive user
            interfaces, managing state, and optimizing frontend performance.
          </p>
          <span className="absolute h-60 w-60 bg-[#217C7C] rounded-full top-[-120px] left-[-60px] z-[-1] transition duration-500"></span>
        </div>
        {/* three */}
        <div className="flex-1 single-service p-10 bg-gray-800 rounded-lg relative z-20 overflow-hidden transition duration-1000">
          <GrDocumentPerformance className="text-4xl mb-14"></GrDocumentPerformance>
          <h2 className="text-3xl font-bold mb-5">
            Browser Compatibility and Optimization
          </h2>
          <p>
            I ensure websites perform consistently across all browsers. Optimize
            front end code for speed and efficiency, implementing SEO and
            security best practices to enhance user experience and overall site
            performance.
          </p>
          <span className="absolute h-60 w-60 bg-[#217C7C] rounded-full top-[-120px] left-[-60px] z-[-1] transition duration-500"></span>
        </div>
      </div>
    </div>
  );
};

export default Services;
