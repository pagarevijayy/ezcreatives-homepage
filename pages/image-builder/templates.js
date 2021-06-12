import { Wisdom0, Wisdom1 } from "../../lib/design-templates/classic-designs";
import Container from "../../layouts/container";

const templates = () => {
  const invertCommaQuote = `"You know, there are two good things in life, freedom of thought and freedom of action."`;

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-100 ">
      <div className="header text-center py-6 shadow-sm">
        <p className="font-poppins font-bold text-3xl tracking-wider">
          image <span className="text-cyan-500 uppercase">builder</span>
        </p>
        <p className="mt-2 text-gray-700">Bulk images in a Click!</p>
      </div>
      <Container>
        <div className="py-8 flex flex-wrap gap-6">
          <Wisdom0
            quote={invertCommaQuote}
            author="Bertrand Russell"
            imageURL="https://www.the-philosophy.com/wp-content/uploads/2011/06/bertrand_russell_image.jpg"
            socialHandle="wethesapiens_"
          ></Wisdom0>
          <Wisdom1
            quote="You know, there are two good things in life, freedom of thought and freedom of action."
            author="Bertrand Russell"
            imageURL="https://www.the-philosophy.com/wp-content/uploads/2011/06/bertrand_russell_image.jpg"
            socialHandle="The Philosophy Quote"
            mainContentPadding="px-8"
          />
        </div>
      </Container>
    </div>
  );
};

export default templates;
