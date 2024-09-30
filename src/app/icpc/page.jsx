import Image from "next/image";
import RedLink from "../../component/RedLink";

export default function ICPC() {
  return (
    <div className="flex flex-col w-full font-sans pb-12 bg-background">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex flex-col gap-4 text-lg">
          <h1>Welcome to the Liberty University ICPC</h1>
          <p>
            The International Collegiate Programming Contest (ICPC) is the world's oldest, largest, and most prestigious
            programming contest. Liberty University is excited to be an official site of the Mid-Atlantic Regional. The
            Mid-Atlantic Regional includes universities from Pennsylvania, New Jersey, Delaware, Maryland, District of
            Columbia, Virginia, West Virginia, and North Carolina.
          </p>
          <p>
            For more details visit the{" "}
            <RedLink to="https://sites.radford.edu/~acm/midatl/" label="Mid-Atlantic Regional Homepage" />, and the{" "}
            <RedLink to="https://icpc.global" label="International Collegiate Programming Contest Homepage" />
          </p>
        </div>
        <Image src="/images/icpc.png" alt="ICPC" width={500} height={500} className="rounded-lg" />
      </div>
      <div className="flex lg:flex-row flex-col lg:max-w-[50%] lg:pt-0 pt-4 lg:pb-0 pb-4  justify-between">
        <div className="pb-6">
            <h2 className="pb-2">Contest Details</h2>
            <ul className="pl-8">
                <li>Date: Saturday, November 16, 2024</li>
                <li>Time: TBD</li>
                <li>Location: School of Business</li>
            </ul>
        </div>
        <div>
            <h2 className="pb-2">Site Personnel</h2>
            <ul className="pl-8">
                <li><span className="font-bold">Site Director: </span>Dr. Mark Merry</li>
                <li><span className="font-bold">Site Sys Admin:</span>Micheal Cooper</li>
                <li><span className="font-bold">Volunteer Coordinator:</span>Sam McDowell</li>
            </ul>
        </div>
      </div>
      <p>Contact Dr. Mark Merry at <a href="mailto:msmerry@liberty.edu" className="text-real_blue-500 underline">msmerry@liberty.edu</a> for more information.</p>
      <div className="pt-5">
        <h2 className="pb-2">Location</h2>
        <p className="font-bold">Liberty University School of Business</p>
        <p>1971 University Blvd, Lynchburg, VA 24515</p>
        <p className="pt-4 pb-4">It is recommended to take University Blvd. to the Liberty University Bookstore and continue South to the School of Business Parking Lot.</p>
        <Image src="/images/map.png" alt="School of Business" width={800} height={800}  className="rounded-lg"/>
      </div>
      <div className="pt-5">
        <h2 className="pb-2">Parking Information</h2>
        <p>Parking is available at the School of Business Parking Lot. See the lot circled in red on the map. For overflow parking follow volunteer's directions.</p>
      </div>
      <div className="pt-5 lg:max-w-[75%]">
        <h2 className="pb-2">Room Information</h2>
        <p>Registration will be in the Lobby. Volunteers will be there to direct you. The Opening Ceremony and the Awards Ceremony will take place in Room 1000. Breakfast, Lunch and Dinner will be in Room 1600. Competition Rooms and the Coaches Lounge will be on the second floor. Please follow event signs.</p>
      </div>
    </div>
  );
}
