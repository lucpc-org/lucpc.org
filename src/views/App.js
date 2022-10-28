export default function App() {
  return (
    <div className="px-16 h-auto lg:h-full w-full font-sans">
      <div className="flex flex-col justify-center lg:h-full w-full">
        <div className="h-1/4 flex flex-col justify-end mt-48 lg:mt-0 mb-0 lg:mb-8">
          <h1 className="text-5xl p-2 ml-8 font-serif">Liberty University</h1>
          <h2 className="p-2 ml-8 text-2xl font-serif">Competitive Programming Club</h2>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-around items-center mt-8 mb-48 lg:mb-0 lg:m-0 lg:items-stretch lg:h-2/5">
          {[
            {name: "Competitions", 
              desc: ""},
            {name: "Meetings", 
              desc: ""},
            {name: "Weekly Competitions", 
              desc: " A weekly leaderboard hosting the current best"}
            ].map((item) => 
              <div href={item.url} className="w-2/3 lg:w-1/4 bg-shadow rounded-2xl p-8 m-4 lg:m-0">
                <div className="">
                  <div className="mt-2">
                    <h1 className="flex flex-row justify-center font-bold text-2xl">{item.name}</h1>
                    <p className="mt-8">{item.desc}</p>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}