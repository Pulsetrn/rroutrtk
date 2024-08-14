import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <div className={"box-border mt-1"}>
        <div className="bg-[url('./image_54.png')] box-border bg-cover min-w-[548px] min-h-[234px]"></div>
        <div className={"min-h-[600px] bg-[#FFF7ED]"}>
          <h1
            className={
              "mt-0 text-[32px] text-[#161616] leading-9 font-bold pt-10 max-w-[494px] mx-auto"
            }
          >
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <div
            className={"min-h-[155px] max-w-[494px] mx-auto font-bold mt-10"}
          >
            <p className={"text-[16px] text-[#161616]"}>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>

            <p className={"text-[16px] text-[#161616]"}>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div
            className={
              "max-w-[494px] max-h-[210px] bg-[#FFCC8D] mx-auto mt-[30px] rounded-[10px] box-border text-[24px] text-[#161616] font-bold leading-7 pb-8"
            }
          >
            <ul className={"list-none p-[30px]"}>
              <li>Your destination is waiting.</li>
              <li>Your van is ready.</li>
            </ul>
            <Link
              to={""}
              className={
                "border-0 bg-[#161616] text-white block max-w-[154px] min-h-[50px] rounded-[10px] text-[16px] font-bold ml-10 no-underline p-[10px] box-border hover:bg-[#503636] transition-colors duration-400"
              }
            >
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
