"use client";

import RedLink from "../component/RedLink";
import Link from "next/link";
import HTMLString from 'react-html-string';
import TypeIt from "typeit-react";


export default function App() {

  const card = [
    {
      title: "For Everyone",
      icon: "fa-solid fa-users",
      content: "Students of all skill levels are welcome. Our meetings are designed to prepare members to succeed at the annual ICPC competition even with no experience.",
      linkLabel: "View Beginner Guide",
      link: "https://guide.lucpc.org"
    },
    {
      title: "Weekly Competition",
      icon: "fa-solid fa-person-running",
      content: "Programming problems are posted each week for students to solve outside of club meetings.",
      linkLabel: "Learn more",
      link: "/competition",
    },
    {
      title: "Our Purpose",
      icon: "fa-solid fa-heart-pulse",
      content: "Teach students core programming concepts, prepare them to compete at the ICPC, and prepare them for Software Engineering interviews.",
      linkLabel: "More about us",
      link: "/about"
    },
  ];

  const news = [
    {
      content: "We are hosting a programming competition on December 2nd. Check it out <a href=/programming-competition>here</a>!",
      time: "November 10th 2023",
    },
    {
      content: "We would like to welcome our newest CPT members: DROP TABLE Team;, We Need Arrays, Binary Tree Huggers, Debug Thugs, and brogrammers! ",
      time: "October 30th 2023",
    },
    {
      content: "5 teams have qualified through our tryouts to advance to the ICPC Mid-Atlantic Regional Competition!",
      time: "October 28th 2023",
    },
    {
      content: "Our first meeting will be on August 31st!",
      time: "August 20th 2023",
    },
    {
      content: "We now have a new president and 4 new officers! Visit <a href=/humans>Humans</a> to see club leadership.",
      time: "May 10th 2023",
    },
  ];

  const connections = [
    {
      title: "Discord",
      link: "https://discord.gg/dneShg4YYv",
      icon: "fa-brands fa-discord",
      accent: "text-[#5865F2]",
      desc: "Join our Discord server to communicate with other club members and get annoucements about upcoming events.",
    },
    {
      title: "Github",
      link: "https://github.com/lucpc-org",
      icon: "fa-brands fa-github",
      accent: "text-white",
      desc: "You can view our open source tools and soon, a repository with problem solutions from club members.",
    },
    {
      title: "Email",
      link: "mailto:cpc@liberty.edu",
      icon: "fa-solid fa-envelope",
      accent: "text-blue",
      desc: "We would love to hear from you! This is the best way to directly contact club leadership.",
    },
  ];

  const components = {
    a: props => <RedLink to={props.href} label={props.children} extraStyles="inline text-blue" />,
    g: props => <p children={props.children} className="inline text-blue" />
  };

  
  //https://discord.gg/dneShg4YYv
  return (
    <div className="flex flex-col w-full items-center font-sans pb-[4rem] bg-background">
      <div className="flex flex-col w-[95%] lg:w-[85%] xl:w-[80%]">
        <div className="flex flex-col space-y-2 pb-[2rem]">
          <h1 className="leading-tight md:leading-none text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-green from-20% to-blue">Competitive Programming Club</span>
          </h1>
          <div className="leading-relaxed text-2xl">

            @<Link href="https://www.liberty.edu" className="inline underline decoration-dotted transition-all ease-in duration-150 hover:decoration-solid">
              Liberty University
            </Link>
            
            <p className="md:inline text-text_hover" id="affirmations">
              <span className="hidden md:inline px-2">-</span>We are 
              <TypeIt options={{loop: true, cursorChar: '&#9616'}} getBeforeInit={(instance) => {
                instance
                  .type(" problem solvers").pause(2000).delete().pause(700)
                  .type(" developers").pause(2000).delete().pause(700)
                  .type(" Champions for Christ").pause(2000).delete().pause(700)
                  .type(" hard workers").pause(2000).delete().pause(700);
                  return instance;
              }}/>
            </p>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-normal flex-row mb-[4rem] md:mb-[6rem]">
          <Link href="https://discord.gg/dneShg4YYv" className="flex items-center text-base px-5 py-2 rounded-3xl bg-[#5865F2] border-[1px] border-[#8289FF] transition-all ease-in duration-150 hover:bg-[#717CF4] hover:border-[#8699DF]">
            <i className="mb-[.15rem] fa-brands fa-discord"></i>
            <p className="inline pl-3 font-semibold">Join our Discord</p>
          </Link>
        </div>

        <div className="grid grid-flow-row lg:grid-flow-col gap-4 mb-[4rem]">
          {card.map((item, i) => (
            item.link ? (
              <Link href={item.link} key={i} className={`flex flex-col group p-5 bg-background2 hover:bg-background3 rounded-lg transition-all ease-in duration-150 [&>*]:transition-all [&>*]:ease-in [&>*]:duration-150 hover:ring-1 ring-inset ${i % 2 ? `hover:ring-blue/80` : `hover:ring-green/80`}`}>
                <h3 className={`pb-2 ${i%2 ? `group-hover:text-blue_white` : `group-hover:text-green_white`}`}>
                  <span className="pr-3 lg:pr-5">{item.title}</span>
                  <i className={item.icon}></i>
                </h3>
                <p className="leading-relaxed text-text_hover">{item.content}</p>

                <div className={`flex flex-row subpixel-antialiased items-center mt-auto pt-5 ${i % 2 ? `text-blue/80` : `text-green/80`}`}>
                  <p>{item.linkLabel}</p>
                  <i className="fa-xs pl-2 transition-all ease-in duration-150 group-hover:pl-4 fa-solid fa-arrow-right"></i>
                </div>
              </Link>
            ) : (
              <div className="p-5 bg-background2 rounded-lg" key={i}>
                <h3 className="pb-2">
                  <span className="pr-3 lg:pr-5">{item.title}</span>
                  <i className={item.icon}></i>
                </h3>
                <p className="leading-relaxed text-text_hover">{item.content}</p>
              </div>
            )
          ))}
        </div>

        <div className="flex flex-col space-y-10 mb-[4rem] ">
          <div>
            <div className="pb-3">
              <h2 className="leading-tight">Meetings</h2>
              <p className="text-base text-text_hover md:text-text_color md:text-xl">
                School of Business 2830 
                <span className="invisible md:visible inline px-1">-</span> 
                <span className="flex md:inline">Thurs. 5 - 6 p.m.</span>
              </p>
            </div>
            <p className=" md:text-text_hover whitespace-pre-line">
              {`Our meetings will typically cover anything from data structures, algorithms, and general software engineering tools. Each week leading up to the annual International Collegiate Programming Competition we will cover critical concepts to give students a competitive edge.
                
                We will host scrimmages before the ICPC so that students understand what they will face during a competition.
              `}
            </p>
          </div>

          <div>
            <h2 className="pb-3">News</h2>
            <div className="flex flex-row flex-wrap gap-5">
              {news.map((item, i) => (
                <div className="flex" key={i}>
                  <div className="p-5 md:text-lg bg-background2 rounded-lg">
                    <HTMLString html={item.content} components={components}/>
                    <p className="text-base pt-1 text-text_hover2">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="flex justify-center pb-10">Connect</h1>
          <div className="flex flex-col items-start justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            {connections.map((item, i) => (
              <Link href={item.link} key={i} className="w-full h-64 cursor-pointer rounded-lg border border-background3 bg-background2 transition-all ease-in duration-150 hover:border-background4 hover:bg-background3">
                <div className="flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4">
                  <i className={`text-5xl ${item.icon} ${item.accent}`}></i>
                  <h3>{item.title}</h3>
                  <p className="text-center text-text_hover">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
