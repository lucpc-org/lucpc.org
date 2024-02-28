export default function About() {
  return (
    <div className="flex flex-col w-full font-sans pb-12">
      <h1 className="leading-tight md:leading-none">About Us 📖</h1>
      <div className="pb-12">
        <p className="text-xl whitespace-pre-line">
          {`
            Our club was founded in 2019 by Professor Mark Merry and his students with a shared passion for competitive programming. We believe that solving challenging problems not only hones tech skills but also fosters critical thinking, collaboration, and resilience.

            Since then, we've grown into a vibrant community of students who are passionate about computer science and competitive programming. We compete in the International Collegiate Programming Competition (ICPC) every year along with hosting our own competitions. 
            
            Beyond competitons, we're more about the journey. Through weekly practice sessions and informative club meetings, we empower students of all skill levels to push their boundaries and discover the joy of creative problem-solving.

            If you're looking for a supportive environment to learn, grow, and compete alongside like-minded peers, join us!
          `}
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <div className="flex flex-col w-full items-center">
          <h1 className="mb-6">2024</h1>
          <div className="flex flex-wrap w-full justify-center items-center gap-6">
            <img src="https://s6.imgcdn.dev/tm8Eh.jpg" alt="Club members at the 2023 Mid-Atlantic Regional" className="rounded-lg w-[450px]"/>
            <img src="https://s6.imgcdn.dev/tmEOl.jpg" alt="Club members at the 2023 regionals" className="rounded-lg w-[450px]"/>
            <img src="https://s6.imgcdn.dev/tmpSK.jpg" alt="Club members at the 2023 regionals" className="rounded-lg w-[450px]"/>
            <img src="https://s6.imgcdn.dev/tmoQV.jpg" alt="Club members at the 2023 regionals" className="rounded-lg w-[450px]"/>
            <img src="https://s6.imgcdn.dev/tqjan.jpg" alt="Club members at the 2023 regionals" className="rounded-lg w-[450px]"/>
            <img src="https://s6.imgcdn.dev/tqhcO.jpg" alt="Club members at the 2023 regionals" className="rounded-lg w-[450px]"/>
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <h1 className="mb-6">2023</h1>
          <div className="flex flex-wrap w-full justify-between items-center gap-4">
            <img src="https://s6.imgcdn.dev/tqDeo.png" alt="3rd place at the 2023 tryouts" className="rounded-lg w-[450px]"/>
            <img src="https://s6.imgcdn.dev/fwRal.png" alt="Club members at the 2023 tryouts" className="rounded-lg w-[450px]"/>
            <img src="https://s6.imgcdn.dev/fw9cd.png" alt="2nd place at the 2023 regionals" className="rounded-lg w-[450px]"/>
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <h1 className="mb-6">2022</h1>
          <div className="flex flex-wrap w-full justify-center gap-4">
            <img src="https://s6.imgcdn.dev/fwOmM.jpg" alt="Club members at the 2022 tryouts" className="rounded-lg w-[450px]"/>
          </div>
        </div>
      </div>
    </div> 
  );
}