import { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/YoutubeContext";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
const Feed = () => {
  const { video } = useContext(YoutubeContext);

  console.log("dsgfdhfdgd", video);
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="video-layout">
        {/* EĞER APİDEN HENÜZ CEVAP GELMEDİYSE YÜKLENİYOR YAZISI BASTIRIR GELİRSEDE EKRANA VİDEOLARI BASTIRIR */}
        {!video ? (
          <Loader />
        ) : (
          video.map(
            (item, i) =>
              item.type === "video" && <VideoCard video={item} key={i} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
