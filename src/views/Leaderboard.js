export default function Leaderboard() {
  return (
    <div className="sm:px-16 py-32 min-h-full h-fit w-full flex flex-col items-center text-xs md:text-sm lg:text-base">
        <div className="px-4 md:px-8 py-2 flex flex-row justify-between content-center font-bold text-neutral-500 w-full lg:w-3/4 xl:w-1/2">
          <h1>#</h1>
          <h1 className="px-4 w-1/2 lg:w-2/3">Name</h1>
          <h1 className="shrink flex-grow ">Username</h1>
          <h1>Points</h1>
        </div>
        {[
            {name: "Jake Hoffman", username: "jakehffn", points: 10},
            {name: "Zoe Mixon", username: "Halbee", points: 18},
            {name: "Jake Hoffman", username: "jakehffn", points: 10},
            {name: "Jake Hoffman", username: "jakehffn", points: 10},
            {name: "Jake Hoffman", username: "jakehffn", points: 10},
            {name: "Jake Hoffman", username: "jakehffn", points: 10},
            {name: "Jake Hoffman", username: "jakehffn", points: 10},
            {name: "Jake Hoffman", username: "jakehffn", points: 10}
            ].sort((item1, item2) => {return item2.points - item1.points}).map((item, i) => 
              <div className="w-full lg:w-3/4 xl:w-1/2">
                <div className={((i % 2 === 0) ? "bg-shadow" : "") + " rounded-2xl py-4 px-4 md:px-8  h-full"}>
                  <div className="flex flex-row justify-between content-center font-bold w-full">
                    <h1>{i + 1}</h1>
                    <h1 className="px-4 w-1/2 lg:w-2/3">{item.name}</h1>
                    <h1 className="shrink flex-grow">{item.username}</h1>
                    <h1>{item.points}</h1>
                  </div>
                </div>
              </div> 
            )}
    </div>
  );
}