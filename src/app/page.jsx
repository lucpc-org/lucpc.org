import GlowButton from "../component/GlowButton";
import RedLink from "../component/RedLink";
import Link from "next/link";
import HTMLString from 'react-html-string';

export default function App() {
  const information = [
    {
      title: "Weekly Meetings",
      desc: "Thurs 5-6 p.m. @SoBusi 2830",
    },
    {
      title: "Our Purpose",
      desc: "Teach students core programming concepts and prepare them to compete at the International Collegiate Programming Contest.",
    },
    {
      title: "Weekly Competition",
      desc: "Three problems are provided each week to solve outside of the club meetings."
    },
  ];

  const news = [
    "We now have a new president and 4 new officers! Visit <a href=/humans>Humans</a> to see club leadership",
    "Our dear president, Jake Hoffman, is graduating :(",
    "In February, one of our teams (<g>Addend</g>) placed 12th out of 119 teams for the ICPC southern conference.",
    "At the same competition we had 3 teams place 10th, 13th, and 19th out of 46 teams for the ICPC Mid-Atlantic region.",
  ]

  const components = {
    a: props => <RedLink to={props.href} label={props.children} extraStyles="inline" />,
    g: props => <p children={props.children} className="inline text-green" />
  };

  //https://discord.gg/dneShg4YYv

  return (
    <div className="flex flex-col xl:h-[calc(100%-78px)] w-full justify-center items-center font-mono">
      <div className="flex flex-col mb-10 xl:pb-5 w-[90%] pt-12 mt-0 md:mt-5">
        <div className="flex flex-col space-y-3">
          <h1 className="leading-normal md:leading-relaxed lg:leading-none text-4xl md:text-5xl">Competitive Programming <mark className="bg-text_color">Club</mark></h1>
          <div className="flex text-2xl md:text-3xl text-red">
            <Link href="https://www.liberty.edu">
              <h2 className="underline decoration-background decoration-dotted hover:decoration-red">@Liberty University</h2>
            </Link>
          </div>
        </div>

        <div className="flex flex-col h-full md:flex-row md:flex-wrap md:justify-between md:pt-8 mt-12 text-base xl:text-lg">
          <div className="flex flex-col justify-between space-y-5 mb-5 md:mb-0 lg:w-[30%] md:w-[50%]">
            {information.map((item, i) => (
              <div className={`flex py-4 border-2 ${item.inline ? `justify-between px-2 lg:px-7` : `flex-col space-y-2 px-5 lg:px-7`}`}>
                <h4 className="font-bold">
                  {item.title.split(' ').slice(0, -1)} <mark className={i % 2 ? `bg-yellow` : `text-text_color bg-green`}>{item.title.split(' ').at(-1)}</mark>
                </h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col px-5 lg:px-7 py-4 border-2 mb-5 md:mb-0 lg:w-[35%] md:w-[45%]">
            <h4 className="font-bold pb-2">Club <mark className="bg-yellow">News</mark></h4>
            <div className="flex flex-col space-y-5 lg:justify-between h-full">
              {news.map((item) => (
                <div>
                  <HTMLString html={item} components={components}/>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col px-7 py-4 border-2 md:mt-10 lg:mt-0 lg:w-[30%]">
            <h4 className="pb-5">
              <mark className="text-text_color bg-green">Connect</mark>
            </h4>

            <div className="space-y-10">
              <div className="flex flex-col">
                <div className="flex">
                  <RedLink to="https://discord.gg/dneShg4YYv" label="Join our Discord"/>
                </div>
                <p>This is where the majority of our announcements will be.</p>
              </div>

              <div className="flex flex-col">
                <strong>Email us!</strong>
                <div className="flex">
                  <RedLink to="mailto:cpc@liberty.edu" label="cpc@liberty.edu"/>
                </div>
                <p>We would love to hear from you! This is the best way for directly contacting club leadership.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
