"use client";

import RedLink from "../component/RedLink";
import Link from "next/link";
import HTMLString from 'react-html-string';
import TypeIt from "typeit-react";
import { Icon } from "@iconify/react";
import clsx from 'clsx';



export default function App() {

  const card = [
    {
      title: "For Everyone",
      icon: "fluent:people-community-28-filled",
      content: "Students of all skill levels are welcome. Our meetings are designed to prepare members to succeed at the annual ICPC competition even with no experience.",
      linkLabel: "Contact us",
      link: "mailto:cpc@liberty.edu",
    },
    {
      title: "Weekly Competition",
      icon: "maki:racetrack-cycling",
      content: "Programming problems are posted each week for students to solve outside of club meetings.",
      linkLabel: "Learn more",
      link: "/competition",
    },
    {
      title: "Our Purpose",
      icon: "fa6-solid:heart-pulse",
      content: "Teach students core programming concepts, prepare them to compete at the ICPC, and prepare them for Software Engineering interviews.",
      linkLabel: "More about us",
      link: "/about"
    },
  ];

  // Only do 3 news items
  const news = [
    {
      content: "We hope you have a great Winter break. Keep on programming!",
      time: "December 15th - 2023",
    },
    {
      content: "We are hosting a programming competition on December 2nd. Check it out <a href=/programming-competition>here</a>!",
      time: "November 10th - 2023",
    },
    {
      content: "We would like to welcome our newest CPT members: DROP TABLE Team;, We Need Arrays, Binary Tree Huggers, Debug Thugs, and brogrammers! ",
      time: "October 30th - 2023",
    },
  ];

  const connections = [
    {
      title: "Discord",
      link: "https://discord.gg/dneShg4YYv",
      icon: "ic:baseline-discord",
      accent: "text-[#5865F2]",
      desc: "Join our Discord server to communicate with other club members and get annoucements about upcoming events.",
    },
    {
      title: "Github",
      link: "https://github.com/lucpc-org",
      icon: "mdi:github",
      accent: "text-white",
      desc: "You can view our open source tools and soon, a repository with problem solutions from club members.",
    },
    {
      title: "Email",
      link: "mailto:cpc@liberty.edu",
      icon: "mdi:email",
      accent: "text-blue-600",
      desc: "We would love to hear from you! This is the best way to directly contact club leadership.",
    },
  ];

  const components = {
    a: props => <RedLink to={props.href} label={props.children} extraStyles="inline text-blue" />,
    g: props => <p children={props.children} className="inline text-blue" />
  };

  
  //https://discord.gg/dneShg4YYv
  return (
    <div className="flex flex-col w-full font-sans pb-12 bg-background">
      <div className="flex flex-col space-y-2 mb-[4rem] md:mb-[6rem]">
        <h1 className="leading-tight md:leading-none">
          Competitive Programming Club
        </h1>
        <div className="leading-snug text-xl sm:text-2xl">
          <Link href="https://www.liberty.edu" className="font-sans inline text-green-400 hover:underline transition-colors">
            @Liberty University
          </Link>
          
          <p className="md:inline text-foreground/80" id="affirmations">
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
        
        <div className="self-start flex flex-col sm:flex-row !mt-4 gap-2">
          <div className="flex md:justify-normal flex-row">
            <Link href="https://discord.gg/dneShg4YYv" className="flex items-center text-white text-base px-4 py-1 rounded-3xl bg-dark-blue-500 border border-dark-blue-400 hover:bg-dark-blue-500 transition-colors">
              <Icon icon="ic:baseline-discord" width="20" height="20" />
              <p className="inline pl-2 font-semibold">Join our Discord</p>
            </Link>
          </div>
          <div className="flex justify-center md:justify-normal flex-row">
            <Link href="https://guide.lucpc.org" className="flex items-center justify-between text-white text-base pl-4 pr-3 py-1 rounded-3xl bg-blue-600 border border-blue-500 hover:bg-blue-500 transition-colors">
              <p className="inline font-semibold pr-1">Check out our guide</p>
              <Icon icon="prime:arrow-up-right" width="20" height="20" />
            </Link>
          </div>
        </div>
      </div>
      

      <div className="grid grid-flow-row lg:grid-flow-col gap-2 mb-[4rem]">
        {card.map((item, i) => (
          
          <Link href={item.link} key={i} 
            className={`flex flex-col group p-5 bg-background-800 hover:bg-background-700 border border-background-600 rounded-lg 
            transition-all ease-in duration-150 [&>*]:transition-all [&>*]:ease-in [&>*]:duration-150 
            ${i===0 ? 'hover:border-green-700' : (i===1 ? 'hover:border-dark-blue-600' : 'hover:border-blue-700')}`}>
            <h3 className={`flex pb-2 ${i===0 ? `group-hover:text-green-200` : (i ===1 ? 'group-hover:text-dark-blue-300' : 'group-hover:text-blue-200')}`}>
              <span className="pr-3 ">{item.title}</span>
              <Icon icon={item.icon} className="inline self-center"/>
            </h3>
            <p className="leading-relaxed text-text_hover">{item.content}</p>

            <div className={`flex flex-row subpixel-antialiased items-center mt-auto pt-5 ${i===0 ? 'text-green-500' : (i===1 ? 'text-dark-blue-400' : 'text-blue-600') }`}>
              <p>{item.linkLabel}</p>
              <Icon icon="prime:arrow-right" className="ml-1 transition-all ease-in duration-150 group-hover:ml-4 mt-[.15rem]" />
            </div>
          </Link>
          
        ))}
      </div>

      <div className="flex flex-col space-y-10 mb-[4rem] ">
        <div>
          <div className="pb-3">
            <h2 className="leading-tight">Meetings</h2>
            <p className="font-normal text-white text-base md:text-xl">
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
          <div className="flex flex-col gap-4">
            {news.map((item, i) => (
              <div className="flex" key={i}>
                <div className="p-4 md:text-base bg-background-800 rounded-r-lg border-background-600 border-l-2">
                  <HTMLString html={item.content} components={components}/>
                  <p className="text-sm pt-1 text-text_hover2">{item.time}</p>
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
            <Link href={item.link} key={i} className="w-full h-64 cursor-pointer rounded-lg border border-background-600 bg-background-800 transition-all ease-in duration-150 hover:border-background-500 hover:bg-background-700">
              <div className="flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4">
                <Icon icon={item.icon} className={clsx(item.accent)} width="42" height="42" />
                <h3>{item.title}</h3>
                <p className="text-center">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
