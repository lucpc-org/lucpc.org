export default function Contact() {
  return (
    <div className="h-full sm:px-16 flex flex-col justify-center lg:min-h-[600px] lg:h-full w-full">
        <h1 className="lg:mt-0 text-5xl p-2 ml-8 font-serif">Contact Us</h1>
        <div className="mt-8 mb-48 sm:ml-16 lg:mb-0 lg:h-2/5 flex flex-col items-center sm:items-start">
          <div><span className="font-bold">President</span>: Jake Hoffman</div>
          <div className="whitespace-pre-wrap">        jthoffman@liberty.edu</div>
          <div className="mt-4"><span className="font-bold">Faculty Advison</span>: Dr. Mark Merry</div>
          <div className="whitespace-pre-wrap">        msmerry@liberty.edu</div>
        </div>
        
    </div>
     
  );
}