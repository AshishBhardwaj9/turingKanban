import React from "react";
import Plus from "../icons/Plus.jsx"
function Board() {
  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-40">
      <div className="m-auto">
        <button className="h-[60px] w-360px min-w-360px cursor-pointer bg-mainBGC border-2 border-colBGC p-4 ring-rose-500 hover:ring-2 rounded-lg flex gap-3"><Plus/>Add column</button>
      </div>
    </div>
  );
}

export default Board;
