export default function Humans() {
  const humans = [
    {
      title: "President",
      name: "Cameron Kauffman",
      class: "2025",
      major: "Software Engineering",
      pic: "cameron.jpg",
    },
    {
      title: "Vice President",
      name: "Will Starling",
      class: "2026",
      major: "CS: SWE & Web and Mobile",
    },
    {
      title: "Secretary",
      name: "Kaelyn Haynie",
      class: "2026",
      major: "Data Science",
    },
    {
      title: "Treasurer",
      name: "Kyle Wells",
      class: "2025",
      major: "Computer Science",
    },
  ];

  return (
    <div className="p-16 flex flex-col lg:min-h-[600px] items-center justify-center w-full">
      <div className="flex flex-col w-8/12">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold italic">
          Humans
        </h1>
        <h3 className="text-2xl pt-1 font-heading">
          These people are the heart and soul of our club
        </h3>

        <div className="pt-12 flex flex-row space-x-10">
          {humans.map((item) => (
            <div className="pt-2">
              <img className="rounded-lg" alt="Close up shot of person" src="/images/cameron.jpg"></img>
              <div className="pt-5 text-center">
                <h2 className="text-2xl">{item.name}</h2>
                <h2 className="text-lg text-gray-400">{item.major}</h2>
                <h2 className="text-lg text-gray-400">Class of {item.class}</h2>
                <h2 className="text-lg text-accent">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
