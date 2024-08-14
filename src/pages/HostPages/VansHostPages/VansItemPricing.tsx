import { useTypedOutletContext } from "./VansItemHostPage.tsx";

function VansItemPricing() {
  const { data } = useTypedOutletContext();

  return <div className={"text-[26px] font-bold "}>{data.price}$/day</div>;
}

export default VansItemPricing;
