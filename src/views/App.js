export default function App() {
  return (
    <div className="sm:px-16 h-auto lg:h-full lg:min-h-[600px] w-full font-sans">
      <div className="flex flex-col justify-center lg:h-full w-full">
        <div className="h-1/4 flex flex-col justify-end mt-48 lg:mt-0 mb-0 lg:mb-[4vh]">
          <h1 className="text-5xl md:text-7xl p-2 ml-8 font-serif">Liberty University</h1>
          <h2 className="p-2 ml-8 text-2xl md:text-4xl font-serif">Competitive Programming Club</h2>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-around lg:justify-between xl:justify-around items-center mt-8 mb-48 lg:mb-0 lg:m-0 lg:items-stretch lg:h-fit xl:h-2/5">
          {[
            {name: "Purpose", 
              desc: "Develop the skills necessary to solve programming problems for technical interviews and competition, while also providing tools and opportunity to compete against peers."},
            {name: "Meetings", 
              desc: "5-6:00 PM\nSchool of Business\nRoom 2830"},
            {name: "Weekly Competitions", 
              desc: "Three problems are provided each week to solve outside of the club meetings. The leaderboard ranks current completion of the problems by the members of the club."}
            ].map((item) => 
              <div href={item.url} className="w-full md:w-2/3 lg:w-1/3 mx-8 lg:m-0">
                <div className="bg-shadow rounded-2xl p-4 md:p-8 lg:p-4 xl:p-6 m-4 xl:mx-10 h-full">
                    <h1 className="flex flex-row mt-2 justify-center font-bold text-xl xl:text-3xl">{item.name}</h1>
                    <p className="flex flex-column justify-center mt-8 p-2 whitespace-pre-wrap text-center leading-loose text-sm md:text-base xl:text-lg">{item.desc}</p>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}