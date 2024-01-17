import { Link, Navigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { AiFillBell, AiFillVideoCamera } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" />
        <h1 className="text-red-500 text-2xl max-sm:hidden">Youtube</h1>
      </Link>
      <form className="flex items-center border border-gray-400 rounded-[20px]  ">
        <input
          className="bg-black text-white text-lg outline-none rounded-[20px] px-3 py-1 "
          type="text"
        />

        <button className="border-l px-2">
          <IoSearch />
        </button>
      </form>
      <div className="flex gap-5 text-xl cursor-pointer">
        <AiFillBell className="hover:text-red-400 rounded-[23px]" />
        <AiFillVideoCamera className="hover:text-red-600 rounded-[43px]" />
      </div>
    </header>
  );
};
export default Header;
