import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import VideoCard from "../components/VideoCard";

import { getData } from "../utils/getData";
import millify from "millify";
import StringArea from "../components/StringArea";
const VideoDetails = () => {
  const [video, setvideo] = useState(null);
  // 1-) url'den arama parametresini al

  const [searchParams] = useSearchParams();

  // bu sayede tıkladıgımız videonun id sine ulaşmiş olduk
  const id = searchParams.get("v");

  // id sini bildigimiz video için api isteği at

  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`)
      .then((data) => {
        setvideo(data);
        console.log(data, "dgfdhgfhfdgsd");
      })
      .catch((err) => {});
  }, [searchParams]);
  // console.log(id);

  return (
    <div className="detail-page p-5 h-screen overflow-auto">
      <div>
        <>
          <ReactPlayer
            width={"90%"}
            height={"50vh"}
            style={{ margin: 42 }}
            playing={true}
            controls
            url={`https://www.youtube.com/watch?v=${id}`}
          />
          {!video ? (
            "yükleniyor"
          ) : (
            <>
              <h1 className="my-3 text-xl font-bold">{video.title}</h1>

              <div className="flex justify-between">
                {/* sol kısım  */}
                <div className="flex items-center gap-4">
                  <img
                    className="rounded-full w-12 h-12"
                    src={
                      video.channelThumbnail[video.channelThumbnail.length - 1]
                        .url
                    }
                    alt=""
                  />

                  <div>
                    <h4 className="font-bold">{video.channelTitle}</h4>
                    <p className="text-gray-600">{video.subscriberCountText}</p>
                  </div>
                  <button className="rounded-full transition hover:bg-slate-600 hover:text-white bg-gray-400 px-3 py-2">
                    Abone ol{" "}
                  </button>
                </div>
                {/* sağ */}
                <div className=" cursor-pointer flex items-center bg-gray-600 rounded-full">
                  <div className="flex items-center gap-3 px-4 py-2 border-r">
                    <AiFillLike />
                    <p>{video.likeCount}</p>
                  </div>
                  <div className="py-2 px-5">
                    <AiFillDislike />
                  </div>
                </div>
              </div>
              <div className="bg-gray-600 rounded p-2 mt-4 cursor-pointer hover:bg-gray-700">
                <div className="flex gap-3 mt-5">
                  <p>{millify(video.viewCount)} görüntülenme</p>
                  <p>{new Date(video.publishDate).toLocaleDateString()}</p>
                </div>
                <StringArea style={{ padding: 33 }} text={video?.description} />
              </div>
            </>
          )}
        </>
      </div>
      <div className="flex flex-col gap-5 m-9 p-2">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard isRow={true} video={item} />
          )
        )}
      </div>
    </div>
  );
};
export default VideoDetails;
