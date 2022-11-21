import React, { useEffect, useRef } from "react";

interface Props {
  stream?: MediaStream;
}

const VideoPlayer: React.FC<Props> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
  }, [stream]);
  return (
    <video ref={videoRef} autoPlay={true} muted style={{ width: "100%" }} />
  );
};

export default VideoPlayer;
