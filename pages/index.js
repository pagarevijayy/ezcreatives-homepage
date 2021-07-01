import Head from "next/head";
import Link from "next/link";
import Menubar from "../components/menubar";
import Container from "../layouts/container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import { PROJECT_PUNCHLINE, PROJECT_DESCRIPTION } from "../constants/core";

SwiperCore.use([Pagination, Autoplay]);

export default function Home() {
  const faviconEmoji = "🚀";
  const faviconHREF = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${faviconEmoji}</text></svg>`;

  const checkMarkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const tickMarkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-cyan-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <Head>
        <title>
          ezCreatives | Auto-generate Images from Design Templates in Bulk
        </title>
        <link rel="icon" href={faviconHREF} />
      </Head>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-100 pb-8">
        <Menubar />
        <Container>
          <section className="hero-section text-center">
            <h1 className="mt-12 sm:mt-20 text-3xl sm:text-5xl md:mx-auto md:max-w-screen-sm font-poppins font-bold tracking-wide">
              {PROJECT_PUNCHLINE}
            </h1>
            <p className="mt-8 px-2  sm:mx-auto sm:max-w-lg md:max-w-screen-sm text-md md:text-2xl font-poppins">
              {PROJECT_DESCRIPTION}
            </p>
            <div className="pt-8 lg:pt-12 lg:text-lg">
              <Link href="/something">
                <button className="w-56 px-4 py-2.5 font-medium focus:outline-none text-gray-50 bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl">
                  Request Access
                </button>
              </Link>
            </div>
            <p className="mt-8 sm:mt-12 text-gray-600 text-xs">
              Live Instagram Samples Shown Below
            </p>
            <div className="py-6 sm:max-w-sm sm:mx-auto">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/SquareQuote.png"
                    alt="instagram feed post"
                    height="320px"
                    width="320px"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/Wisdom1.png"
                    alt="instagram feed post"
                    height="320px"
                    width="320px"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/Wisdom4.png"
                    alt="instagram feed post"
                    height="320px"
                    width="320px"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/Wisdom2.png"
                    alt="instagram feed post"
                    height="320px"
                    width="320px"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <section className="mt-12 text-center">
            <h2 className="text-xl sm:text-2xl font-medium px-2 max-w-xs sm:max-w-sm mx-auto">
              Focus on the actual content, leave images on us!
            </h2>
            <p className="mt-6 px-4 sm:max-w-lg sm:mx-auto">
              Our mission is to help content creators and digital marketers
              scale their businesses using our automation suite
            </p>
            <h2 className="mt-8 text-3xl font-medium">How can we help?</h2>
            <ul className="mt-6 space-y-2 uppercase text-xs font-semibold ">
              <li>
                <div className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                  {checkMarkIcon}{" "}
                  <span className="px-2">Youtube Thumbnails </span>
                </div>
              </li>
              <li>
                <div className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                  {checkMarkIcon} <span className="px-2">Instagram Posts</span>
                </div>
              </li>

              <li>
                <div className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                  {checkMarkIcon}
                  <span className="px-2">Blog / Email Banners </span>
                </div>
              </li>

              <li>
                <div className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                  {checkMarkIcon}
                  <span className="px-2">IGTV / Reel Thumbnails </span>
                </div>
              </li>

              <li>
                <div className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                  {checkMarkIcon}
                  <span className="px-2">Twitter / LinkedIn / FB Posts</span>
                </div>
              </li>
            </ul>
          </section>
          <section className="mt-12 text-center">
            <h2 className="text-xl sm:text-2xl font-medium sm:mx-auto sm:max-w-sm">
              For creators, digital marketers, and social media managers!
            </h2>
            <p className="mt-6 sm:mx-auto sm:max-w-md">
              Up your social media game with our design templates. Shoot fast,
              Publish faster.
            </p>
            <p className="mt-8 text-gray-600 text-xs">
              Youtube Thumbnail Samples Shown Below
            </p>
            <div className="py-6 sm:mx-auto sm:max-w-lg">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/ThumbnailYT1.png"
                    alt="Automatically created youtube thumbnail"
                    height="195px"
                    width="320px"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/ThumbnailYT4.png"
                    alt="Automatically created youtube thumbnail"
                    height="195px"
                    width="320px"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/ThumbnailYT2.png"
                    alt="Automatically created youtube thumbnail"
                    height="195px"
                    width="320px"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/ThumbnailYT3.png"
                    alt="Automatically created youtube thumbnail"
                    height="195px"
                    width="320px"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <section className="mt-8 text-center">
            <h2 className="text-xl sm:text-2xl font-medium px-2">
              Leverage Trends like a Boss
            </h2>
            <p className="mt-6 sm:mx-auto sm:max-w-md">
              Get your content up and running quickly. Don't miss on trending
              opportunities.
            </p>
            <p className="mt-8 text-gray-600 text-xs">
              IGTV and Reels Thumbnail Samples Below
            </p>
            <div className="py-6 sm:mx-auto sm:max-w-sm">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/ThumbnailIGTV3.png"
                    alt="Automatically created IGTV and Reel thumbnails"
                    height="320px"
                    width="195px"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/ThumbnailIGTV1.png"
                    alt="Automatically created IGTV and Reel thumbnails"
                    height="320px"
                    width="195px"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-lg"
                    src="/images/ThumbnailIGTV2.png"
                    alt="Automatically created IGTV and Reel thumbnails"
                    height="320px"
                    width="195px"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <Link href="/templates">
                <button className="w-64 md:w-auto px-4 py-2 text-cyan-600 font-medium focus:outline-none border border-cyan-500 rounded-3xl">
                  Checkout Template Gallery
                </button>
              </Link>
            </div>
          </section>
          <section
            id="pricing"
            className="mt-12 text-center"
            style={{ scrollMarginTop: "5rem" }}
          >
            <h2 className="text-2xl font-medium">Pricing</h2>
            {/* <p className="mt-4 text-gray-500 text-sm">
              FREE 15 images per month, Cheers! :)
            </p> */}
            <div className="mt-8">
              <div className="p-8 border border-gray-300 rounded-xl max-w-xs mx-auto">
                <h3 className="text-xl font-medium">Basic</h3>
                <p className="mt-4 text-gray-500">
                  <span className="text-gray-800 text-2xl font-semibold">
                    $35
                  </span>{" "}
                  / mo
                </p>
                <div className="mt-4">
                  <Link href="/something">
                    <button className="w-48 px-4 py-2.5 font-medium focus:outline-none text-gray-50 bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl">
                      Get Basic
                    </button>
                  </Link>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> 1,000 images </span>
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Unlimited Design Template </span>
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Setup Hand-Holding </span>
                  </li>

                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Basic Support </span>
                  </li>
                </ul>
              </div>
              <div className=" mt-6 p-8 border border-gray-300 rounded-xl max-w-xs mx-auto">
                <h3 className="text-xl font-medium">Pro</h3>
                <p className="mt-4 text-gray-500">
                  <span className="text-gray-800 text-2xl font-semibold">
                    $65
                  </span>{" "}
                  / mo
                </p>
                <div className="mt-4">
                  <Link href="/something">
                    <button className="w-48 px-4 py-2.5 font-medium focus:outline-none text-gray-50 bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl">
                      Get Pro
                    </button>
                  </Link>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> 10,000 images </span>
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Special Design Templates </span>
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Setup Hand-Holding </span>
                  </li>

                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Premium Support </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 p-8 border border-gray-300 rounded-xl max-w-xs mx-auto">
                <h3 className="text-xl font-medium">Business Pro </h3>
                <p className="mt-4 text-gray-500">
                  <span className="text-gray-800 text-2xl font-semibold">
                    $265
                  </span>{" "}
                  / mo
                </p>
                <div className="mt-4">
                  <Link href="/something">
                    <button className="w-48 px-4 py-2.5 font-medium focus:outline-none text-gray-50 bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl">
                      Get Business Pro
                    </button>
                  </Link>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> 50,000 images </span>
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> 5 Custom Design Templates </span>
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1">
                      {" "}
                      Special + Unlimited Templates{" "}
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Setup Hand-Holding </span>
                  </li>

                  <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Dedicated Support </span>
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-xs">
                Want something custom?
                <Link href="/somewhere">
                  <a className="px-1 underline text-cyan-600 hover:text-cyan-800 visited:text-purple-600">
                    Get in touch!
                  </a>
                </Link>
              </p>
            </div>
          </section>
          <section className="mt-12 text-center">
            <h2 className="text-xl font-medium">Ready to Automate?</h2>
            <div className="mt-4 text-sm">
              <Link href="/something">
                <button className="w-48 px-3 py-2.5 font-medium focus:outline-none border border-cyan-500 rounded-3xl">
                  Request Access
                </button>
              </Link>
            </div>
          </section>
        </Container>
        <footer className="mt-12 text-center border-t  border-gray-300">
          <p className="mt-8 text-gray-500 font-poppins text-xs">
            © ezCreatives. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
