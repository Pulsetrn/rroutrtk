import { vansResponse } from "../../models/api.iterface.ts";

function VansCard(props: vansResponse) {
  const types: { simple: string; rugged: string; luxury: string } = {
    simple: "bg-[#E17654] text-white",
    rugged: "bg-[#115E59] text-[#FFEAD0]",
    luxury: "bg-[#161616] text-[#FFEAD0]",
  };
  type typesKeys = keyof typeof types;
  return (
    <div className={"max-w-[230px]"}>
      <img
        src={props.imageUrl}
        alt=""
        className={"max-w-[230px] bg-cover rounded"}
      />
      <div className={"flex justify-between"}>
        <div>{props.name}</div>
        <div>
          ${props.price}
          <p
            className={
              "font-medium my-0 text-[12px] relative bottom-[6px] left-[3px]"
            }
          >
            /day
          </p>
        </div>
      </div>
      <div
        className={`font-bold text-[12px] relative bottom-[16px] max-w-[85px] text-center rounded-[15px] p-[4px] box-border + ${types[props.type as typesKeys]} shadow-2xl`}
      >
        {props.type}
      </div>
    </div>
  );
}

export default VansCard;
