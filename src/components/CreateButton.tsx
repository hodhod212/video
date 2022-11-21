import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

const Join: React.FC = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <button onClick={createRoom} className="bg-rose-400 py-2 px-8 text-xl rounded-lg hover:bg-red-500 text-white">
      Meeting
    </button>
  );
};

export default Join;
