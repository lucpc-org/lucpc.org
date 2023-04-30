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

  const contactData = [
    {
      title: "Join our Discord",
      desc: "This is the main way to reach out our community. We announce in the discord when we are having meetings and general announcements",
      name: "Discord",
      accent: "#4D6AC0",
      link: "https://discord.gg/dneShg4YYv",
      icon: "fa-brands fa-discord",
    },
    {
      title: "Email us",
      desc: "If you want to get in direct contact with club leadership then send us an email",
      name: "Email",
      accent: "#FF7C7E",
      link: "mailto:cpc@liberty.edu",
      icon: "fa-solid fa-envelope",
    },
  ];

  return (
    <div className="h-full lg:min-h-[600px] w-full">
      <div className="h-[calc(100%-70px-4rem)] mb-[4rem] flex flex-col justify-center h-full w-full">
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
      <div className="flex flex-col justify-center p-10 bg-background_lighter">
        <h1 className="font-bold text-5xl text-center pb-10">Who we are</h1>
        <div className="flex lg:flex-row lg:space-x-10 lg:space-y-0 space-y-10 flex-col">
          {cardData.map((item) => (
            <div className="flex justify-center">
              <div className="bg-background_light1 rounded-lg lg:max-w-xl w-full py-5 p-8">
                <div className="flex flex-row items-center text-2xl">
                  <i class={"fa-solid " + item.icon}></i>
                  <h3 className="font-bold text-3xl font-sans pl-3 mt-[.2rem]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-lg pt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col p-10 w-full bg-background_lighter">
        <h1 className="w-full pb-10 text-center text-5xl font-bold">
          Connect with us!
        </h1>

        <div className="flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 space-y-10 w-full justify-center bg-background_lighter">
          {contactData.map((item) => (
            <div className="flex justify-center">
              <div className="bg-background_light1 rounded-lg lg:max-w-xl py-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-row items-center text-2xl">
                    <h2 className="font-bold text-4xl font-sans">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-lg pt-2">{item.desc}</p>
                </div>

                <div className="flex justify-center mt-3 text-2xl">
                  <a className={"bg-[" + item.accent + "] flex flex-row space-x-3 items-center px-8 p-2 rounded-md"} href={item.link}>
                    <i class={item.icon}></i>
                    <p className="text-xl mt-[.2rem]">
                      {item.name}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
