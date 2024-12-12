import Image from "next/image";
export default function SliderHomePage() {
  return (
    <div id="gallery" className="relative w-full z-10 bg-green-400" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative w-full lg:h-screen md:w-full   md:h-[460px] h-[300px] bg-black  overflow-hidden ">
        {/* Item 1 */}
        <div
          className="hidden  opacity-50 duration-3200 ease-in-out"
          data-carousel-item
        >
          <Image
            width={200}
            height={200}
            src="/assets/slide-cover-01.png"
            className="absolute block w-full lg:w-full md:w-full  lg:h-full md:h-[460px] h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 2 */}
        <div
          className="hidden opacity-50 duration-3200 ease-in-out "
          data-carousel-item="active"
        >
          <Image
            width={200}
            height={200}
            src="/assets/slide-cover-01.png"
            className="absolute block w-full lg:w-full md:w-full  lg:h-full md:h-[460px] h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 3 */}
        <div
          className="hidden duration-3200 ease-in-out opacity-50"
          data-carousel-item
        >
          <Image
            width={200}
            height={200}
            src="/assets/slide-cover-01.png"
            className="absolute block w-full lg:w-full md:w-full  lg:h-full md:h-[460px] h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 4 */}
        <div
          className="hidden duration-3200 ease-in-out opacity-50"
          data-carousel-item
        >
          <Image
            width={200}
            height={200}
            src="/assets/slide-cover-01.png"
            className="absolute block w-full lg:w-full md:w-full  lg:h-full md:h-[460px] h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 5 */}
        <div
          className="hidden duration-3200 ease-in-out opacity-50"
          data-carousel-item
        >
          <Image
            width={200}
            height={200}
            src="/assets/slide-cover-01.png"
            className="absolute block w-full lg:w-full md:w-full  lg:h-full md:h-[460px] h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 lg:mt-4 md:mt-4 mt-8 start-0 z-30 flex items-center justify-center h-full lg:px-4 md:px-4 px-2 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute lg:mt-4 md:mt-4 mt-8 top-0 end-0 z-30 flex items-center justify-center h-full lg:px-4 md:px-4 px-2 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <div className=" absolute inset-10 lg:mt-4 md:mt-4 mt-10  flex  items-center justify-start  z-50 md:p-6 lg:p-8 ml-4 sm:ml-6 md:ml-4 lg:ml-12">
        <div className="flex flex-col items-start space-y-2 sm:space-y-5 md:space-y-2 lg:space-y-2">
          <h1
            data-aos="fade-up-right"
            className="text-lg lg:mb-6 md:mb-2 lg:mt-0 md:mt-4 mt-2 text-white sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight sm:leading-tight md:leading-snug lg:leading-snug aos-init aos-animate"
          >
            ស្វាគមន៍មកកាន់ សាកលវិទ្យាល័យ!
          </h1>
          <h1
            data-aos="fade-up-right "
            className="text-sm   text-white  md:text-lg lg:text-2xl leading-relaxed  sm:leading-tight md:leading-snug lg:leading-snug aos-init aos-animate"
          >
            នៅទីនេះ អ្នកអាចស្វែងរកព័ត៌មានលម្អិតអំពីសកលវិទ្យាល័យនានា និងជម្រើសដែលល្អបំផុតសម្រាប់សិក្សា។
          </h1>
          
          <div>
            <div className="rounded-md shadow mt-4 ">
              <a
                className="w-full text-sm flex items-center justify-center lg:px-8 lg:py-3 px-4 py-2 border border-slate-500 lg:text-base  leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-blue-600 hover:text-white focus:ring ring-offset-2 ring-pink-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                href=""
              >
                តោះចាប់ផ្តើម
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
