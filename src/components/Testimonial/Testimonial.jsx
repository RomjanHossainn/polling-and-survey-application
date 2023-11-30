import { PiUserCircleMinusBold } from "react-icons/pi";

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-3 text-center">
          Testimonials
        </h1>
        <p className="text-center mb-8">
          A testimonials surveyor is a skilled professional responsible for
          collecting and analyzing <br />feedback from clients or customers to assess
          their satisfaction and overall experience with a product, service, or
          business.
        </p>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-[#F0F2F5] p-8 rounded">
              <PiUserCircleMinusBold className="text-5xl text-[#94a3d1] mb-5" />
              <p className="leading-relaxed mb-6">
                Calling all music enthusiasts! Sound Spectrum is your platform
                to share your musical opinions. From classic compositions to
                contemporary hits, let us know what resonates with you in the
                world of music.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://i.ibb.co/0sqDr3S/12.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Elizabeth sundory
                  </span>
                  <span className="text-gray-500 text-sm">SURVEYOR</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-[#F0F2F5] p-8 rounded">
              <PiUserCircleMinusBold className="text-5xl text-[#94a3d1] mb-5" />
              <p className="leading-relaxed mb-6">
                Calling all film fanatics! Film Fanatic Feedback is your
                platform to share your cinematic opinions. From classics to
                contemporary hits, let us know what resonates with you in the
                world of movies.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://i.ibb.co/wYQ6JwX/images.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-500 text-sm">SURVEYOR</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-[#F0F2F5] p-8 rounded">
              <PiUserCircleMinusBold className="text-5xl text-[#94a3d1] mb-5" />
              <p className="leading-relaxed mb-6">
                Join the GlobeTrek Tales survey and let your travel adventures
                take center stage! Share your favorite destinations, travel
                styles, and the memories that linger from your explorations.
                Your experiences will help us understand the varied landscapes
                of global travel.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://i.ibb.co/LnD2mp8/pexels-photo-2272853.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Charlotte
                  </span>
                  <span className="text-gray-500 text-sm">SURVEYOR</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-[#F0F2F5] p-8 rounded">
              <PiUserCircleMinusBold className="text-5xl text-[#94a3d1] mb-5" />
              <p className="leading-relaxed mb-6">
                Calling all music enthusiasts! Sound Spectrum is your platform
                to share your musical opinions. From classic compositions to
                contemporary hits, let us know what resonates with you in the
                world of music.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://i.ibb.co/64KJR0x/images-1.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                </span>
              </a>
            </div>
          </div>
          {/* Add another testimonial block as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
