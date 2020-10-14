import React from "react";
import "./VideoRow.css";
import { Avatar } from "@material-ui/core";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} />
      <div className="videoRow__text"></div>
    </div>
  );
}

export default VideoRow;
