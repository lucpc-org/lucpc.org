export default function About() {
  return (
    <div className="min-h-full h-fit sm:px-16 flex flex-col justify-center lg:min-h-[600px] lg:h-full w-full">
        <h1 className="mt-48 lg:mt-0 text-4xl md:text-5xl ml-8 font-serif">About LUCPC</h1>
        <div className="bg-shadow rounded-2xl p-4 m-4 lg:p-8 lg:mb-0 text-sm md:text-base xl:text-lg whitespace-pre-wrap leading-loose mt-8 lg:w-3/4 lg:mx-auto">
          {`              The Liberty University Competitive Programming Club began as the Liberty University ACM ICPC club in 2019, with the goal of sending a few teams to the annual ACM International Collegiate Programming Contest. That year three teams were sent to compete at Virginia Tech. Since then the club has grown to be more than just sending teams to the ICPC.
              
              The Liberty University Competitive Programming Club is about developing the skills necessary to solve programming problems for technical interviews and for competitions while providing a community at Liberty University for people interested in algorithms, programming, and software engineering.`}
        </div>
        
    </div>
     
  );
}