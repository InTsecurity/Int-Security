import React from "react";
import "./main.css";

function Videos() {
  const videos = VideoList.map((e) => {
    return <CreateVideo src={e.link} key={e.link} />;
  });
  return (
    <div className="videos">
      <div className="title">Videos</div>
      <div className="list--videos">{videos}</div>
    </div>
  );
}

function CreateVideo(props) {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src={props.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

const VideoList = [
  {
    link: "https://www.youtube.com/embed/MlL7rU7KVAY",
  },
  {
    link: "https://www.youtube.com/embed/4pfoZ__IYZ4",
  },
  {
    link: "https://www.youtube.com/embed/17Q_qOlLEo8",
  },
  {
    link: "https://www.youtube.com/embed/_UOSYXC8XyA",
  },
  {
    link: "https://www.youtube.com/embed/97-we7ToO_g",
  },
  {
    link: "https://www.youtube.com/embed/yIwfaNNE1K0",
  },
  {
    link: "https://www.youtube.com/embed/jiZYbTqiJGE",
  },
  {
    link: "https://www.youtube.com/embed/kOuEN59dWWY",
  },
  {
    link: "https://www.youtube.com/embed/aj01oVpMIdY",
  },
  {
    link: "https://www.youtube.com/embed/j4ppoynp1wg",
  },
  {
    link: "https://www.youtube.com/embed/xduzBH8oqr4",
  },
  {
    link: "https://www.youtube.com/embed/pfaa9YDypJc",
  },
  {
    link: "https://www.youtube.com/embed/EjcMHRDfHp0",
  },
  {
    link: "https://www.youtube.com/embed/R258RaAIfO0",
  },
  {
    link: "https://www.youtube.com/embed/j2vAshOm8QI",
  },
  {
    link: "https://www.youtube.com/embed/Frf4xhp1jts",
  },
  {
    link: "https://www.youtube.com/embed/dFBsSiEbyFE",
  },
];

export default Videos;
