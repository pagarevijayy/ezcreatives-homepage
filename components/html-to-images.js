import { useRef } from "react";
import html2canvas from "html2canvas";
import { TextUpImageDown } from "../lib/design-templates/classic-designs";
import { WETHESAPIENS } from "../data/content";

const DesignImage = () => {
  const componentRef = useRef();

  //Your modified code.
  function printToFile() {
    html2canvas(componentRef.current, {
      useCORS: true,
    }).then(function (canvas) {
      var imageURL = canvas.toDataURL("image/jpeg", 1);
      let a = document.createElement("a");
      a.href = imageURL;
      a.download = imageURL;
      a.click();
    });
  }

  return (
    <div className="p-12">
      <div className="p-8">
        <button
          className="p-4 bg-cyan-300 m-6 rounded-lg font-medium uppercase font-poppins"
          onClick={printToFile}
        >
          Export As JPEG
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {WETHESAPIENS.contentArray.map((post, index) => {
          return (
            <div key={`post_${index}`}>
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
