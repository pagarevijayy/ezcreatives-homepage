import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Head from "next/head";
import * as gtag from "../lib/gtag";

import Menubar from "../components/menubar";
import Container from "../layouts/container";
import { PROJECT_PUNCHLINE, PROJECT_DESCRIPTION } from "../constants/core";

SwiperCore.use([Pagination, Autoplay]);

export default function Home() {
  let [isRequestAccessModalOpen, setIsRequestAccessModalOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState({
    attempt: false,
    success: false,
  });
  const [ctaSource, setCtaSource] = useState("");
  const [submittingEmail, setSubmittingEmail] = useState(false);

  const submitEmailAddress = (values, helpers) => {
    const submittedEmail = values.email;
    setSubmittingEmail(true);
    // console.log("Email entered:", submittedEmail);
    // console.log("ctaSource", ctaSource);

    // api call
    fetch(`/api/email?email=${submittedEmail}&ctaSource=${ctaSource}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setSubmittingEmail(false);
        if (!response.success) {
          setEmailStatus({
            attempt: true,
            success: false,
          });
        }

        setEmailStatus({
          attempt: true,
          success: true,
        });
      })
      .catch((error) => {
        setSubmittingEmail(false);
        console.log(error);
        setEmailStatus({
          attempt: true,
          success: false,
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
    }),
    onSubmit: submitEmailAddress,
  });

  const closeRequestAccessModal = () => {
    setIsRequestAccessModalOpen(false);
    formik.resetForm();
    setEmailStatus({
      attempt: false,
      success: false,
    });
  };

  const openRequestAccessModal = (modalSource) => {
    // console.log("Clicked via:", modalSource);
    setCtaSource(modalSource);
    setIsRequestAccessModalOpen(true);

    gtag.event({
      action: "clicks",
      category: "cta",
      label: modalSource,
    });
  };

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
        <meta
          name="description"
          content="Software tool/API to auto-generate social media images from design templates. 
        Create banners, feed posts, and thumbnails images in bulk on a single click. For digital marketers, content creators, and social media managers."
        />
      </Head>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-100 pb-8">
        <Menubar CTAHandler={openRequestAccessModal} />
        <Container>
          <section className="hero-section text-center">
            <h1 className="mt-12 sm:mt-20 mx-auto max-w-xs sm:max-w-md md:max-w-lg text-2xl sm:text-4xl font-poppins font-bold tracking-wide">
              {PROJECT_PUNCHLINE}
            </h1>
            <p className="mt-8 px-2 sm:mx-auto sm:max-w-lg md:max-w-xl text-md md:text-lg font-poppins">
              {PROJECT_DESCRIPTION}
            </p>
            <div className="pt-8 lg:pt-12">
              <button
                onClick={() => openRequestAccessModal("requestAccessPrimary")}
                className="w-56 px-4 py-2.5 focus:outline-none text-white bg-gradient-to-tr from-cyan-300 to-cyan-500
                 rounded-3xl font-semibold text-sm shadow-md uppercase tracking-wider
                 hover:to-cyan-400 active:to-cyan-600 transform transition hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
              >
                Request Access
              </button>
            </div>
            <p className="mt-8 sm:mt-12 text-gray-600 text-xs">
              Live Instagram Samples Shown Below
            </p>
            <div className="py-6 max-w-sm mx-auto">
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
          <section className="mt-6 sm:mt-12 text-center lg:grid lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center lg:text-left">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium px-2 lg:px-0 max-w-xs sm:max-w-sm mx-auto lg:mx-16">
                  Focus on the actual content, leave images on us!
                </h2>
                <p className="mt-6 px-4 lg:px-0 sm:max-w-lg lg:max-w-sm sm:mx-auto lg:mx-16">
                  Our mission is to help content creators and digital marketers
                  scale their businesses using our automation suite
                </p>
              </div>
            </div>
            <div>
              <h2 className="mt-8 lg:mt-0 text-3xl font-medium">
                How can we help?
              </h2>
              <ul className="mt-6 space-y-2 uppercase text-xs font-semibold select-none">
                <li>
                  <div className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                    {checkMarkIcon}{" "}
                    <span className="px-2">Youtube Thumbnails </span>
                  </div>
                </li>
                <li>
                  <div className="inline-flex items-center text-cyan-600 px-3 py-1.5 bg-cyan-100 rounded-3xl mx-auto">
                    {checkMarkIcon}{" "}
                    <span className="px-2">Instagram Posts</span>
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
            </div>
          </section>
          <section className="mt-12 text-center lg:text-left lg:grid lg:grid-cols-2 lg:invert-direction">
            <div
              className="flex flex-col items-center justify-center"
              style={{ direction: "ltr" }}
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-medium sm:mx-auto lg:mx-16  sm:max-w-sm">
                  For creators, digital marketers, and social media managers!
                </h2>
                <p className="mt-6 sm:mx-auto  lg:mx-16 sm:max-w-md lg:max-w-sm">
                  Up your social media game with our design templates. Shoot
                  fast, Publish faster.
                </p>
                <p className="hidden lg:block mt-8 text-gray-600 text-xs sm:mx-auto lg:mx-16  sm:max-w-md">
                  Youtube Thumbnail Samples in the Left
                </p>
              </div>
            </div>
            <div>
              <p className="mt-8 text-gray-600 text-xs lg:hidden">
                Youtube Thumbnail Samples Shown Below
              </p>
              <div className="py-6 mx-auto max-w-lg">
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
            </div>
          </section>
          <section className="mt-8 text-center lg:text-left lg:grid lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium px-2 lg:px-0 mx-auto lg:mx-16">
                  Leverage Trends like a Boss
                </h2>
                <p className="mt-6 sm:mx-auto sm:max-w-md lg:mx-16">
                  Get your content up and running quickly. Don't miss on
                  trending opportunities.
                </p>
                <p className="hidden lg:block mt-8 text-gray-600 text-xs sm:mx-auto lg:mx-16 sm:max-w-md">
                  IGTV and Reel Thumbnail Samples in the Right
                </p>
              </div>
            </div>
            <div>
              <p className="mt-8 text-gray-600 text-xs lg:hidden">
                IGTV and Reel Thumbnail Samples Below
              </p>
              <div className="py-6 mx-auto max-w-sm lg:max-w-xs">
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
            </div>
          </section>
          <div className="text-center mt-4">
            <button
              onClick={() => openRequestAccessModal("checkoutTemplateGallery")}
              className="w-64 md:w-auto px-4 py-2 text-cyan-600 font-medium focus:outline-none border border-cyan-500 rounded-3xl 
              hover:text-cyan-500 active:text-cyan-600 transform transition hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Checkout Template Gallery
            </button>
          </div>
          <section
            id="pricing"
            className="mt-12 text-center"
            style={{ scrollMarginTop: "5rem" }}
          >
            <h2 className="text-2xl font-medium">Pricing</h2>
            {/* <p className="mt-4 text-gray-500 text-sm">
              FREE 15 images per month, Cheers! :)
            </p> */}
            <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-4 space-y-6 lg:space-y-0 max-w-screen-lg mx-auto">
              <div className="p-8 border border-gray-300 rounded-xl max-w-xs mx-auto w-full">
                <h3 className="text-xl font-medium">Basic</h3>
                <p className="mt-4 text-gray-500">
                  <span className="text-gray-800 text-2xl font-semibold">
                    $35
                  </span>{" "}
                  / mo
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => openRequestAccessModal("buyBasic")}
                    className="w-48 px-4 py-2.5 font-medium focus:outline-none text-white bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl shadow-md
                    hover:to-cyan-400 active:to-cyan-600 transform transition hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                  >
                    Get Basic
                  </button>
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
                    <span className="px-1"> Popular Design Templates </span>
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
              <div className="p-8 border border-gray-300 rounded-xl max-w-xs mx-auto w-full">
                {/* <p className="text-xs text-cyan-700 font-medium -mt-5 pb-1">
                  Recommended
                </p> */}
                <h3 className="text-xl font-medium">Pro</h3>
                <p className="mt-4 text-gray-500">
                  <span className="text-gray-800 text-2xl font-semibold">
                    $65
                  </span>{" "}
                  / mo
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => openRequestAccessModal("buyPro")}
                    className="w-48 px-4 py-2.5 font-medium focus:outline-none text-white bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl shadow-md
                     hover:to-cyan-400 active:to-cyan-600 transform transition hover:-translate-y-0.5 focus:-translate-y-0.5   ring-2 ring-offset-2 ring-cyan-400"
                  >
                    Get Pro
                  </button>
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
                  {/* <li className="flex items-center justify-center">
                    {" "}
                    {tickMarkIcon}
                    <span className="px-1"> Popular Design Templates </span>
                  </li> */}
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
              <div className="p-8 border border-gray-300 rounded-xl max-w-xs mx-auto w-full">
                <h3 className="text-xl font-medium">Business Pro </h3>
                <p className="mt-4 text-gray-500">
                  <span className="text-gray-800 text-2xl font-semibold">
                    $265
                  </span>{" "}
                  / mo
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => openRequestAccessModal("buyBusinessPro")}
                    className="w-48 px-4 py-2.5 font-medium focus:outline-none text-white bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl shadow-md
                    hover:to-cyan-400 active:to-cyan-600 transform transition hover:-translate-y-0.5   focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                  >
                    Get Business Pro
                  </button>
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
                    <span className="px-1"> Special + Popular Templates </span>
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
            </div>
            <p className="mt-6 text-xs lg:text-sm">
              Want something custom?
              <a
                onClick={() => openRequestAccessModal("buyCustomPricing")}
                className="mx-2 underline cursor-pointer text-cyan-600 hover:text-cyan-800 visited:text-purple-600 
                focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-cyan-500"
              >
                Get in touch!
              </a>
            </p>
          </section>
          <section className="mt-16 text-center">
            <h2 className="text-xl lg:text-xl font-medium">
              Ready to Automate?
            </h2>
            <div className="mt-4 text-sm">
              <button
                onClick={() => openRequestAccessModal("requestAccessSecondary")}
                className="w-48 px-3 py-2.5 font-medium focus:outline-none border border-cyan-500 rounded-3xl text-cyan-600  
                hover:text-cyan-500 active:text-cyan-700 transform transition hover:-translate-y-0.5 
                focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Request Access
              </button>
            </div>
          </section>
        </Container>
        <footer className="mt-12 text-center border-t  border-gray-300">
          <p className="mt-8 text-gray-500 font-poppins text-xs">
            © ezCreatives. All rights reserved.
          </p>
        </footer>
      </div>

      <Transition appear show={isRequestAccessModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeRequestAccessModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as={Fragment}>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {!emailStatus.success && (
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Let's begin our journey 🚀
                    </Dialog.Title>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        Please enter your email so we can reach out to you with
                        the necessary details and offers.
                      </p>
                      {/* <p className="mt-2 text-sm text-gray-500">We won't spam.</p> */}
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-4 space-y-4">
                        <input
                          id="email"
                          type="email"
                          required
                          className={`mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
                            formik.touched.email && formik.errors.email
                              ? "border-red-500 focus:border-red-300 focus:ring-red-200"
                              : "border-gray-300 focus:border-cyan-300 focus:ring-cyan-200"
                          }`}
                          placeholder="Email Address"
                          {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-500 text-sm px-2">
                            {formik.errors.email}
                          </div>
                        ) : null}

                        <button
                          type="submit"
                          disabled={submittingEmail}
                          className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-cyan-900 bg-cyan-100 border border-transparent rounded-md hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 ${
                            submittingEmail
                              ? "animate-pulse cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {submittingEmail ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </form>
                    {emailStatus.attempt && (
                      <div className="mt-4 text-sm text-red-500">
                        Oops... something went wrong.
                      </div>
                    )}
                  </div>
                )}

                {emailStatus.success && (
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Email Received 🎉
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        You'll receive a mail within 48 hrs. Thanks for choosing
                        ezCreatives.
                      </p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={closeRequestAccessModal}
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-cyan-900 bg-cyan-100 border border-transparent rounded-md hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
