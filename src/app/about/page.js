export default function About() {
  return (
    <div className="flex flex-col w-full items-center font-sans pb-[4rem] bg-background">
      <div className="flex flex-col w-[95%] lg:w-[85%] xl:w-[80%]">
        <div className="pb-10">
          <h1>About Us</h1>
          <p className="md:text-lg text-text_hover2">In the 4 years since becoming an offical club we have accomplished and grown a lot</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap md:flex-nowrap gap-8">

            <div className="bg-background2 p-5 rounded-lg">
              <h2 className="pb-3">Our Story</h2>
              <p className="text-sm md:text-base xl:text-lg leading-loose">
                In 2019, with the inspiration of Professor Mark Merry, a few students founded the Liberty University ACM ICPC Club. The goal was to send teams to the annual ACM International Collegiate Programming Contest. Later on, our club was renamed to the Competitive Programming Club.
              </p>
            </div>

            <div className="bg-background2 p-5 rounded-lg">
              <h2 className="pb-3">The Mission</h2>
              <p className="text-sm md:text-base xl:text-lg leading-loose">
                The Liberty University Competitive Programming Club is about developing the skills necessary to solve programming problems. We strive for every student to succeed in technical interviews and competitions. We provide a community at Liberty University for people interested in algorithms, programming, and software engineering.
              </p>
            </div>
          </div>
          <div className="px-5 py-4 bg-background2 rounded-lg">
            <h1 className="text-2xl md:text-4xl pb-3">So Far...</h1>
            <p className="text-sm md:text-base xl:text-lg leading-loose">
              Every year since the creation of the club we have consistently placed better. Our most recent success was in Febuary 2023 when one of our teams placed 10th in the ICPC South Region for Division 2. Our eyes are set on the upcoming competition in November where we hope to perform even better. 
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team_2022.jpg" alt="Our 2022-2023 ICPC teams" className="rounded-lg lg:w-[900px]"/>
            <p className="pb-2 text-lg md:text-xl italic">Club Members at the 2022-2023 ICPC</p>
          </div>
        </div>
        
      </div>
    </div> 
  );
}