import RedLink from "../../component/RedLink";
import Link from "next/link";


export default function ProgrammingCompetition() {
  return (
    <div className="flex flex-col w-full items-center font-sans pb-[4rem] bg-background">
      <div className="flex flex-col w-[95%] lg:w-[85%] xl:w-[80%]">
        <div className="pb-10">
          <h1>Competitive Programming Competition</h1>
          <p className="pt-2 md:text-xl text-text_hover2">To be held on December 2nd, 2023</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-[4rem]">
            <img src="/images/contest.png" alt="Teams competiting at our practice round for tryouts" className="rounded-lg self-center w-[600px] xl:h-full"/>
            <div className="flex flex-col gap-10 justify-center">
              <div>
                <h2 className="pb-3">What is a Programming Competition?</h2>
                <p className="inline">
                  In a programming competition, you are given 6-12 problems which you have to solve in a certain amount of time. 
                  To solve a problem you must pass all the testcases given for that problem to make sure that you have a valid solution.
                  An example problem would be the &nbsp;
                </p>
                <RedLink to="https://open.kattis.com/problems/hello" label="Hello World Problem" extraStyles="inline text-blue" />
                <p className="inline">
                  &nbsp;, where the only thing you must do is print out "Hello World!".
                </p>
              </div>
              <div>
                <h2 className="pb-2">But what if I'm not good at coding?</h2>
                <p>Great! You don't have to be good at programming to compete and have fun. The competition will be catered towards students in <b>CSCN 111</b> and <b>CSCN 112</b> so you should not be confused.</p>
              </div>
              <div>
                <h2 className="pb-2">Will there be food and prizes?</h2>
                <p>Great question! <b>Yes!</b> We will be ordering pizza for everyone and catering to those with food allergies. There will be prizes for those that place well along with participation awards.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-3">
            <h1 className="pb-6">Sign up below!</h1>
            <iframe width="75%" height="500px" src="https://forms.office.com/r/hiQjh8Zasp?embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth:"100%", maxHeight:"100vh", borderRadius: "1rem"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
            <div className="pt-4">
              <a href="https://forms.office.com/r/hiQjh8Zasp" className="italic underline decoration-dotted" target="_blank" rel="noreferrer">Click to open form in new tab</a>
              <i className="pl-2 fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row-reverse pt-12 pb-9 gap-5">
            <img src="/images/binarytreehuggers.png" alt="A programming team holding up their certificate" className="rounded-lg self-center w-[600px] xl:h-full"/>
            <div>
              <h1 className="pb-4">How do I prepare?</h1>
              <h2 className="py-3">&#x2022; Beginner's Guide</h2>
              <div className="pl-5">
                <p className="inline">One of our best resources is our </p> <RedLink to="https://guide.lucpc.org/posts/beginner-guide/" label="Beginner's Guide" extraStyles="inline text-blue"/>
                <p className="inline">. This guide will walk you through some basic problems to solve so that you are prepared for the problems you will experience at the competition.</p>
              </div>
              <h2 className="py-4">&#x2022; Practice Kattis Problems</h2>
              <div className="pl-5">
                <p>
                  In our competition we will be using the Kattis platform, <a className="italic underline decoration-dotted" href="https://open.kattis.com">open.kattis.com</a>. 
                  You should familiarize yourself with this platform and try to solve some of the problems on there. Kattis also allows you to sort the problems by difficulty so you can find problems that are at your level.
                </p>
              </div>
              <h2 className="py-4">&#x2022; Bring Printed Material</h2>
              <div className="pl-5">
                <p>
                  We are allowing the access of any printed materials. If you have programming books or want to bring a C++ cheatsheet then you are allowed to do so.
                  Because you will not be allowed to access Google, it is <b>extremely recommended</b> that you print out any documentation that you think you will need.
                 </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 md:items-start md:flex-row">
            <div className="md:w-7/12">
              <h2 className="pb-2">Are there any rules?</h2>
              <span className="text-xl font-bold pb-4">Yes,</span>

              <ol type="1" className="pl-5">
                <li>You will only have access to 4 websites</li>
                <ul className="pl-5">
                  <li>Kattis</li>
                  <li>Python Documentation</li>
                  <li>C++ Documentation</li>
                  <li>Java Documentation</li>
                </ul>
                <li>You may bring as much printed material as you want</li>
                <li>The use of Github Copilot or any other generative AI tool is strictly prohibited</li>
                <li>This is a <b>"Bring your own device"</b> event, you <b>must</b> show up with your own laptop to participate</li>
                <li>You will be ranked on how many problems you solve and ties will be broken by how long it took to solve the problem</li>
              </ol>
            </div>
            <div className="pt-6 md:pt-0">
              <h2>What is the schedule?</h2>
              <p className="text-text_hover">December 2nd, 2023</p>
              <div className="flex flex-col gap-2 pt-8 pl-3">
                <span className="inline">
                  <p><span className="text-text_hover2">9:15</span>&nbsp;&nbsp; - Doors <span className="text-easy">open</span> to the School of Business.</p>
                  <p className="pl-9 italic text-text_hover2">&nbsp;&nbsp;&nbsp;&nbsp;Donuts will be served</p>
                </span>
                <span className="inline">
                  <p><span className="text-text_hover2 pr-2">9:50</span> - Contestants enter the competition area</p>
                </span>
                <span className="inline">
                  <p><span className="text-text_hover2 pr-2">9:55</span> - Doors <span className="text-hard">close</span> to the School of Business</p>
                </span>
                <span className="inline">
                  <p><span className="text-text_hover2">10:00</span> - Competition will start</p>
                </span>
                <span className="inline">
                  <p><span className="text-text_hover2">12:00</span> - Pizza will arrive</p>
                </span>
                <span className="inline">
                  <p><span className="text-text_hover2">1:00</span>&nbsp;&nbsp; - Competition will end</p>
                </span>
                <span className="inline">
                  <p><span className="text-text_hover2 pr-3">1:10 </span>- Prizes will be handed out</p>
                </span>
              </div>
            </div>

          </div>
          <div className="flex flex-col items-center py-4">
            <h2>Have any more questions?</h2>
            <i className="pb-8 pt-1">Join our Discord server</i>
            <Link href="https://discord.gg/dneShg4YYv" className="w-full lg:w-2/5 h-64 cursor-pointer rounded-lg border border-background3 bg-background2 transition-all ease-in duration-150 hover:border-background4 hover:bg-background3">
              <div className="flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4">
                <i className="text-5xl fa-brands fa-discord text-[#5865F2]"></i>
                <h3>Discord</h3>
                <p className="text-center text-text_hover">Join our Discord server to communicate with other club members and get annoucements about upcoming events.</p>
              </div>
            </Link>

          </div>

        </div>
        
      </div>
    </div> 
  );
}