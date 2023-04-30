export default function About() {
  return (
    <div className="p-16 flex flex-col lg:min-h-[600px] items-center justify-center w-full">
      <div className="flex flex-col w-8/12">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold italic">
          About
        </h1>
        <h3 className="text-2xl pt-1 mb-3 font-heading">
          Information about the history and accomplishments of our club
        </h3>

        <div className="text-sm md:text-base xl:text-lg whitespace-pre-wrap leading-loose mt-8 lg:mx-auto">
          {`              The Liberty University Competitive Programming Club began as the Liberty University ACM ICPC club in 2019, with the goal of sending a few teams to the annual ACM International Collegiate Programming Contest. That year three teams were sent to compete at Virginia Tech. Since then the club has grown to be more than just sending teams to the ICPC.
              
              The Liberty University Competitive Programming Club is about developing the skills necessary to solve programming problems for technical interviews and for competitions while providing a community at Liberty University for people interested in algorithms, programming, and software engineering.`}
        </div>
        
      </div>
    </div> 
  );
}