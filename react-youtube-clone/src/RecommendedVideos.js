import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Programador Jr."
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhHCjiiv6fGzgiDNGcazXUxQnhK9rJyLCI-Gw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Roberto Moran"
          image="https://i.ytimg.com/vi/SdfAtkD8bWs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDBI1kw24zGs-HD0o2jZjoUbTMz5A"
        />
        <VideoCard
          title="Beautiful Front End Developer Portfolio | Web Developer | No-Code de CodingPhase hace 1 hora 14 minutos y 25 segundos 447 vistas"
          views="447 Views"
          timestamp="10 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GiijCf0vS_R1LNi-rVKazK7I-8UGQAC6AaGaQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="CodingPhase Moran"
          image="https://i.ytimg.com/vi/quiX4tCj_-8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDoUpA7HPf2M6VWPmohSXtaymYEww"
        />
        <VideoCard
          title="OU MAMA... Galaxy Z Fold 2, lo BUENO y lo MALO!!!!"
          views="28,854 Views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhHCjiiv6fGzgiDNGcazXUxQnhK9rJyLCI-Gw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Pro Android"
          image="https://i.ytimg.com/vi/bH9_dLBQ0rQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDtrpf9-CZUrhJXsiKiP1vCwtfqzw"
        />
        <VideoCard
          title="Learn Algebra 21 : Functions"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgnSgMcxXyTuti91fopZsZqPdckbqS0LN21Kw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Derek Banas"
          image="https://i.ytimg.com/vi/dOJvYuMGme8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBs-9Ojhao_9KoIcCwG8nxLGd8xRA"
        />
        <VideoCard
          title="Fin de semana de infarto en Escuela de Bonsai Online - No te lo pierdas!"
          views="241 Views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj1b19n5SUWm1lugDkZTFSRDQdKfy4myIbsUQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Roberto Moran"
          image="https://i.ytimg.com/vi/L95HgQ0qkXs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBBsvv9hNRuIxrVw7YJMYdG2KQ1vw"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
