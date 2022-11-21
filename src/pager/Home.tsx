import React from "react";
import Join from "../components/CreateButton";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="App flex items-center justify-center w-screen h-screen">
      <Join />
    </div>
  );
};

export default Home;
