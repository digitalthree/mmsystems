import Link from "next/link";
import { RiMailSendLine } from "react-icons/ri";

export interface chiSiamoFormProps {}

const ChiSiamoForm: React.FC<chiSiamoFormProps> = ({}) => {
  return (
    <>
      <div className=" w-full flex justify-center items-center bg-[#E4E4E4] py-4">
        <form className="container flex flex-col md:flex-row justify-items-center md:gap-4 max-w-lg md:max-w-7xl mb-10">
          <div className="w-full md:w-2/5 shadow-xl p-6 pb-0 md:pb-6 flex flex-col justify-center items-center bg-white">
            <RiMailSendLine className="text-primary w-14 h-14 md:w-24 md:h-24" />
            <span className="text-gray-900 text-2xl font-normal">
              SELEZIONA
            </span>
            <span className="text-gray-900 text-2xl font-normal mb-8">
              l`ufficio
            </span>
            <div className="w-full flex flex-row justify-center items-center">
              <div
                className="
                bg-[#F6F6F6] justify-center mb-2 h-auto md:h-[340px] w-full flex md:flex-col md:w-3/4 bg-transparent"
              >
                <div className="join join-horizontal gap-1 md:gap-6 md:join-vertical rounded-none justify-center mx-auto">
                  <input
                    className="join-item btn bg-transparent btn-sm md:btn-lg font-normal max-w-52 text-stone-800 checked:bg-primary hover:bg-primary "
                    type="radio"
                    name="options"
                    aria-label="Progettazione"
                  />
                  <input
                    className="join-item btn bg-transparent btn-sm md:btn-lg font-normal max-w-52 text-stone-800 checked:bg-primary hover:bg-primary"
                    type="radio"
                    name="options"
                    aria-label="Vendita"
                  />
                  <input
                    className="join-item btn bg-transparent btn-sm md:btn-lg font-normal max-w-52 text-stone-800 checked:bg-primary hover:bg-primary  "
                    type="radio"
                    name="options"
                    aria-label="Assistenza"
                  />
                  <input
                    className="join-item btn bg-transparent btn-sm md:btn-lg font-normal max-w-52 text-stone-800 checked:bg-primary hover:bg-primary  "
                    type="radio"
                    name="options"
                    aria-label="Marketing"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 p-10 bg-white shadow-xl flex flex-col justify-center ">
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-gray-900 font-normal">
                  Nome:
                </span>
              </div>
              <input
                type="text"
                className="input text-gray-900 bg-[#F6F6F6]"
                required
              />
            </label>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-gray-900 font-normal">
                  Cognome:
                </span>
              </div>
              <input
                type="text"
                className="input text-gray-900 w-full bg-[#F6F6F6]"
                required
              />
            </label>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-gray-900 font-normal">
                  Email:
                </span>
              </div>
              <input
                type="email"
                className="input text-gray-900 input-md w-full bg-[#F6F6F6]"
                required
              />
            </label>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-gray-900 font-normal">
                  Richiesta Informazioni:
                </span>
              </div>
              <textarea
                className="textarea text-gray-900 h-24 bg-[#F6F6F6]"
                required
              ></textarea>
            </label>

            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="checkbox"
                  required
                  className="checkbox border-gray-900 mr-2"
                />
                <span className="label-text text-gray-900 font-normal">
                  Ho letto e accetto l`informativa sulla
                  <Link
                    href="/"
                    className=" font-bold hover:underline underline-offset-4"
                  >
                    {" "}
                    privacy
                  </Link>{" "}
                  {/* Inserire link alla privacy */}
                </span>
              </label>
              <button className="btn bg-primary text-white active:bg-sky-400 hover:bg-sky-400 mt-6">
                {" "}
                Invia richiesta
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ChiSiamoForm;
