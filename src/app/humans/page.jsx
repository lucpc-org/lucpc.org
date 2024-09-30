"use client";

import Link from "next/link";
import clsx from 'clsx';
import { Icon } from "@iconify/react";


export default function Humans() {
  const humans = [
    {
      title: "President",
      name: "Sam McDowell",
      class: "2026",
      major: "Software Engineering, Data Science, and Web & Mobile Programming",
      pic: "https://s6.imgcdn.dev/VXqkB.jpg",
      linkedin: "https://www.linkedin.com/in/samuelmcdowell64",
      github: "https://github.com/sammcdo",
      color: 'text-green-300'
    },
    {
      title: "Vice President",
      name: "Micah Nava",
      class: "2025",
      major: "Cyber Security",
      pic: "https://s6.imgcdn.dev/WqaBK.jpg",
      linkedin: "https://www.linkedin.com/in/micah-nava-91746a292/",
      github: "https://github.com/M1C4H27",
      color: 'text-green-800'
      
    },
    {
      title: "Competition Coordinator",
      name: "Cameron Kauffman",
      class: "2026",
      major: "Software Engineering with a Minor in Mathematics",
      pic: "https://s6.imgcdn.dev/VXFvu.png",
      linkedin: "https://www.linkedin.com/in/cameronkffn/",
      github: "https://github.com/wzid",
      color: "text-[#134F47]"
    },
    {
      title: "Outreach",
      name: "Alexa Wenger",
      class: "2026",
      major: "Software Engineering and Data Science with a Minor in Mathematics",
      pic: "https://s6.imgcdn.dev/fwAS0.jpg",
      linkedin: "https://www.linkedin.com/in/alexa-wenger/",
      color: 'text-[#b5c997]',
      github: 'https://github.com/alexawenger'
    },
    {
      title: "Secretary",
      name: "Joel Boeve",
      class: "2026",
      major: "Software Engineering",
      pic: "https://s6.imgcdn.dev/WqUXh.jpg",
      linkedin: "https://www.linkedin.com/in/joel-boeve-264658232/",
      github: "https://github.com/jboeve",
      color: 'text-blue-200'
      
    },
    {
      title: "Treasurer",
      name: "Colter Radke",
      class: "2027",
      major: "Data Science with a Minor in Biblical Languages",
      pic: "https://s6.imgcdn.dev/Wq1Lo.png",
      linkedin: "https://www.linkedin.com/in/colter-radke/",
      github: "https://github.com/Colter13",
      color: 'text-blue-200'
    },
  ];
    
    return (
    <div className="flex flex-col w-full font-sans pb-12 bg-background">
      <div className="pb-[3rem]">
        <h1>Humans 🧍</h1>
        <p className="md:text-lg text-foreground/80">
          These people are the heart and soul of our club
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col space-y-9 md:space-y-5 w-full">
          {humans.map((item, i) => (
            i % 2 ? (
              <div key={i} className="flex flex-col md:flex-row items-center text-center md:text-end md:justify-end">
                <img src={item.pic} alt={item.title} className="md:hidden rounded-xl w-[250px] h-[250px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"/>
                <div className="flex flex-col pt-4 md:pt-0 items-center md:items-end md:pr-5 text-sm md:text-base lg:text-lg">
                  <div className="flex flex-col md:items-end pb-3">
                    <h2 className="leading-tight">{item.name}</h2>
                    <h3 className={clsx('font-semibold', item.color)}>{item.title}</h3>
                  </div>
                  <div className="space-y-1 md:space-y-0">
                    <p className="text-foreground/80">{item.major}</p>
                    <p className="text-foreground/80">Class of {item.class}</p>
                  </div>
                  <div className="text-2xl lg:text-3xl flex flex-row space-x-4 mt-3 md:mt-5">
                    <Link href={item.linkedin} className="transition-all hover:opacity-70">
                      <Icon icon="devicon:linkedin" />
                    </Link>
                    {item.github &&
                      <Link href={item.github} className="transition-all hover:opacity-70">
                        <Icon icon="mdi:github" />
                      </Link>
                    }
                  </div>
                </div>
                <img src={item.pic} alt={item.title} className="hidden md:inline rounded-xl w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"/>
              </div>
            ) : (
              <div key={i} className="flex flex-col md:flex-row items-center text-center md:text-start">
                <img src={item.pic} alt={item.title} className="rounded-xl w-[250px] h-[250px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"/>
                <div className="flex flex-col pt-4 md:pt-0 md:pl-5 items-center md:items-start text-sm md:text-base lg:text-lg">
                  <div className="pb-3">
                    <h2 className="leading-tight">{item.name}</h2>
                    <h3 className={clsx('font-semibold', item.color)}>{item.title}</h3>
                  </div>
                  <div className="space-y-1 md:space-y-0">
                    <p className="text-foreground/80">{item.major}</p>
                    <p className="text-foreground/80">Class of {item.class}</p>
                  </div>
                  <div className="text-2xl lg:text-3xl flex flex-row space-x-4 mt-3 md:mt-5">
                    <Link href={item.linkedin} className="transition-all hover:opacity-70">
                      <Icon icon="devicon:linkedin" />
                    </Link>
                    {item.github &&
                      <Link href={item.github} className="transition-all hover:opacity-70">
                        <Icon icon="mdi:github" />
                      </Link>
                    }
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
