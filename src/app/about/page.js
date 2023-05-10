import RedLink from "../../component/RedLink";

export default function About() {
  return (
    <div className="flex flex-col lg:min-h-[600px] items-center">
      <div className="flex flex-col w-[90%] font-mono pt-12 mt-10">
        <h1 className="text-4xl md:text-4xl">
          Our <mark className="bg-green text-text_color">Story</mark>
        </h1>

        <div className="mt-3 py-5 text-sm md:text-base xl:text-lg whitespace-pre-wrap leading-loose">
          In 2019, with the inspiration of Professor <RedLink to="/humans" label="Mark Merry" extraStyles="inline">Mark Merry</RedLink> and a few students, the Liberty University ACM ICPC Club was founded. The goal was to send teams to the annual ACM International Collegiate Programming Contest. Later on, our club was renamed to the Competitive Programming Club.
        </div>

        <h1 className="mt-12 pt-5 text-4xl md:text-4xl">
          The <mark>Mission</mark>
        </h1>
        <div className="mt-3 py-5 text-sm md:text-base xl:text-lg whitespace-pre-wrap leading-loose">
          The Liberty University Competitive Programming Club is about developing the skills necessary to solve programming problems for technical interviews and for competitions while providing a community at Liberty University for people interested in algorithms, programming, and software engineering.
        </div>
      </div>
    </div> 
  );
}