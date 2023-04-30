export default function App() {
  const cardData = [
    {
      title: "Purpose",
      icon: "fa-heart-pulse",
      desc: "Teach students core programming concepts and prepare them to compete at the International Collegiate Programming Contest.",
    },
    {
      title: "Meetings",
      icon: "fa-handshake",
      desc: "Every Thursday from 5 - 6 PM in the School of Business Room 2830",
    },
    {
      title: "Weekly Competitions",
      icon: "fa-person-running",
      desc: "Three problems are provided each week to solve outside of the club meetings. The leaderboard ranks current completion of the problems by the members of the club.",
    },
  ];
  

  return (
    <div className="h-full lg:min-h-[600px] w-full">
      <div className="flex flex-col justify-center h-full w-full">
        <div className="flex flex-col justify-center text-center lg:mt-0 mb-0">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold italic">
            Competitive Programming Club
          </h1>
          <h2 className="text-2xl lg:text-3xl font-trajan font-semibold pt-5">
            Liberty University
          </h2>
        </div>
      </div>

      {/* This is for the cards */}
      <div className="flex lg:flex-row lg:space-x-10 lg:space-y-0 space-y-10 flex-col justify-center p-10 bg-background_lighter">
        {cardData.map((item) => (
          <div className="flex justify-center">
            <div className="bg-background_light1 rounded-lg lg:max-w-xl w-full py-5 p-8">
              <div className="flex flex-row items-center text-2xl">
                <i class={"fa-solid " + item.icon}></i>
                <h3 className="font-bold text-3xl font-sans pl-3">
                  {item.title}
                </h3>
              </div>
              <p className="text-lg pt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-10 h-full bg-background_lighter">
        <h1 className="mt-3 text-4xl font-bold">Connect with us!</h1>
      </div>
    </div>
  );
}
