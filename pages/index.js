import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const faviconEmoji = "🎨";
  const faviconHREF = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${faviconEmoji}</text></svg>`;
  return (
    <>
      <Head>
        <title>
          ezCreatives - Digital Asset Builder | Automate and scale your
          creatives.
        </title>
        <link rel="icon" href={faviconHREF} />
      </Head>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-200 flex justify-center items-center">
        <div className="text-center">
          <p className="font-poppins font-bold text-3xl tracking-wider">
            ez <span className="text-cyan-500 uppercase">CREATIVES</span>
          </p>
          <p className="mt-1 text-gray-700">automate your creatives</p>
          <p className="mt-8">
            <Link href="/image-builder">
              <button className="bg-cyan-300 p-2 capitalize">
                Goto Image builder
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
