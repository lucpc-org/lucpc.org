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
          <p className="text-lg text-text_hover2">
            These people are the heart and soul of our club
          </p>
        </div>

        <div className="flex gap-8 justify-between flex-wrap">
          {humans.map((item, i) => (
            <div className="card bg-background2 shadow-xl w-[150px] md:w-[200px] lg:w-[300px]">
              <figure>
                <img src={`images/${item.pic}`} alt={item.name} className=""/>
              </figure>
              <div className="card-body pb-5">
                <p className="font-bold text-2xl grow-0">{item.name}</p>
                <p className={`text-xl leading-none ${i %2 ? `text-blue` : `text-green`}`}>{item.title}</p>
                
                <p className="text-lg text-text_hover grow-0">{item.major}</p>
                <p className="leading-none text-lg text-text_hover">Class of {item.class}</p>
                  
                  <div className="flex flex-row justify-center gap-3 pt-4">
                    <Link href={item.linkedin} className="btn btn-accent gap-2">
                      Linkedin
                      <i class="fa-lg fa-brands fa-linkedin"></i>
                    </Link>
                    {item.github && 
                      <Link href={item.github} className="btn btn-accent gap-2">
                        Github
                        <i className="fa-lg fa-brands fa-github" />
                      </Link>
                    }
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
