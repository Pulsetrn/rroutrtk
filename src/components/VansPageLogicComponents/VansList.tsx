import { useEffect, useState } from "react";
import { vansResponse } from "../../models/api.iterface.ts";
import VansCard from "./VansCard.tsx";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useGetAllVansQuery } from "../../store/vans.api.ts";

function VansList() {
  const [data, setData] = useState<vansResponse[]>([]);
  const { data: serverData, isLoading, isError } = useGetAllVansQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get("type");
  const vansTypes = new Set(data.map((item) => item.type));
  const types: { simple: string; rugged: string; luxury: string } = {
    simple: "bg-[#E17654] text-white",
    rugged: "bg-[#115E59] text-[#FFEAD0]",
    luxury: "bg-[#161616] text-[#FFEAD0]",
  };
  type typesKeys = keyof typeof types;
  const filteredData = filterType
    ? data.filter((van) => van.type.toLowerCase() === filterType)
    : data;

  useEffect(() => {
    if (serverData) {
      setData(serverData);
    }
  }, [serverData]);

  // Отображаем data, полученную в response в vanscards
  return (
    <>
      {isError && (
        <h1 className={"font-bold text-red text-[40px]"}>Error occurred</h1>
      )}
      {!isError && (
        <div className="min-h-[1450px] min-w-[550px] bg-[#FFF7ED]">
          <div className={"mb-10 mx-5"}>
            <div className={"text-[32px] font-bold mb-5"}>
              Explore our van options
            </div>
            <div className={"flex gap-3"}>
              {Array.from(vansTypes).map((name) => {
                const active = name === filterType;
                return (
                  <button
                    className={
                      "text-[16px] rounded min-w-[104px] min-h-[37px] border-0 font-bold cursor-pointer transition-all" +
                      (active
                        ? ` ${types[name as typesKeys]}`
                        : " bg-[#FFEAD0] text-[#4D4D4D]")
                    }
                    onClick={() => setSearchParams({ type: name })}
                  >
                    {name}
                  </button>
                );
              })}
              {filterType ? (
                <button
                  className={
                    "border-0 bg-[#FFF7ED] font-bold text-[#4D4D4D] text-[16px] cursor-pointer" +
                    " no-underline hover:underline transition-all hover:text-black"
                  }
                  onClick={() => setSearchParams({})}
                >
                  Clear filters
                </button>
              ) : null}
            </div>
          </div>
          {!isLoading && (
            <div className={"mx-5 box-border flex flex-wrap gap-5"}>
              {filteredData.map((item) => {
                return (
                  <Link
                    to={item.id}
                    state={{
                      search: searchParams.toString(),
                      type: filterType,
                    }}
                    className={"no-underline text-inherit"}
                  >
                    <VansCard
                      key={item.id}
                      description={item.description}
                      id={item.id}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      price={item.price}
                      type={item.type}
                    ></VansCard>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default VansList;
