import * as IoIcons from "react-icons/io";

export default function Login() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="bg-white rounded-2xl shadow-xl space-y-2 sm:w-1/4 w-10/12 relative overflow-hidden">
        <div className="absolute z-30">
          <IoIcons.IoMdArrowRoundBack
            className="text-white opacity-70 ml-8 mt-8"
            size={24}
          />
        </div>
        <div className="absolute w-screen -translate-y-10 skew-y-6 transform sm:h-48 h-32 bg-blue-600 z-10"></div>
        <div className="absolute w-screen -translate-y-10 -skew-y-6 transform sm:h-16 h-28 bg-indigo-300 z-0"></div>
        <form className="z-40 px-10 py-5 pt-32 space-y-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Selamat Datang!
            </h1>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="py-1 border-b border-blue-500">
              <input
                type="text"
                className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                placeholder="Username"
              />
            </div>
            <div className="py-1 border-b border-blue-500">
              <input
                type="password"
                className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                placeholder="Password"
              />
            </div>
            <div className="pt-5 w-full flex">
              <button className="bg-blue-600 rounded-full text-white font-bold w-full py-2">
                Masuk
              </button>
            </div>
            <div className="flex justify-between flex-row-reverse py-3">
              <h1 className="text-blue-600 hover:underline cursor-pointer">
                Lupa Password?
              </h1>
              <h1 className="text-blue-600 hover:underline cursor-pointer">
                Daftar Akun
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
