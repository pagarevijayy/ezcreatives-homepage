import Head from "next/head";
import Link from "next/link";
import Menubar from "../components/menubar";
import Container from "../layouts/container";

import { PROJECT_PUNCHLINE, PROJECT_DESCRIPTION } from "../constants/core";

export default function Home() {
  const faviconEmoji = "🎨";
  const faviconHREF = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${faviconEmoji}</text></svg>`;

  return (
    <>
      <Head>
        <title>ez Creatives - Automate Your Social Media Creatives.</title>
        <link rel="icon" href={faviconHREF} />
      </Head>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-100">
        <Menubar />
        <section className="hero-section text-center">
          <Container>
            <p className="mt-24 text-3xl sm:text-5xl md:max-w-screen-sm md:mx-auto font-poppins font-medium tracking-wide">
              {PROJECT_PUNCHLINE}
            </p>
            <p className="mt-8 px-2 text-xl md:text-2xl md:max-w-screen-sm md:mx-auto">
              {PROJECT_DESCRIPTION}
            </p>
            <div className="pt-8 lg:pt-12 lg:text-lg">
              <Link href="/something">
                <button className="w-56 px-4 py-2.5 font-medium focus:outline-none text-gray-50 bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-3xl">
                  Request Access
                </button>
              </Link>
            </div>
          </Container>

          {/* insert some sample images here. Followed by demo link */}
        </section>
      </div>
    </>
  );
}
