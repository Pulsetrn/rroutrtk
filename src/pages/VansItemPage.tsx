import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { vansResponse } from "../models/api.iterface.ts";
import { useGetVanByIdQuery } from "../store/vans.api.ts";

function VansItemPage() {
  const { id } = useParams();
  const [vansData, setVansData] = useState<vansResponse>();
  const { data, isLoading, isError } = useGetVanByIdQuery(id);
  const { state } = useLocation();

  const types: { simple: string; rugged: string; luxury: string } = {
    simple: "bg-[#E17654] text-white",
    rugged: "bg-[#115E59] text-[#FFEAD0]",
    luxury: "bg-[#161616] text-[#FFEAD0]",
  } as const;
  type typesKeys = keyof typeof types;

  useEffect(() => {
    setVansData(data);
  }, [data]);

  return (
    <>
      {isError && (
        <h1 className={"font-bold text-red text-[40px]"}>Error occurred</h1>
      )}
      {isLoading && (
        <div
          role="status"
          className={
            "flex justify-center items-center mb-[50px] min-w-[550px] min-h-[800px] bg-[#FFF7ED]"
          }
        >
          <svg
            aria-hidden="true"
            className="w-[400px] h-[400px] text-gray-200 animate-spin dark:text-gray-600 fill-orange-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!isLoading && vansData && !isError && (
        <div className={"min-w-[550px] min-h-[800px] bg-[#FFF7ED]"}>
          <Link
            to={`..${state.search ? "?" + state.search : ""}`}
            relative={"path"}
            className={
              "text-[#201F1D] ml-7 no-underline hover:underline hover:font-bold transition-all"
            }
          >
            <img src="/Arrow_1.svg" alt="" className={"w-[13px] mr-2"} />
            {state.type ? `back to ${state.type} vans` : "back to all vans"}
          </Link>
          <div className={"flex gap-3 ml-7"}>
            <img
              src={vansData?.imageUrl}
              alt=""
              className={"rounded mt-10 max-w-[600px] max-h-[650px] bg-cover shadow-xl"}
            />
            <div className={"flex-col flex mt-[80px] ml-3 box-border p-10"}>
              <div
                className={`font-bold text-[12px] relative bottom-[16px] w-[85px] text-center rounded-[8px] p-[8px] box-border + ${types[vansData?.type as typesKeys]} shadow-2xl`}
              >
                {vansData?.type}
              </div>
              <h1>{vansData?.name}</h1>
              <h3>${vansData?.price} /day</h3>
              <div className={"text-[#161616] text-[16px] mb-[150px]"}>
                {vansData?.description}
              </div>
              <button
                className={
                  "min-w-[494px] min-h-[50px] bg-[#161616] border-0 hover:bg-[#E17654] hover:text-black duration-500 transition-all font-bold text-[16px] text-white hover:cursor-pointer self-center box-border p-[30px] rounded-[15px]"
                }
              >
                Rent this van
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VansItemPage;
