import {
  Wisdom0,
  Wisdom1,
  Wisdom2,
  Wisdom3,
  Wisdom4,
  SquareTwitter,
  SquareQuote,
  ThumbnailYT1,
  ThumbnailYT2,
  ThumbnailYT3,
} from "../../lib/design-templates/classic-designs";
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
          />
          <Wisdom1
            quote="You know, there are two good things in life, freedom of thought and freedom of action."
            author="Bertrand Russell"
            imageURL="https://www.the-philosophy.com/wp-content/uploads/2011/06/bertrand_russell_image.jpg"
            socialHandle="The Philosophy Quote"
            mainContentPadding="px-8"
          />
          <Wisdom2
            quote="The less people know, the more stubbornly they know it."
            author="Osho"
            imageURL="https://pbs.twimg.com/media/E3tVluFVoAcLfpI.jpg"
          />
          <Wisdom3
            quote="If you want to be great, walk the rope without a boss and without a net."
            author="Naval"
            imageURL="https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg"
            mainContentPadding="px-0"
          />
          <SquareTwitter
            quote="Something I told 9 yo: If you're a maker, resist being told what to do by people who aren't."
            author="Paul Graham"
            socialHandle="@paulg"
            imageURL="https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg"
            mainContentPadding="px-0"
          />
          <Wisdom4
            quote="Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win."
            author="Sun Tzu"
            imageURL="https://pbs.twimg.com/media/Eu-1XoxUcAMhhsb.jpg"
          />
          <div className="shadow-lg">
            <SquareQuote
              quote="Something I told 9 yo: If you're a maker, resist being told what to do by people who aren't."
              author="Paul Graham"
              socialHandle="Founder, Y Combinator"
              imageURL="https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg"
              mainContentTextSize="text-2xl"
            />
          </div>
          <div>
            <ThumbnailYT1
              quote="Learn how to make delicious pizzas under 15mins"
              subQuote="#TastyBites"
              imageURL="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80"
            />
          </div>
          <div>
            <ThumbnailYT2
              quote="Total Core Workout"
              subQuote="20 mins challenge"
              imageURL="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div>
            <ThumbnailYT3
              quote="Learn Javascript in 30 mins"
              subQuote="#CodeWithMe"
              imageURL="https://web.learncodeonline.in/static/g1-ab1d75af935ef6d6aa92891c1b4cb51b.jpg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default templates;
