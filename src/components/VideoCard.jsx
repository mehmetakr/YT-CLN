import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const [isHover, setishover] = useState(false);
  console.log(isHover);
  return (
    <div
      onMouseEnter={() => setishover(true)}
      onMouseLeave={() => setishover(false)}
      onClick={() => navigate(`/watch?y=${video.videoId}`)}
      className="cursor-pointer"
    >
      {/* Fotograf kısmı */}
      <div>
        <img
          src={
            isHover
              ? video.richThumbnail[video.richThumbnail.length - 1].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          className="rounded-lg w-full h-full"
        />
      </div>
      {/* alt detay alanları (video ismi , kanal adı fotograf ) */}
      <div className="flex gap-4 mt-5">
        <img
          className="rounded-[50%] w-14 h-14"
          src={
            video.channelThumbnail
              ? video.channelThumbnail[0]?.url
              : "./default.png"
          }
        />
        <div className="">
          <h4 className="font-bold"> {video.title} </h4>
          <p> {video.channelTitle}</p>
          <div className="flex gap-4">
            <p>{millify(video.viewCount)} görüntülenme </p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
