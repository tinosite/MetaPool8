import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({ VideoName, itemId  }: { VideoName: string; itemId: string } ) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.isItemVisible(itemId);
  const videoPath = "/NTFs/"+ VideoName + ".mp4";
  return (
    <div
      role="button"
      style={{
        display: "inline-block",
        margin: "0 2vw",
        width: "20vw",
        userSelect: "none"
      }}
      id={itemId}
      tabIndex={0}
      className="card"
    >
      <div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(visible)}
        </div>
        <video playsInline={true} autoPlay={true} muted loop id={"player" + VideoName} style={{width:"100%",height:"100%"}}>
            <source src={videoPath} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}
