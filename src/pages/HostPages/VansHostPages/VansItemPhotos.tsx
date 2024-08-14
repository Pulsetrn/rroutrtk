import { useTypedOutletContext } from "./VansItemHostPage.tsx";

function VansItemPhotos() {
  const { data } = useTypedOutletContext();

  return (
    <div>
      <img
        src={data.imageUrl}
        alt=""
        className={"max-w-[130px] max-h-[130px]"}
      />
    </div>
  );
}

export default VansItemPhotos;
