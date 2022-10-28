export default function App() {
  return (
    <div className="px-16 h-full w-full font-sans">
      <div className="flex flex-col justify-center h-full">
        <div className="h-1/4 flex flex-col justify-end mb-16">
          <h1 className="text-5xl p-2 ml-8 font-serif">Liberty University</h1>
          <h2 className="p-2 ml-8 text-2xl font-serif">Competitive Programming Club</h2>
        </div>

        <div className="flex flex-row w-full justify-around h-2/5">
          {[
            {name: "Competitions", url: "/Competitions/", 
              desc: ""},
            {name: "Meetings", url: "/About/", 
              desc: ""},
            {name: "Weekly Competitions", url: "/Comp/", 
              desc: " A weekly leaderboard hosting the current best"}
            ].map((item) => 
              <a href={item.url} className="w-1/4 bg-shadow rounded-2xl p-8 hover:bg-shadowhover">
                <div className="">
                  <div className="mt-2">
                    <h1 className="flex flex-row justify-center font-bold text-2xl">{item.name}</h1>
                    <p className="mt-8">{item.desc}</p>
                  </div>
                </div>
              </a>
            )}
        </div>
      </div>
    </div>
  );
}