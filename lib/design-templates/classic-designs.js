import { instaSVG, twitterSVG } from "./svg-icons";

export const twitterDesign = (
  <div className="design-wrapper">
    <p className="pb-4">currentTwitterDesign</p>

    <div className="design-template flex flex-col justify-center w-96 h-auto px-4 py-4 text-left text-lg bg-black text-gray-200">
      <section className="space-y-2">
        <p>
          "It is not death that a man should fear, but he should fear never
          beginning to live." <span>Bob Marley </span>{" "}
          <span className="text-blue-400">#wethesapiens</span>
        </p>
        <div>
          <img
            className="rounded-lg"
            src="https://pbs.twimg.com/media/E3RxdYRUYAEbrHK?format=jpg&name=900x900"
            alt="author"
          />
        </div>
      </section>
    </div>
  </div>
);

/**@note convention: text-position-image-position */
export const TextUpImageDown = ({ quote, author, imageURL, socialHandle }) => (
  <div className="design-wrapper">
    <div className="design-template flex flex-col justify-center w-96 h-auto font-poppins text-left text-lg bg-black text-gray-200">
      <section>
        <p className="p-4">
          {quote} <span className="whitespace-nowrap">{author} </span>
        </p>
        <div className="relative">
          <img src={imageURL} alt="author" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-50 py-0.5 px-2">
            <p className="flex items-center justify-start text-xs pt-1 mb-1.5">
              <span>{instaSVG}</span> <span className="pl-1">{twitterSVG}</span>{" "}
              <span className="pl-1"> {socialHandle} </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

/**
 * @todo:
 * - allow dynamic: branding-location (top down left right center)
 * - allow dynamic padding, margins, border-radius
 */
