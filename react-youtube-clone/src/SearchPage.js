import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="http://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />

      <hr />

      <VideoRow
        views="1.5 M de vistas"
        subs="10M"
        description="Y540 and Y545 gaming laptops. These are the best gaming laptops from "
        timestamp="hace 1 año"
        channel="Dave Lee"
        title="Lenovo Y540 - Pick the Right Gaming Laptop!"
        image="https://i.ytimg.com/vi/ENJwA9MVHz8/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD_fUQp-1SYFnpm5PMz5-MgsYoaZA"
      />

      <VideoRow
        views="43,130 vistas"
        subs="10M"
        description="En este video hablaremos de las ventajas y desventajas de una laptop gamer frente a una computadora de escritorio. Además ..."
        timestamp="hace 5 meses"
        channel="SaNtRoXeD"
        title="Vale la pena una laptop GAMER? |Review y análisis lenovo legion y540|"
        image="https://i.ytimg.com/vi/j0JcIBa8JQc/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAacHvourF_e_qhJ2KZ7iEsjg3-Xw"
      />

      <VideoRow
        views="45,278 vistas"
        subs="10M"
        description=", es una excelente opcion para el mundo gamer, con un diseño minimalista y elegante, es agradable a la ..."
        timestamp="hace 11 meses"
        channel="ElDumox"
        title="Lenovo Legion Y540 UNBOXING / REVIEW 2019"
        image="https://i.ytimg.com/vi/lvfHcUgc3Hg/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6VXc5z52j1HV0Mj7jX_7rAhP2vw"
      />
    </div>
  );
}

export default SearchPage;
