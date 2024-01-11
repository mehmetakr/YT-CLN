import { useContext } from "react";
import { categories } from "../constants";
import { YoutubeProvider } from "../context/YoutubeContext";
import { YoutubeContext } from "../context/YoutubeContext";
const SideBar = () => {
  const { selectedcategory, setselectedcategory } = useContext(YoutubeContext);

  //  console.log(selectedcategory, setselectedcategory);
  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item, i) => (
        <div key={i}>
          <div
            onClick={() => setselectedcategory(item)}
            className={`${
              item.name === selectedcategory?.name && "bg-[#2d2d2d]"
            }  flex items-center  text-black gap-2 py-4 px-2 md:px-3 text-md md:text-lg cursor-pointer rounded-md transition duration-300 hover:bg-[#2d2d2d] hover:text-white `}
          >
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
