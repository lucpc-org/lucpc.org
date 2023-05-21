import Image from "next/image";
import Link from "next/link";

export default function Humans() {
  const humans = [
    {
      title: "President",
      name: "Cameron Kauffman",
      class: "2025",
      major: "Software Engineering",
      pic: "cameron.jpg",
      linkedin: "https://www.linkedin.com/in/cameron-k-a00565257",
      github: "https://github.com/wzid",
    },
    {
      title: "Vice President",
      name: "Will Starling",
      class: "2026",
      major: "Software Engineering and Web & Mobile Programming",
      pic: "will.jpg",
      linkedin: "https://www.linkedin.com/in/willstarling/",
      github: "https://github.com/Willisaur",
    },
    {
      title: "Secretary",
      name: "Kaelyn Haynie",
      class: "2026",
      major: "Software Engineering and Data Science",
      pic: "kaelyn.jpg",
      linkedin: "https://www.linkedin.com/in/haynie-k/",
      github: "https://github.com/k-haynie",
    },
    {
      title: "Treasurer",
      name: "Kyle Wells",
      class: "2025",
      major: "Computer Science: General",
      linkedin: "https://www.linkedin.com/in/kqwq/",
      github: "https://github.com/kqwq",
      pic: "none.jpg"
    },
    {
      title: "Outreach",
      name: "Alexa Wenger",
      class: "2026",
      major: "Software Engineering and Data Science",
      pic: "alexa.jpg",
      linkedin: "https://www.linkedin.com/in/alexa-wenger/",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center font-sans pb-[4rem] bg-background">
      <div className="flex flex-col w-[95%] lg:w-[85%] xl:w-[80%]">
        <div className="pb-[3rem]">
          <h1>Humans</h1>
          <p className="md:text-lg text-text_hover2">
            These people are the heart and soul of our club
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col space-y-9 md:space-y-5 w-[95%]">
            {humans.map((item, i) => (
              i % 2 ? (
                <div key={i} className="flex flex-col md:flex-row items-center text-center md:text-end md:justify-end">
                  <img src={`/images/${item.pic}`} alt={item.title} className="md:hidden rounded-xl w-[250px] h-[250px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"/>
                  <div className="flex flex-col pt-4 md:pt-0 items-center md:items-end md:pr-5 text-sm md:text-base lg:text-lg">
                    <div className="flex flex-col md:items-end pb-3">
                      <h2 className="leading-tight">{item.name}</h2>
                      <h3 className="text-blue font-semibold">{item.title}</h3>
                    </div>
                    <div className="space-y-1 md:space-y-0">
                      <p className="text-text_hover">{item.major}</p>
                      <p className="text-text_hover">Class of {item.class}</p>
                    </div>
                    <div className="text-2xl lg:text-3xl flex flex-row space-x-4 mt-3 md:mt-5">
                      <Link href={item.linkedin} className="transition-all ease-in duration-150 hover:text-blue">
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                      {item.github &&
                        <Link href={item.github} className="transition-all ease-in duration-150 hover:text-blue">
                          <i className="fa-brands fa-github"></i>
                        </Link>
                      }
                    </div>
                  </div>
                  <img src={`/images/${item.pic}`} alt={item.title} className="hidden md:inline rounded-xl w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"/>
                </div>
              ) : (
                <div key={i} className="flex flex-col md:flex-row items-center text-center md:text-start">
                  <img src={`/images/${item.pic}`} alt={item.title} className="rounded-xl w-[250px] h-[250px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"/>
                  <div className="flex flex-col pt-4 md:pt-0 md:pl-5 items-center md:items-start text-sm md:text-base lg:text-lg">
                    <div className="pb-3">
                      <h2 className="leading-tight">{item.name}</h2>
                      <h3 className="text-green font-semibold">{item.title}</h3>
                    </div>
                    <div className="space-y-1 md:space-y-0">
                      <p className="text-text_hover">{item.major}</p>
                      <p className="text-text_hover">Class of {item.class}</p>
                    </div>
                    <div className="text-2xl lg:text-3xl flex flex-row space-x-4 mt-3 md:mt-5">
                      <Link href={item.linkedin} className="transition-all ease-in duration-150 hover:text-blue">
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                      {item.github &&
                        <Link href={item.github} className="transition-all ease-in duration-150 hover:text-blue">
                          <i className="fa-brands fa-github"></i>
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
    </div>
  );
}
