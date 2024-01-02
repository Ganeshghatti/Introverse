import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-screen h-screen flex flex-col items-center justify-center gap-6"
    >
      <p className="text-7xl md:text-5xl font-extrabold text-center hero-title text-white md:w-11/12">
        INTRO<br className="hidden md:block"/>VERSE
      </p>
      <p className="text-3xl md:text-xl font-normal text-center text-gray2">
        A new age Pseudonymous Social media
      </p>
      <button className="hero-button flex items-center justify-center gap-3 text-white mt-12">
        <span className="font-semibold">JOIN NOW</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
        >
          <path
            d="M1.62988 6.00011H16.3991"
            stroke="white"
            stroke-width="1.84615"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.7837 1.84607L16.3991 6.46145L11.7837 11.0768"
            stroke="white"
            stroke-width="1.84615"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="flex flex-col gap-6 absolute cursor-pointer bottom-8 hero-scroll text-white items-center">
        <span className="text-xl md:text">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
        >
          <path
            d="M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97919 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 0L10.5 30H13.5L13.5 0L10.5 0Z"
            fill="white"
          />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="748"
        height="550"
        viewBox="0 0 748 550"
        fill="none"
        className="absolute hero-design md:w-11/12 lg:w-11/12"
      >
        <g filter="url(#filter0_f_82_33)">
          <path
            d="M395.638 386.172C473.185 381.07 523.798 352.445 573.026 285.846C672.755 150.929 90.0808 108.07 171.228 256.292C222.393 349.749 296.586 392.689 395.638 386.172Z"
            fill="#01C738"
            fill-opacity="0.18"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_82_33"
            x="0.354218"
            y="0.0870056"
            width="747.289"
            height="549.823"
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
              stdDeviation="81.547"
              result="effect1_foregroundBlur_82_33"
            />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
