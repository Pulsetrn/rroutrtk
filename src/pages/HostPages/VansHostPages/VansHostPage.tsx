import { useEffect, useState } from "react";
import { vansResponse } from "../../../models/api.iterface.ts";
import { useGetVansForHostQuery } from "../../../store/vans.api.ts";
import { Link } from "react-router-dom";

function VansHostPage() {
  const [data, setData] = useState<vansResponse[]>([]);
  // @ts-ignore
  const { data: vansData, isError, isLoading } = useGetVansForHostQuery();

  useEffect(() => {
    if (vansData) {
      setData(vansData);
    }
  }, [vansData]);

  return (
    <>
      {isError && (
        <h1 className={"text-red test-[50px] font-bold"}>Error occurred</h1>
      )}
      {isLoading && <h2>Loading...</h2>}
      {!isError && !isLoading && data.length > 0 && (
        <div className={"mx-6 mb-14"}>
          <h1 className={"text-[32px] text-[#161616]"}>Your listed vans</h1>
          <div className={"flex flex-col gap-4"}>
            {data.map((item) => {
              return (
                <Link
                  to={`/host/vans/${item.id}`}
                  key={item.id}
                  className={"no-underline"}
                >
                  <div
                    className={
                      "min-w-[500px] min-h-[100px] bg-[#FFFFFF] flex gap-[50px] box-border p-4 hover:bg-gray-100 transition-all"
                    }
                  >
                    <img
                      src={item.imageUrl}
                      alt=""
                      className={"max-w-[140px] max-h-[140px] bg-cover rounded"}
                    />
                    <div className={"flex flex-col gap-2 self-center"}>
                      <div className={"text-[26px] font-bold text-black"}>
                        {item.name}
                      </div>
                      <div className={"text-[20px] text-[#4D4D4D]"}>
                        {item.price}$/day
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default VansHostPage;
