import Swal from "sweetalert2";
import contactImg from "../../assets/image/contact-image.png";
const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Message Has been Sent!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="border-b-2 border-[#363131]">
      <div className="max-w-[1170px] mx-auto text-white px-5 lg:px-0">
        <div className="relative px-5 lg:px-0">
          <h2 className="relative z-30">
            <span className="text-4xl font-bold relative z-30">
              How Can I Help You?
            </span>
            <span className="absolute h-14 w-14 bg-[#217C7C] rounded-full -left-3  lg:-left-4 top-0 transform -translate-y-2 z-0"></span>
          </h2>
        </div>
        <div className="py-10">
          <div className="hero min-h-screen">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="bg-[#363131] rounded-lg flex-1 py-8">
                <img src={contactImg} className="rounded-lg" />
              </div>
              <div className=" flex-1 bg-[#217C7C] rounded-lg">
                <h2 className="text-3xl font-bold ml-8 pt-8">Contact Me</h2>
                <div className="card">
                  <form onSubmit={handleContact} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Full Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered text-black"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered text-black"
                        required
                      />
                    </div>

                    <label className="form-control">
                      <div className="label">
                        <span className="label-text text-white">
                          Write Your Message
                        </span>
                      </div>
                      <textarea
                        className="textarea textarea-bordered h-24 text-black"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </label>
                    <div className="form-control mt-6">
                      <button type="submit" className="btn project-btn text-lg">
                        Get In Touch!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
