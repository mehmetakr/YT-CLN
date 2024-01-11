import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { getData } from "../utils/getData";
const VideoDetails = () => {
  const [video, setvideo] = useState(null);
  // 1-) url'den arama parametresini al

  const [searchparams] = useSearchParams();

  // bu sayede tıkladıgımız videonun id sine ulaşmiş olduk
  const id = searchparams.get("y");

  // id sini bildigimiz video için api isteği at

  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`)
      .then((data) => {
        setvideo(data);
        console.log("dgfdhgfhfdgsd");
      })
      .catch((err) => {});
  });
  // console.log(id);

  console.log(video, "tam olarak burasi");
  return (
    <div className="detail-page p-5">
      <div className="">
        <ReactPlayer
          width={"90%"}
          height={"50vh"}
          style={{ margin: 42 }}
          playing={true}
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        <h1>{video.title}</h1>
        <div>
          {/* sol kısım  */}
          <div>
            <img src="" alt="" />

            <div>
              <h4>isim</h4>
              <p>abone</p>
            </div>
            <button>abone ol </button>
          </div>
          {/* sağ */}
          <div>
            <div>
              <AiFillLike />
              <p>3000b</p>
            </div>
            <div>
              <AiFillDislike />
              <p>1000b</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border">alakalı içerikler</div>
    </div>
  );
};
export default VideoDetails;
