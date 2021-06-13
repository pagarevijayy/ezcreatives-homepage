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
export const Wisdom0 = ({ quote, author, imageURL, socialHandle }) => {
  return (
    <div className="design-wrapper">
      <div className="design-template flex flex-col justify-end w-96 h-auto font-poppins text-left text-lg bg-black text-gray-200">
        <section>
          <p className="p-4">
            {quote} <span className="whitespace-nowrap">{author} </span>
          </p>
          <div className="relative">
            <div>
              <img
                className="w-full max-h-56 object-cover"
                src={imageURL}
                alt={quote}
              />
            </div>
            <p className="flex items-center justify-start text-xs mb-1.5 absolute bottom-0 left-1/2 -translate-x-1/2 transform scale-75 bg-gray-900 py-1 px-2">
              <span>{instaSVG}</span> <span className="pl-1">{twitterSVG}</span>{" "}
              <span className="pl-1"> {socialHandle} </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Wisdom1 = ({
  quote,
  author,
  imageURL,
  socialHandle,
  mainContentPadding,
}) => {
  // quote = `"You know, there are two good things in life, freedom of thought and freedom of action."`;
  // author = "Bertrand Russell";
  // imageURL = `https://pbs.twimg.com/media/E3tKe1kVEAI2L45.jpg`;
  // socialHandle = "The Philosophy Quote";

  // to solve for widow word
  mainContentPadding = mainContentPadding || "px-4";

  /**
   * @todo:
   * 1. allow background to take white color and any opacity level
   * 2. allow branding to be on a single line (and align left/right/center)
   * 3. allow bottom margin to be set by user like padding.
   * 4. allow to remove horizontal line
   */
  return (
    <div className="design-wrapper">
      <div className="relative w-96 h-96">
        <section className="relative">
          <img className="w-96 h-96 object-cover" src={imageURL} alt={quote} />
          <aside className="absolute w-full h-full bg-black top-0 bg-opacity-80"></aside>
        </section>
        <div className="absolute w-full h-full top-0 flex flex-col justify-end text-center text-lg ">
          <div className={"opacity-95" + " " + `${mainContentPadding}`}>
            <p className="font-merriweather italic text-gray-50">{quote}</p>
            <hr className="mt-8 mx-auto border-none w-8 h-0.5 bg-gray-50" />
            <p className="mt-7 text-xs font-bold tracking-widest uppercase text-gray-200 transform scale-90">
              {author}
            </p>
          </div>
          <div className="px-16 mb-8 mt-6 transform scale-75 origin-left">
            <span className="w-min table-caption text-left text-sm leading-snug font-poppins font-semibold text-gray-300">
              {socialHandle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Wisdom2 = ({
  quote,
  author,
  imageURL,
  socialHandle,
  mainContentPadding,
}) => {
  // quote = `"The less people know, the more stubbornly they know it."`;
  // author = "Osho";
  // imageURL = `https://pbs.twimg.com/media/E3tVluFVoAcLfpI.jpg`;
  mainContentPadding = mainContentPadding || "px-4";

  return (
    <div className="design-wrapper">
      <div className="relative w-96 h-96">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center text-center">
            <div className={"" + " " + `${mainContentPadding}`}>
              <p className="font-merriweather text-lg">{quote}</p>
              <p className="mt-4 text-sm font-semibold uppercase">{author}</p>
            </div>
          </div>
          <div>
            <img
              className="w-48 h-96 object-cover"
              src={imageURL}
              alt={quote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Wisdom3 = ({
  quote,
  author,
  imageURL,
  socialHandle,
  mainContentPadding,
}) => {
  // quote = `"The less people know, the more stubbornly they know it."`;
  // author = "Osho";
  // imageURL = `https://pbs.twimg.com/media/E3tVluFVoAcLfpI.jpg`;
  mainContentPadding = mainContentPadding || "px-4";

  return (
    <div className="design-wrapper">
      <div className="w-96 h-96 p-6 flex flex-col items-center justify-end bg-gray-900 text-gray-50 text-center">
        <img
          className="w-36 h-36 object-cover rounded-full"
          src={imageURL}
          alt={quote}
        />
        <p
          className={
            "mt-8 font-poppins text-lg" + " " + `${mainContentPadding}`
          }
        >
          {quote}
        </p>
        <p className="mt-4 mb-6 text-xs text-gray-200 font-medium tracking-wider uppercase">
          {" "}
          {author}
        </p>
      </div>
    </div>
  );
};

export const SquareTwitter = ({
  quote,
  author,
  imageURL,
  socialHandle,
  mainContentPadding,
}) => {
  // quote = `"The less people know, the more stubbornly they know it."`;
  // author = "Osho";
  // imageURL = `https://pbs.twimg.com/media/E3tVluFVoAcLfpI.jpg`;
  mainContentPadding = mainContentPadding || "px-4";
  let twitterHandle = "@paulg";

  return (
    <div className="design-wrapper">
      <div className="w-96 h-96 flex flex-col items-center justify-center bg-blue-500">
        <div className="bg-white m-6 p-4 rounded-lg bg-opacity-70 ">
          <div className="flex items-center">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src={imageURL}
              alt={quote}
            />
            <div className="px-3">
              <p className="font-semibold capitalize"> {author}</p>
              <p className="text-sm">{twitterHandle}</p>
            </div>
          </div>
          <p className={"mt-4" + " " + `${mainContentPadding}`}>{quote}</p>
        </div>
      </div>
    </div>
  );
};

// export const InstaPost = ({ quote, author, imageURL, socialHandle }) => (
//   <div className="design-wrapper">
//     <div
//       className="design-template flex flex-col justify-end font-poppins text-left text-lg bg-black text-gray-200"
//       style={{ height: "auto", width: "1080px" }}
//     >
//       <section>
//         <p className="p-12 text-5xl leading-normal">
//           {quote} <span className="whitespace-nowrap">{author} </span>
//         </p>
//         <div className="relative">
//           <div>
//             <img className="w-full object-cover" src={imageURL} alt="author" />
//           </div>
//           <p className="flex items-center justify-start text-2xl mb-2 absolute bottom-0 left-1/2 -translate-x-1/2 transform  bg-gray-900 py-2 px-4 space-x-4">
//             <span style={{ transform: "scale(1.5)" }}>{instaSVG}</span>{" "}
//             <span style={{ transform: "scale(1.5)" }}>{twitterSVG}</span>{" "}
//             <span> {socialHandle} </span>
//           </p>
//         </div>
//       </section>
//     </div>
//   </div>
// );

/**
 * @todo:
 * - allow dynamic: branding-location (top down left right center)
 * - allow dynamic padding, margins, border-radius
 *  - allow changing font style, size and weight
 *  - allow changing background color adjustment
 * - any image auto adjustment
 */
