import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-[url('./image_53.png')] min-h-[750px] bg-cover justify-center">
        <h1
          className={
            "text-white max-w-[500px] text-[36px] leading-[45px] mx-auto min-h-[84px] mt-0 pt-[60px]"
          }
        >
          You got the travel plans, we got the travel vans.
        </h1>
        <p
          className={
            "text-white mx-auto max-w-[500px] text-[16px] leading-[24px]"
          }
        >
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to={""}
          className={`bg-[#FF8C38] text-white font-bold text-[16px] border-0 rounded-[5px] min-w-[500px] min-h-[50px] no-underline block max-w-[500px] mx-auto mt-12 text-center box-border pt-3`}
        >
          Find your van
        </Link>
      </div>
    </>
  );
}

export default HomePage;
