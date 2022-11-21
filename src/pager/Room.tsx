import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShareScreenButton from "../components/ShareScreenButton";
import VideoPlayer from "../components/VideoPlayer";
import { PeerState } from "../context/peerReducer";
import { RoomContext } from "../context/RoomContext";

export const Room = () => {
  const { id } = useParams();
  const { ws, me, stream, peers, shareScreen, screenSharingId, setRoomId } =
    useContext(RoomContext);
  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, [id, stream, me]);
  useEffect(() => {
    setRoomId(id || "");
  }, [id, setRoomId]);
  console.log(screenSharingId);
  const screenSharingVideo =
    screenSharingId === me?.id ? stream : peers[screenSharingId]?.stream;
    const { [screenSharingId]: sharing, ...peersToShow } = peers;

  return (
    <>
      Room id is {id}
      <div className="flex">
        {screenSharingVideo && (
          <div className="w-4/5 pr-5">
            <VideoPlayer stream={screenSharingVideo} />
          </div>
        )}

        <div
          className={`grid  gap-4 ${
            screenSharingVideo ? "w-1/5 grid-col-1" : "grid-col-4"
          }`}
        >
          {screenSharingId!==me?.id&&<VideoPlayer stream={stream} />}
          {Object.values(peersToShow as PeerState).map((peer, index) => (
            <div key={`ahmed-${index}`}>
              <VideoPlayer stream={peer.stream} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-28 fixed bottom-0 p-6 w-full items-center flex justify-center border-t-2 bg-white">
        <ShareScreenButton onClick={shareScreen} />
      </div>
    </>
  );
};
