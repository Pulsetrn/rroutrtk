import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex gap-[10px] justify-between min-h-[112px] bg-[#FFF7ED]">
      <Link
        to={"/"}
        className={
          "font-bold text-[25px] ml-[25px] mt-[36px] m-h-[41px] no-underline text-black max-h-[30px]"
        }
      >
        #VANLIFE
      </Link>
      <div className={"mr-[26px] mt-[43px] flex gap-5"}>
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive
              ? "underline text-[#4D4D4D] font-bold max-h-[30px]"
              : "no-underline text-[#4D4D4D] max-h-[30px] hover:font-bold transition-all"
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "underline text-[#4D4D4D] font-bold max-h-[30px]"
              : "no-underline text-[#4D4D4D] max-h-[30px] hover:font-bold transition-all"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive
              ? "underline text-[#4D4D4D] font-bold max-h-[30px]"
              : "no-underline text-[#4D4D4D] max-h-[30px] hover:font-bold transition-all"
          }
        >
          Vans
        </NavLink>
        <Link to="/login"><img src="/User_circle.svg" alt=""/></Link>
      </div>
    </div>
  );
}

export default Header;
