import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLoginUserMutation } from "../store/vans.api";

export interface IFormFields {
  email: string;
  password: string;
}

function LoginPage() {
  const [sp] = useSearchParams();
  const message = sp.get("message");
  const [formState, setFormState] = useState<IFormFields>({
    email: "",
    password: "",
  });
  // Первый элемент в кортеже триггер на отправку данных в мутацию
  // второе - результат, который приходит с сервера соответственно с полями: isLoading, data, isError...
  const [submit, { status, data, error, isLoading }] =
    useLoginUserMutation(formState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log();
    if (status === "fulfilled") {
      localStorage.setItem("user", data);
      navigate("/", { replace: true });
    }
  }, [status, data, navigate]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submit(formState);
  }

  return (
    <div className="mt-10 mb-[700px] flex flex-col justify-center items-center max-w-[800px] min-h-[600px] bg-white mx-auto rounded-[20px]">
      {message && (
        <div className="box-border rounded bg-gray-700 p-3 max-h-[50px]">
          <h1 className="mb-4 text-red-800 block box-border relative bottom-9">
            {message}
          </h1>
        </div>
      )}
      <h1 className="mb-10">Sign in to your account</h1>
      <form className="mb-10" onSubmit={handleSubmit}>
        <div className="min-w-[490px] flex flex-col mb-[50px]">
          <input
            type="text"
            placeholder="Email address"
            className="min-h-[40px] rounded-t border border-[#AAAAAA] shadow-sm p-2 box-border bg-[#f1f1f1] border-b-0"
            value={formState.email}
            onChange={(event) =>
              setFormState((cur) => ({ ...cur, email: event.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="min-h-[40px] rounded-b border border-[#AAAAAA] shadow-sm p-2 box-border bg-[#f1f1f1]"
            value={formState.password}
            onChange={(event) =>
              setFormState((cur) => ({ ...cur, password: event.target.value }))
            }
          />
        </div>
        <button className="box-border min-w-[490px] min-h-[50px] border-0 rounded-[10px] text-white font-bold bg-[#FF8C38] hover:bg-black hover:text-white transition-all duration-30000">
          {isLoading ? "Loading..." : "Sign in"}
        </button>
      </form>
      {(error as { status: number; data: { message: string } })?.status ===
        401 && <h2>Email or password is incorrect</h2>}
      {error &&
        (error as { status: number; data: { message: string } }).status !==
          401 && <h2 className="text-red-700">Error occurred</h2>}
      <div className="flex gap-3">
        <div>Don’t have an account?</div>
        <Link
          to=""
          className="no-underline hover:underline text-[#FF8C38] hover:text-sky-800 transition-all"
        >
          Create one now
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
