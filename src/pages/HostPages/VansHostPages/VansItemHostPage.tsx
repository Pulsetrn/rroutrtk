import {
  Link,
  NavLink,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { vansResponse } from "../../../models/api.iterface.ts";
import { useGetVansForHostByIdQuery } from "../../../store/vans.api.ts";

export interface IOutletContext {
  data: vansResponse;
}

function VansItemHostPage() {
  const { id } = useParams();
  const [vanData, setVanData] = useState<vansResponse>();
  const { data, isError, isLoading } = useGetVansForHostByIdQuery(id);

  useEffect(() => {
    if (data) {
      setVanData(data);
    }
  }, [data]);

  const types: { simple: string; rugged: string; luxury: string } = {
    simple: "bg-[#E17654] text-white",
    rugged: "bg-[#115E59] text-[#FFEAD0]",
    luxury: "bg-[#161616] text-[#FFEAD0]",
  };
  type typesKeys = keyof typeof types;

  return (
    <>
      {isError && <h1 className={"text-red font-bold"}>Error occurred</h1>}
      {isLoading && <h2>Loading...</h2>}
      <div className={"mt-[30px] mb-[60px]"}>
        <div className={"mb-4"}>
          <Link
            to={".."}
            relative={"path"}
            className={"text-[#201F1D] font-bold ml-7"}
          >
            <img src="/Arrow_1.svg" alt="" className={"w-[13px] mr-2"} />
            back to all vans
          </Link>
        </div>
        <div className={"bg-white mx-4 p-5 box-border"}>
          <div className={"flex gap-4 box-border"}>
            <img
              src={vanData?.imageUrl}
              alt=""
              className={"max-w-[160px] max-h-[160px] bg-cover rounded"}
            />
            <div className={"flex flex-col gap-1 mt-7 ml-4"}>
              <div
                className={`font-bold text-[12px] relative bottom-[16px] w-[85px] text-center rounded-[8px] p-[8px] box-border + ${types[vanData?.type as typesKeys]} shadow-2xl`}
              >
                {vanData?.type}
              </div>
              <div className={"font-bold text-[26px] text-black"}>
                {vanData?.name}
              </div>
              <div className={"text-[20px] text-gray-700"}>
                {vanData?.price}$/day
              </div>
            </div>
          </div>
          <div className={"mt-6 flex gap-4"}>
            <NavLink
              to={`/host/vans/${id}`}
              end
              className={({ isActive }) =>
                isActive
                  ? "underline text-[#4D4D4D] font-bold max-h-[30px]"
                  : "no-underline text-[#4D4D4D] max-h-[30px] hover:font-bold transition-all"
              }
            >
              Details
            </NavLink>
            <NavLink
              to={`/host/vans/${id}/pricing`}
              className={({ isActive }) =>
                isActive
                  ? "underline text-[#4D4D4D] font-bold max-h-[30px]"
                  : "no-underline text-[#4D4D4D] max-h-[30px] hover:font-bold transition-all"
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to={`/host/vans/${id}/photos`}
              className={({ isActive }) =>
                isActive
                  ? "underline text-[#4D4D4D] font-bold max-h-[30px]"
                  : "no-underline text-[#4D4D4D] max-h-[30px] hover:font-bold transition-all"
              }
            >
              Photos
            </NavLink>
          </div>
          <div className={"mt-6"}>
            {data && <Outlet context={{ data }}></Outlet>}
          </div>
        </div>
      </div>
    </>
  );
}

export function useTypedOutletContext() {
  return useOutletContext<IOutletContext>();
}

export default VansItemHostPage;
