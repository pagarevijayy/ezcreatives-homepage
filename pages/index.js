import Head from "next/head";
import Link from "next/link";
import Menubar from "../components/menubar";
import Container from "../layouts/container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import { PROJECT_PUNCHLINE, PROJECT_DESCRIPTION } from "../constants/core";

SwiperCore.use([Pagination, Autoplay]);

export default function Home() {
  const faviconEmoji = "🎨";
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

  return (
    <>
      <Head>
        <title>ez Creatives - Automate Your Social Media Creatives.</title>
        <link rel="icon" href={faviconHREF} />
      </Head>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-100 pb-8">
        <Menubar />
        <Container>
          <section className="hero-section text-center">
            <p className="mt-8 text-3xl sm:text-5xl md:max-w-screen-sm md:mx-auto font-poppins font-bold tracking-wide">
              {PROJECT_PUNCHLINE}
            </p>
            <p className="mt-8 px-2 text-xl md:text-2xl md:max-w-screen-sm md:mx-auto font-poppins">
              {PROJECT_DESCRIPTION}
            </p>
            <div className="pt-8 lg:pt-12 lg:text-lg">
              <Link href="/something">
                <button className="w-56 px-4 py-2.5 font-medium focus:outline-none text-gray-50 bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl">
                  Request Access
                </button>
              </Link>
            </div>
            <div className="py-8 ">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
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
            <p className="bg-gradient-to-r from-cyan-500 to-cyan-600 inline decoration-clone text-xl leading-relaxed text-gray-50 font-poppins italic font-medium px-2">
              Sample Auto-Generated Instagram Feed
            </p>
          </section>
          <section className="text-center mt-12">
            <p className="text-2xl font-medium px-2">
              Focus on the actual art, leave the mundane on us!
            </p>
            <p className="mt-6">
              Our mission is to help digital businesses save time and scale
              their social presence.
            </p>
            <p className="mt-12 text-3xl font-medium">How can we help?</p>
            <ul className="mt-4 flex flex-wrap gap-2 uppercase text-xs font-medium ">
              <li className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                {checkMarkIcon} <span className="px-2">Instagram Feed </span>
              </li>
              <li className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                {checkMarkIcon}{" "}
                <span className="px-2">Youtube Thumbnails </span>
              </li>
              <li className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                {checkMarkIcon}
                <span className="px-2">Facebook / IGTV / Reel Images </span>
              </li>
              <li className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                {checkMarkIcon} <span className="px-2">LinkedIn Posts </span>
              </li>
              <li className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                {checkMarkIcon}
                <span className="px-2">Blog / Email Banners </span>
              </li>
              <li className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                {checkMarkIcon}
                <span className="px-2">Twitter / Pinterest / Tiktok Feed </span>
              </li>
            </ul>
          </section>
        </Container>
      </div>
    </>
  );
}
