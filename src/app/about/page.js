import RedLink from "../../component/RedLink";

export default function About() {
  return (
    <div className="flex flex-col w-full items-center font-sans pb-[4rem]">
      <div className="flex flex-col w-[95%] lg:w-[85%] xl:w-[80%]">
        <div className="pb-10">
          <h1>About Us</h1>
          <p className="text-lg text-text_hover">In 4 years of being an offical club we have accomplished and grown a lot</p>
        </div>
        <div className="space-y-12">
          <div>
            <h2 className="pb-2">Our Story</h2>
            <p className="text-sm md:text-base xl:text-lg leading-loose">
              In 2019, with the inspiration of Professor Mark Merry, a few students founded the Liberty University ACM ICPC Club. The goal was to send teams to the annual ACM International Collegiate Programming Contest. Later on, our club was renamed to the Competitive Programming Club.
            </p>
          </div>

          <div>
            <h2 className="pb-2">The Mission</h2>
            <p className="text-sm md:text-base xl:text-lg leading-loose">
              The Liberty University Competitive Programming Club is about developing the skills necessary to solve programming problems. We strive for every student to succeed in technical interviews and competitions. We provide a community at Liberty University for people interested in algorithms, programming, and software engineering.
            </p>
          </div>
        </div>
      </div>
    </div> 
  );
}