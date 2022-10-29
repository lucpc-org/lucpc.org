export default function About() {
  return (
    <div className="h-full sm:px-16 flex flex-col justify-center lg:h-full w-full">
        <h1 className="lg:mt-0 text-5xl ml-8 font-serif">About LUCPC</h1>
        <div className="bg-shadow rounded-2xl p-4 m-4 lg:p-8 mt-8 mb-48 lg:mb-0 xl:text-xl whitespace-pre-wrap lg:w-3/4 mx-auto">
          <div>{"\t\tThe Liberty University Competetive Programming Club is about developing the skills necessary to solve programming problems for technical interviews and for competitions."}</div>
        </div>
        
    </div>
     
  );
}