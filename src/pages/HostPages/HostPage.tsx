import { NavLink, Outlet } from "react-router-dom";

function HostPage() {
  return (
    <>
      <div className="ml-6 flex gap-8 text-[16px]">
        <NavLink
          to={"/host"}
          end
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? "font-bold underline text-[#4D4D4D]"
              : "text-[#4D4D4D] no-underline hover:font-bold transition-all"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/host/income"}
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? "font-bold underline text-[#4D4D4D]"
              : "text-[#4D4D4D] no-underline hover:font-bold transition-all"
          }
        >
          Income
        </NavLink>
        <NavLink
          to={"/host/vans"}
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? "font-bold underline text-[#4D4D4D]"
              : "text-[#4D4D4D] no-underline hover:font-bold transition-all"
          }
        >
          Vans
        </NavLink>
        <NavLink
          to={"/host/reviews"}
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? "font-bold underline text-[#4D4D4D]"
              : "text-[#4D4D4D] no-underline hover:font-bold transition-all"
          }
        >
          Reviews
        </NavLink>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default HostPage;
