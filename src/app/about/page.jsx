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
      <div className="flex flex-wrap gap-4 w-full justify-between items-center">
        <img src="https://s6.imgcdn.dev/fwOmM.jpg" alt="Club members at the 2022 regionals" className="rounded-lg w-[450px]"/>
        <img src="https://s6.imgcdn.dev/fwRal.png" alt="Club members at the 2022 regionals" className="rounded-lg w-[450px]"/>
        <img src="https://s6.imgcdn.dev/fw9cd.png" alt="Club members at the 2023 tryouts" className="rounded-lg w-[450px]"/>
      </div>
    </div> 
  );
}