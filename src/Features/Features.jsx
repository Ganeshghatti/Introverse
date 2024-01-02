import React from "react";

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col gap-48 items-center mt-32 md:mt-16 md:gap-30"
    >
      <h1 className="text-center features-h1">
        Why should you use Introverse ?
      </h1>
      <div className="flex w-4/5 md:w-full md:flex-col justify-center gap-12 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="552"
          height="580"
          viewBox="0 0 552 580"
          fill="none"
          className="features-design-div1 md:w-11/12 lg:w-11/12"
        >
          <g filter="url(#filter0_f_82_116)">
            <path
              d="M181.01 407.101C262.611 401.732 315.87 371.611 367.672 301.53C472.615 159.56 -140.522 114.46 -55.1322 270.431C-1.29233 368.773 76.7796 413.958 181.01 407.101Z"
              fill="#01C738"
              fill-opacity="0.18"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_82_116"
              x="-234.939"
              y="0.831329"
              width="786.358"
              height="578.568"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="85.8103"
                result="effect1_foregroundBlur_82_116"
              />
            </filter>
          </defs>
        </svg>
        <div className="flex flex-col w-2/5 gap-6 justify-center md:w-11/12">
          <h1 className="features-h1">Fearless Self-Expression</h1>
          <p className="features-p">
            Embrace your true self without fear of judgment. Share your
            thoughts, ideas, and creativity openly and anonymously, fostering a
            community built on freedom of expression.
          </p>
          <button className="features-button text-white font-semibold w-fit md:self-left">
            JOIN NOW
          </button>
        </div>
        <div className="features-img-container  w-2/5 md:w-11/12 lg:w-11/12">
          <img src="./features1.png" className="features-img" />
        </div>
      </div>

      <div className="flex w-4/5 md:w-full md:flex-col-reverse justify-center gap-12 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="603"
          height="580"
          viewBox="0 0 603 580"
          fill="none"
          className="features-design-div2 md:w-11/12"
        >
          <g filter="url(#filter0_f_82_129)">
            <path
              d="M416.909 406.745C498.51 401.376 551.768 371.255 603.571 301.174C708.513 159.204 95.3765 114.104 180.766 270.075C234.606 368.417 312.678 413.602 416.909 406.745Z"
              fill="#01C738"
              fill-opacity="0.23"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_82_129"
              x="0.959015"
              y="0.475372"
              width="786.357"
              height="578.568"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="85.8103"
                result="effect1_foregroundBlur_82_129"
              />
            </filter>
          </defs>
        </svg>
        <div className="features-img-container md:w-11/12 lg:w-11/12">
          <img src="./features2.png" className="features-img" />
        </div>
        <div className="flex flex-col w-2/5 gap-6 justify-center md:w-11/12">
          <h1 className="features-h1">Virtual AI Friend</h1>
          <p className="features-p">
            Experience virtual companionship on your terms. Interact with
            customizable 3D avatars, engaging in conversations and sharing
            emotions in a secure environment, without the need to disclose
            personal details.
          </p>
          <button
            className="features-button text-white font-semibold w-fit self-end md:mr-0 md:self-start"
            style={{ marginRight: "15%" }}
          >
            JOIN NOW
          </button>
        </div>
      </div>

      <div className="flex w-4/5 md:w-full md:flex-col justify-center gap-12 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="615"
          height="575"
          viewBox="0 0 615 575"
          fill="none"
          className="features-design-div3 md:w-11/12"
        >
          <g filter="url(#filter0_f_82_179)">
            <path
              d="M247.177 403.333C328.178 398.004 381.044 368.105 432.465 298.54C536.635 157.614 -71.988 112.847 12.7731 267.669C66.2166 365.288 143.714 410.14 247.177 403.333Z"
              fill="#01C738"
              fill-opacity="0.18"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_82_179"
              x="-165.71"
              y="0.0547028"
              width="780.569"
              height="574.308"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="85.1786"
                result="effect1_foregroundBlur_82_179"
              />
            </filter>
          </defs>
        </svg>
        <div className="flex flex-col w-2/5 gap-6 justify-center md:w-11/12">
          <h1 className="features-h1">Random Chat</h1>
          <p className="features-p">
            Connect with people from all walks of life through our dynamic
            random chat feature. Discover new perspectives, engage in
            spontaneous conversations, and make exciting connections with
            individuals who share your interests.
          </p>
          <button className="features-button text-white font-semibold w-fit self-start">
            JOIN NOW
          </button>
        </div>
        <div className="features-img-container md:w-11/12">
          <img src="./features3.png" class="features-img" />
        </div>
      </div>

      <div className="flex w-4/5 md:w-full md:flex-col-reverse justify-center gap-12 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="696"
          height="583"
          viewBox="0 0 696 583"
          fill="none"
          className="features-design-div4 md:w-11/12 lg:w-11/12"
        >
          <g filter="url(#filter0_f_82_170)">
            <path
              d="M419.461 409.508C501.624 404.103 555.249 373.774 607.408 303.21C713.073 160.262 95.7148 114.852 181.692 271.897C235.903 370.917 314.513 416.413 419.461 409.508Z"
              fill="#01C738"
              fill-opacity="0.18"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_82_170"
              x="0.647354"
              y="0.440811"
              width="791.772"
              height="582.551"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="86.4012"
                result="effect1_foregroundBlur_82_170"
              />
            </filter>
          </defs>
        </svg>
        <div className="features-img-container md:w-11/12 border-2 border-solid border-black">
          <img src="./features4.png" className="features-img" />
        </div>
        <div className="flex flex-col w-2/5 gap-6 justify-center md:w-11/12">
          <h1 className="features-h1">Secure & Safe</h1>
          <p className="features-p">
            Connections: Enjoy a safe and private social networking experience.
            Connect with others while maintaining complete control over your
            personal information and identity, with robust privacy measures in
            place.
          </p>
          <button
            className="features-button text-white font-semibold w-fit self-end md:mr-0 md:self-start"
            style={{ marginRight: "15%" }}
          >
            JOIN NOW
          </button>
        </div>
      </div>
      <div className="features-more-div flex flex-col gap-10 items-center">
        <p className="text-xl font-bold text-center text-white">
          and much more.......
        </p>
        <button className="features-button text-white font-semibold w-fit">
          JOIN NOW
        </button>
      </div>
    </section>
  );
}
