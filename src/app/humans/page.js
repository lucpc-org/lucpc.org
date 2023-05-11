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
      major: "Software Engineering",
      pic: "alexa.jpg",
      linkedin: "https://www.linkedin.com/in/alexa-wenger/",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center font-sans pb-[4rem]">
      <div className="flex flex-col w-[95%] lg:w-[85%] xl:w-[80%]">
        <div className="pb-[3rem]">
          <h1>Humans</h1>
          <p className="text-lg text-text_hover">
            These people are the heart and soul of our club
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col space-y-5 w-full">
            {humans.map((item, i) => (
              i % 2 ? (
                <div className="flex flex-row justify-end">
                  <div className="flex flex-col items-end justify-center pr-5 text-lg">
                    <div className="flex flex-col items-end pb-3">
                      <h2 className="leading-tight">{item.name}</h2>
                      <h3 className="text-yellow">{item.title}</h3>
                    </div>
                    <p className="text-text_hover">{item.major}</p>
                    <p className="text-text_hover">Class of {item.class}</p>
                    <div className="text-3xl flex flex-row space-x-4 mt-5">
                      <Link href={item.linkedin} className="transition-all ease-in duration-150 hover:text-yellow">
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                      {item.github &&
                        <Link href={item.github} className="transition-all ease-in duration-150 hover:text-yellow">
                          <i className="fa-brands fa-github"></i>
                        </Link>
                      }
                    </div>
                  </div>
                  <Image
                    className="rounded-lg"
                    alt="Close up shot of person"
                    src={`/images/${item.pic}`}
                    width="250"
                    height="250"
                  />
                </div>
              ) : (
                <div className="flex flex-row">
                  <Image
                    className="rounded-lg"
                    alt="Close up shot of person"
                    src={`/images/${item.pic}`}
                    width="250"
                    height="250"
                  />
                  <div className="flex flex-col pl-5 justify-center text-lg">
                    <div className="flex flex-col items-start pb-3">
                      <h2 className="leading-tight">{item.name}</h2>
                      <h3 className="text-green">{item.title}</h3>
                    </div>
                    <p className="text-text_hover">{item.major}</p>
                    <p className="text-text_hover">Class of {item.class}</p>
                    <div className="text-3xl flex flex-row space-x-4 mt-5">
                      <Link href={item.linkedin} className="transition-all ease-in duration-150 hover:text-yellow">
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                      {item.github &&
                        <Link href={item.github} className="transition-all ease-in duration-150 hover:text-yellow">
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
