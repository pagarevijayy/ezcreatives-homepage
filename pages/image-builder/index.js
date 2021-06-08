import DesignImage from "../../components/html-to-images";

const ImageBuilder = () => {
  return (
    <>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-100 ">
        <div className="header text-center py-6 shadow-sm">
          <p className="font-poppins font-bold text-3xl tracking-wider">
            image <span className="text-cyan-500 uppercase">builder</span>
          </p>
          <p className="mt-2 text-gray-700">Bulk images in a Click!</p>
        </div>
        <div className="text-center">
          <DesignImage />
        </div>
      </div>
    </>
  );
};

export default ImageBuilder;
