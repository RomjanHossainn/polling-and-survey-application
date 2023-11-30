
const Fqa = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl mb-3">Meaningful FAQ</h1>
        <p>
          A meaningful FAQ (Frequently Asked Questions) is a curated set of
          commonly asked questions  and comprehensive answers designed <br /> to provide
          users or customers with quick and helpful information
        </p>
      </div>
      <div className="lg:flex items-center">
        <div className=" space-y-3">
          <div className="collapse collapse-plus bg-[#F0F2F5]">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Your Opinions on Cuisine
            </div>
            <div className="collapse-content">
              <p>
                Indulge your taste buds in our culinary exploration! Take a few
                minutes to share your favorite foods, dining habits, and
                culinary preferences. Your input will help us uncover the latest
                trends and insights in the world of food. Let your palate guide
                the way!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#F0F2F5]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              A Comprehensive Fitness Survey
            </div>
            <div className="collapse-content">
              <p>
                Join the Wellness Weigh-In survey to contribute your thoughts on
                fitness routines, dietary habits, and overall wellness
                practices. Together, we ll paint a picture of the diverse paths
                people take to achieve their health and fitness goals.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#F0F2F5]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Shaping Tomorrow s Innovations
            </div>
            <div className="collapse-content">
              <p>
                We re interested in understanding how technology fits into your
                daily life. Your responses will provide valuable insights into
                the digital pulse of today s society.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#F0F2F5]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Your Insights on Travel Experiences?
            </div>
            <div className="collapse-content">
              <p>
                Join the GlobeTrek Tales survey and let your travel adventures
                take center stage! Share your favorite destinations, travel
                styles, and the memories that linger from your explorations.
                Your experiences will help us understand the varied landscapes
                of global travel.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#F0F2F5]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Share Your Cinematic Opinions?
            </div>
            <div className="collapse-content">
              <p>
                Calling all film fanatics! Film Fanatic Feedback is your
                platform to share your cinematic opinions. From classics to
                contemporary hits, let us know what resonates with you in the
                world of movies.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#F0F2F5]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Share Your Musical Opinions?
            </div>
            <div className="collapse-content">
              <p>
                Calling all music enthusiasts! Sound Spectrum is your platform
                to share your musical opinions. From classic compositions to
                contemporary hits, let us know what resonates with you in the
                world of music.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-4 py-20 bg-lightblue">
            <div className=" mx-auto md:flex-row">
              <dl className="w-full">
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Your Opinions on Cuisine?
                  </h3>
                </dt>
                <dd className="mb-8">
                  <p>
                    Your input will help us uncover the latest trends and
                    insights in the world of food. Let your palate guide the way
                  </p>
                </dd>
                <dt className="mb-8">
                  <h3 className="text-xl font-semibold">
                    A Comprehensive Fitness Survey?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    Together, we ll paint a picture of the diverse paths people
                    take to achieve their health and fitness goals.
                  </p>
                </dd>
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Shaping Tomorrow s Innovations?
                  </h3>
                </dt>
                <dd className="mb-6">
                  <p>
                    Your responses will provide valuable insights into the
                    digital pulse of today s society.
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fqa;
