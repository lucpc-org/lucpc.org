export default function App() {
  return (
    <div className="h-full w-full font-serif">
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-5xl p-2 ml-8">Welcome</h1>
        <h2 className="p-2 ml-8 text-2xl">This is my project hosting site.</h2>

        <div>
          {[
            {name: "Chess Coordinate Trainer", url: "/ChessCoordTrainer/", 
              desc: " - Tool to help memorize the squares on a chess board."},
            {name: "SnakeGameJS", url: "/SnakeGameJs/", 
              desc: " - The classNameic snake game written in javascript. Honestly, not the best version of this game."},
            {name: "Old jakethoffman.com", url: "/ArchivedWebpages/OldJakethoffman/public/", 
              desc: " - A previous version of my personal website. Currently a little broken since I've converted to React."},
            {name: "Web Concepts", url: "/WebConcepts/", 
              desc: " - Stuff I think looks cool."},
            ].map((item) => 
              <div>
                <div className="ml-8 mt-2">
                  <a href={item.url} className="font-bold hover:text-neutral-300">{item.name}</a>
                  <p className="ml-4">{item.desc}</p>
                </div>
              </div>
            )}
        </div>
        <div className="m-8">
            {[
              {url: "https://github.com/jakehffn", title: "@GitHub"},
              {url: "https://www.linkedin.com/in/jacob-t-hoffman/", title: "@LinkedIn"},
              {url: "https://twitter.com/jakehffn", title: "@Twitter"}
            ].map((link) => {return <a href={link.url} className="p-2 text-sm font-bold hover:text-neutral-300">{link.title}</a>})}
        </div>
      </div>
    </div>
  );
}