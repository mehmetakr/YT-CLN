import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import { data } from "autoprefixer";
import Loader from "../components/Loader";
const Searchresults = () => {
  const [results, setresults] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  // her isteğin başında önceki istekten elde ettiğimiz verileri si
  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((data) =>
      setresults(data)
    );
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex justify-center p-4 flex-1 h-screen overflow-auto">
        <div className="flex flex-col max-w-lg gap-10 items-center">
          {!results ? (
            <Loader />
          ) : (
            results.data.map(
              (item) => item.type === "video" && <VideoCard video={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchresults;
