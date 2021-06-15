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
          <div className="flex flex-col justify-center text-center bg-white">
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

export const Wisdom4 = ({
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

  const clipPath1 =
    "polygon(0% 100%, 0% 0%, 100% 0%, 100% 99%, 96% 95%, 92% 100%, 87% 98%, 83% 100%, 72% 99%, 63% 94%, 59% 97%, 59% 98%, 45% 98%, 37% 100%, 36% 95%, 31% 97%, 20% 94%, 16% 100%, 11% 97%)";

  return (
    <div className="design-wrapper">
      <div className="w-96 h-96 bg-white">
        <div style={{ clipPath: clipPath1 }}>
          <img
            className="w-full h-48 object-cover"
            src={imageURL}
            alt={quote}
          />
        </div>
        <div className="h-48 flex flex-col items-center justify-end text-center">
          <p
            className={
              "mt-4 font-poppins text-lg" + " " + `${mainContentPadding}`
            }
          >
            {quote}
          </p>
          <p className="my-6 text-xs font-medium tracking-wider uppercase whitespace-nowrap">
            {author}
          </p>
        </div>
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

  return (
    <div className="design-wrapper">
      <div className="w-96 h-96 flex flex-col items-center justify-center bg-blue-500">
        <div className="bg-white m-6 p-4 rounded-lg bg-opacity-95 ">
          <div className="flex items-center">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={imageURL}
              alt={quote}
            />
            <div className="px-3">
              <p className="font-semibold capitalize"> {author}</p>
              <p className="text-sm">{socialHandle}</p>
            </div>
          </div>
          <p className={"mt-4" + " " + `${mainContentPadding}`}>{quote}</p>
        </div>
      </div>
    </div>
  );
};

export const SquareQuote = ({
  quote,
  author,
  imageURL,
  socialHandle,
  mainContentPadding,
  mainContentTextSize,
}) => {
  // quote = `"The less people know, the more stubbornly they know it."`;
  // author = "Osho";
  // imageURL = `https://pbs.twimg.com/media/E3tVluFVoAcLfpI.jpg`;
  mainContentPadding = mainContentPadding || "px-2";
  mainContentTextSize = mainContentTextSize || "text-2xl";

  return (
    <div className="design-wrapper">
      <div className="p-8 w-96 h-96 flex flex-col justify-between bg-white">
        <div className="text-left">
          <p className="text-7xl text-gray-400 font-poppins h-12">“</p>
          <p
            className={
              "mt-4 inline bg-yellow-300 font-poppins italic font-medium leading-relaxed text-gray-700 decoration-clone" +
              " " +
              `${mainContentPadding} ${mainContentTextSize}`
            }
          >
            {quote}
          </p>
        </div>
        <div className="flex items-center mr-0 ml-auto">
          <div className="px-4 text-right">
            <p className="font-semibold capitalize"> {author}</p>
            <p className="mt-1 text-sm font-poppins text-gray-500 whitespace-nowrap">
              {socialHandle}
            </p>
          </div>
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={imageURL}
            alt={quote}
          />
        </div>
      </div>
    </div>
  );
};

export const ThumbnailYT1 = ({
  quote,
  subQuote,
  imageURL,
  socialHandle,
  mainContentPadding,
  mainContentTextSize,
  backgroundColor,
}) => {
  // quote = `Learn how to make delicious pizzas under 15mins.`;
  // subQuote = "#TastyBites";
  // imageURL =
  //   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80";

  backgroundColor = backgroundColor || "bg-yellow-700";
  mainContentPadding = mainContentPadding || "px-0";
  mainContentTextSize = mainContentTextSize || "text-2xl";

  const templateDimensions = { width: "640px", height: "390px" };
  const imageDimensions = { width: "340px", height: "390px" };
  const clipPath1 = "polygon(0% 100%, 0% 0%, 80% 0%, 100% 100%)";

  return (
    <div className="design-wrapper">
      <div
        className={"grid grid-cols-2" + " " + `${backgroundColor}`}
        style={templateDimensions}
      >
        <div style={{ clipPath: clipPath1 }}>
          <img
            style={{ ...imageDimensions, objectFit: "cover" }}
            src={imageURL}
            alt={quote}
          />
        </div>
        <div className="pr-8 flex flex-col justify-center text-right">
          <p
            className={
              "text-4xl text-gray-100 capitalize  font-poppins font-bold" +
              " " +
              `${mainContentPadding}`
            }
          >
            {quote}
          </p>
          <p className="font-poppins font-bold text-xl text-gray-200 mt-6">
            {subQuote}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ThumbnailYT2 = ({
  quote,
  subQuote,
  imageURL,
  socialHandle,
  mainContentPadding,
  mainContentTextSize,
  backgroundColor,
}) => {
  // quote = `Learn how to make delicious pizzas under 15mins.`;
  // subQuote = "#TastyBites";
  // imageURL =
  //   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80";

  backgroundColor =
    backgroundColor ||
    "bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400";
  mainContentPadding = mainContentPadding || "px-4";
  mainContentTextSize = mainContentTextSize || "text-2xl";

  const templateDimensions = { width: "640px", height: "390px" };
  const imageDimensions = { width: "430px", height: "390px" };
  // const clipPath1 = "polygon(0% 100%, 0% 0%, 80% 0%, 100% 100%)";

  const clipPath2 = "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)";

  return (
    <div className="design-wrapper">
      <div
        className={"grid grid-cols-3" + " " + `${backgroundColor}`}
        style={templateDimensions}
      >
        <div className="pl-6 relative text-left">
          <p className="my-6 font-poppins font-bold text-xl text-gray-200 ">
            {subQuote}
          </p>
          <div className="mt-8 ml-6 absolute w-96 z-10">
            <p
              className={
                " inline decoration-clone leading-relaxed text-5xl text-gray-100 capitalize bg-gray-900 font-poppins font-bold" +
                " " +
                `${mainContentPadding}`
              }
            >
              {quote}
            </p>
          </div>
        </div>
        <div className="col-span-2 -mr-1" style={{ clipPath: clipPath2 }}>
          <img
            style={{ ...imageDimensions, objectFit: "cover" }}
            src={imageURL}
            alt={quote}
          />
        </div>
      </div>
    </div>
  );
};

export const ThumbnailYT3 = ({
  quote,
  subQuote,
  imageURL,
  socialHandle,
  mainContentPadding,
  mainContentTextSize,
  backgroundColor,
}) => {
  // quote = `Learn how to make delicious pizzas under 15mins.`;
  // subQuote = "#TastyBites";
  // imageURL =
  //   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80";

  backgroundColor = backgroundColor || "bg-blue-500";
  mainContentPadding = mainContentPadding || "px-0";
  mainContentTextSize = mainContentTextSize || "text-2xl";

  const templateDimensions = { width: "640px", height: "390px" };
  const imageDimensions = { width: "340px", height: "390px" };

  return (
    <div className="design-wrapper">
      <div
        className={"grid grid-cols-2" + " " + `${backgroundColor}`}
        style={templateDimensions}
      >
        <div className="pl-12 flex flex-col justify-center text-left">
          <p
            className={
              "text-4xl text-gray-100 font-poppins font-bold" +
              " " +
              `${mainContentPadding}`
            }
          >
            {quote}
          </p>
          <p className="font-poppins font-bold text-xl text-white mt-6">
            {subQuote}
          </p>
        </div>
        <div className="pr-6 flex justify-center items-center">
          <img
            className="w-64 h-64 object-cover rounded-full border-4 border-gray-50"
            src={imageURL}
            alt={quote}
          />
        </div>
      </div>
    </div>
  );
};

export const ThumbnailYT4 = ({
  quote,
  subQuote,
  imageURL1,
  imageURL2,
  socialHandle,
  mainContentPadding,
  mainContentTextSize,
  backgroundColor,
}) => {
  // quote = `Learn how to make delicious pizzas under 15mins.`;
  // subQuote = "#TastyBites";
  // imageURL =
  //   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80";

  backgroundColor = backgroundColor || "bg-gray-900";
  mainContentPadding = mainContentPadding || "px-0";
  mainContentTextSize = mainContentTextSize || "text-2xl";

  const templateDimensions = { width: "640px", height: "390px" };
  const imageDimensions = { width: "340px", height: "390px" };

  return (
    <div className="design-wrapper">
      <div
        className={
          "px-6 flex flex-col justify-center items-center text-center" +
          " " +
          `${backgroundColor}`
        }
        style={templateDimensions}
      >
        <p
          className={
            "text-4xl text-gray-100 capitalize  font-poppins font-bold" +
            " " +
            `${mainContentPadding}`
          }
        >
          {quote}
        </p>
        <p className="font-poppins font-bold text-xl text-yellow-600 mt-6">
          {subQuote}
        </p>
        <div className="flex justify-center gap-8 mt-6">
          <img
            className="w-36 h-36 object-cover rounded-full "
            src={imageURL1}
            alt={quote}
          />
          <img
            className="w-36 h-36 object-cover rounded-full "
            src={imageURL2}
            alt={quote}
          />
        </div>
      </div>
    </div>
  );
};

export const ThumbnailIGTV1 = ({
  quote,
  subQuote,
  imageURL,
  socialHandle,
  mainContentPadding,
  mainContentTextSize,
  backgroundColor,
}) => {
  // quote = `Learn how to make delicious pizzas under 15mins.`;
  // subQuote = "#TastyBites";
  // imageURL =
  //   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80";

  backgroundColor = backgroundColor || "bg-gray-900";
  mainContentPadding = mainContentPadding || "px-0";
  mainContentTextSize = mainContentTextSize || "text-2xl";

  const templateDimensions = { width: "390px", height: "640px" };

  return (
    <div className="design-wrapper">
      <div
        className={
          "px-6 flex flex-col justify-center items-center text-center" +
          " " +
          `${backgroundColor}`
        }
        style={templateDimensions}
      >
        <p
          className={
            "text-4xl text-gray-100 capitalize  font-poppins font-bold" +
            " " +
            `${mainContentPadding}`
          }
        >
          {quote}
        </p>
        <p className="font-poppins font-bold text-xl text-yellow-600 mt-6">
          {subQuote}
        </p>
        <div className="flex justify-center gap-8 mt-12">
          <img
            className="w-36 h-36 object-cover rounded-full "
            src={imageURL}
            alt={quote}
          />
        </div>
      </div>
    </div>
  );
};

export const ThumbnailIGTV2 = ({
  quote,
  subQuote,
  imageURL,
  socialHandle,
  mainContentPadding,
  mainContentTextSize,
  backgroundColor,
}) => {
  // quote = `Learn how to make delicious pizzas under 15mins.`;
  // subQuote = "#TastyBites";
  // imageURL =
  //   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80";

  backgroundColor = backgroundColor || "bg-yellow-700";
  mainContentPadding = mainContentPadding || "px-0";
  mainContentTextSize = mainContentTextSize || "text-2xl";

  const templateDimensions = { width: "390px", height: "640px" };
  // const clipPath1 = "polygon(0% 100%, 0% 0%, 100% 15%, 100% 100%)";

  return (
    <div className="design-wrapper">
      <div
        className={"grid grid-rows-2 " + " " + `${backgroundColor}`}
        style={templateDimensions}
      >
        <div className="px-6 flex flex-col items-center justify-center text-center">
          <p
            className={
              "text-4xl text-white capitalize  font-poppins font-bold" +
              " " +
              `${mainContentPadding}`
            }
          >
            {quote}
          </p>
          <p className="font-poppins font-bold text-xl text-gray-200 mt-6">
            {subQuote}
          </p>
        </div>

        <div className=" border-t-4 border-white">
          <img
            className="w-full h-full object-cover"
            src={imageURL}
            alt={quote}
          />
        </div>
      </div>
    </div>
  );
};

export const ThumbnailIGTV3 = ({
  quote,
  subQuote,
  imageURL,
  socialHandle,
  mainContentPadding,
  mainContentTextSize,
  backgroundColor,
}) => {
  // quote = `Learn how to make delicious pizzas under 15mins.`;
  // subQuote = "#TastyBites";
  // imageURL =
  //   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80";

  backgroundColor =
    backgroundColor || "bg-gradient-to-b from-gray-200 to-white";
  mainContentPadding = mainContentPadding || "px-0";
  mainContentTextSize = mainContentTextSize || "text-2xl";

  const templateDimensions = { width: "390px", height: "640px" };

  const clipPath1 =
    "polygon(0% 100%, 0% 10%, 4% 0%,  7% 5%, 15% 3%, 25% 6%, 30% 2%, 33% 4%, 35% 3%, 40% 7%, 48% 4%, 55% 6%, 59% 4%, 65% 6%, 70% 8%, 73% 5%, 80% 2%, 87% 6%, 95% 5%, 100% 6%, 100% 100%)";

  return (
    <div className="design-wrapper">
      <div
        className={"grid grid-rows-2 " + " " + `${backgroundColor}`}
        style={templateDimensions}
      >
        <div className="px-6 flex flex-col items-center justify-center text-center">
          <p
            className={
              "text-4xl text-black capitalize  font-poppins font-bold" +
              " " +
              `${mainContentPadding}`
            }
          >
            {quote}
          </p>
          <p className="font-poppins font-bold text-xl text-gray-700 mt-6">
            {subQuote}
          </p>
        </div>

        <div className=" " style={{ clipPath: clipPath1 }}>
          <img
            className="w-full h-full object-cover"
            src={imageURL}
            alt={quote}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * @todo:
 * - allow dynamic: branding-location (top down left right center)
 * - allow dynamic padding, margins, border-radius
 *  - allow changing font style, size and weight
 *  - allow changing background color adjustment
 * - any image auto adjustment
 */
//

/**
 * V2 Template designs:
 *
 *  SQUARE
 * - https://www.canva.com/p/templates/EAEb8zu3LEA-khaki-minimalist-special-offer-sale-instagram-post/
 * - https://www.canva.com/p/templates/EAEgPPLM19k-blue-simple-and-modern-news-instagram-post/
 * - https://www.canva.com/design/DAEhWT3hHeo/xUPVWSkI5W5Soyr5Vi5I5g/edit?layoutQuery=Instagram+Posts
 *
 */
