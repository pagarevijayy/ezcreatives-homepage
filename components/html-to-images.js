import { useRef } from "react";
import html2canvas from "html2canvas";
import { TextUpImageDown } from "../lib/design-templates/classic-designs";
import { WETHESAPIENS } from "../data/content";

const DesignImage = () => {
  const elementRef = useRef([]);
  elementRef.current = [];

  function exportFiles() {
    console.log("let the download begin!");
    // @todo: while images are being exported - show animation.

    elementRef.current.forEach((e, i) => {
      // for quality purpose: transform before download
      e.style.transform = "scale(3)";
      downloadFiles(e, `creative_${i}`);
    });
  }

  const downloadFiles = (element, filename) => {
    html2canvas(element, {
      useCORS: true,
    }).then(function (canvas) {
      // remove transformation as the desired html has be converted into canvas.
      element.style.transform = "none";

      let imageData = canvas.toDataURL("image/jpeg", 1.0);

      let a = document.createElement("a");
      a.href = imageData;
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
    <div className="p-12">
      <div className="mb-6">
        <button
          className="p-4 bg-cyan-300 m-6 rounded-lg font-medium uppercase font-poppins"
          onClick={exportFiles}
        >
          Export All As JPEG
        </button>
        <p className="max-w-prose text-left text-xs p-4 text-red-700 border border-red-300 bg-red-100 rounded-lg">
          ⚠ Warning: Please make sure: 1). you've enabled (multiple) automatic
          downloads for this site 2). disabled - asking where to save each file
          before the download. You will find these options in the browser
          settings. Recommend downloading single files (until you establish
          trust with us) (Never make this as a default for any site. As this
          feature can be used to inject malicious files.)
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        {WETHESAPIENS.contentArray.map((post, index) => {
          return (
            <div key={`post_${index}`} ref={addToElementRef}>
              <TextUpImageDown
                quote={post.quote}
                author={post.author}
                imageURL={post.image}
                socialHandle={WETHESAPIENS.socialHandle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignImage;
