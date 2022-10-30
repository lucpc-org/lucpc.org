
export default function Problems() {
  return (
    <div className="md:px-16 min-h-full h-fit flex flex-col justify-center lg:min-h-[600px] lg:h-full w-full">
        <h1 className="mt-48 lg:mt-0 text-5xl p-2 ml-8 font-serif">Problems</h1>
        <div className="flex flex-col w-full justify-around items-center mt-8 mb-48 lg:mb-0 lg:m-0">
          {[
            {difficulty: "easy", name: "#13 - Roman to Integer", 
              url: "https://leetcode.com/problems/roman-to-integer/"},
            {difficulty: "medium", name: "#15 - 3Sum", 
              url: "https://leetcode.com/problems/3sum/"},
            {difficulty: "hard", name: "#23 - Merge k Sorted Lists", 
              url: "https://leetcode.com/problems/merge-k-sorted-lists/"}
            ].map((item) => 
              <div className="w-full md:w-fit lg:m-0">
                <div className="flex flex-row items-center bg-shadow rounded-2xl p-4 xl:p-8 m-4 xl:mx-16 h-fit">
                    <div>
                      <div className="w-fit h-fit"><h1 className= {"bg-" + item.difficulty + " flex h-fit w-fit flex-row justify-center font-bold text-base md:text-lg xl:text-2xl rounded-lg p-2 sm:px-6 mx-auto"}>{item.difficulty}</h1></div>
                    </div>
                    <h1 className="font-bold text-sm lg:text-lg xl:text-xl mr-auto w-fit px-4 sm:px-8">{item.name}</h1>
                    <a target="_blank" rel="noreferrer" href={item.url}><div className="mx-auto bg-neutral-200 hover:bg-neutral-500 text-center text-shadow font-bold w-fit px-4 sm:px-6 py-2 rounded-lg">Go</div></a>
                </div>
              </div>
            )}
        </div>
        <div className="invisible bg-easy bg-medium bg-hard"></div>
    </div>
      
  );
}