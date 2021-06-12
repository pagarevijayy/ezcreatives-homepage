import { useRef } from "react";
import * as htmlToImage from "html-to-image";

import { Wisdom0, Wisdom1 } from "../lib/design-templates/classic-designs";

import Container from "../layouts/container";
import { WETHESAPIENS } from "../data/content";

const DesignImage = () => {
  const elementRef = useRef([]);
  const wisdom = useRef([]);

  elementRef.current = [];

  function exportFiles() {
    console.log("let the download begin!");

    // downloadFiles(wisdom.current, `creative_n`);
    // downloadFiles(elementRef.current[0], `creative_`);

    elementRef.current.forEach((e, i) => {
      downloadFiles(e, `creative_${i}`);
    });
  }

  const downloadFiles = (element, filename) => {
    htmlToImage
      .toPng(element, {
        pixelRatio: 3,
      })
      .then(function (dataUrl) {
        let a = document.createElement("a");
        a.href = dataUrl;
        a.download = filename;
        a.click();
        console.log("downloading", filename);
      });
  };

  const addToElementRef = (el) => {
    if (el && !elementRef.current.includes(el)) {
      elementRef.current.push(el);
    }
  };

  return (
    <div>
      <Container>
        <div className="mb-6">
          <button
            className="p-4 bg-cyan-300 m-6 rounded-lg font-medium uppercase font-poppins"
            onClick={exportFiles}
          >
            Export All As JPEG
          </button>
          {/* <p className="max-w-prose text-left text-xs p-4 text-red-700 border border-red-300 bg-red-100 rounded-lg">
          ⚠ Warning: Please make sure: 1). you've enabled (multiple) automatic
          downloads for this site 2). disabled - asking where to save each file
          before the download. You will find these options in the browser
          settings. Recommend downloading single files (until you establish
          trust with us) (Never make this as a default for any site. As this
          feature can be used to inject malicious files.)
        </p> */}
        </div>

        <div className="mx-auto pb-8">
          <div className="flex flex-wrap gap-6">
            {/* <div ref={wisdom}>
              <Wisdom1
                quote="You know, there are two good things in life, freedom of thought and freedom of action."
                author="Bertrand Russell"
                imageURL="https://pbs.twimg.com/media/E3tKe1kVEAI2L45.jpg"
                socialHandle="The Philosophy Quote"
                mainContentPadding="px-8"
              />
            </div> */}
            {WETHESAPIENS.contentArray.map((post, index) => {
              return (
                <div key={`post_${index}`} className="mx-auto zoom-out-75">
                  <div ref={addToElementRef}>
                    <Wisdom0
                      quote={post.quote}
                      author={post.author}
                      imageURL={post.image}
                      socialHandle={WETHESAPIENS.socialHandle}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DesignImage;
