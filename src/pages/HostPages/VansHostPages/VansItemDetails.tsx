import { useTypedOutletContext } from "./VansItemHostPage.tsx";

function VansItemDetails() {
  const { data } = useTypedOutletContext();
  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"flex gap-3"}>
        <h4 className={"my-0"}>Name:</h4>
        <div>{data.name}</div>
      </div>
      <div className={"flex gap-3"}>
        <h4 className={"my-0"}>Category:</h4>
        <div>{data.type}</div>
      </div>
      <div className={"flex gap-3"}>
        <h4 className={"my-0"}>Description:</h4>
        <div>{data.description}</div>
      </div>
      <div className={"flex gap-3"}>
        <h4 className={"my-0"}>Visibility:</h4>
        <div>public</div>
      </div>
    </div>
  );
}

export default VansItemDetails;
