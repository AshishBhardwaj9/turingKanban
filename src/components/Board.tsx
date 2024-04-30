import React, { useEffect, useState } from "react";
import Plus from "../icons/Plus.jsx";
import { Col } from "../utils/Types.js";
import ColumnSet from "./ColumnSet.js";
function Board() {
  const [col, setCol] = useState<Col[]>([]);
  useEffect(() => {console.log(col)}, [col]);
  function addCol() {
    let newCol: Col = {
      id: genID(),
      title: `Column ${col.length + 1}`,
    };
    setCol([...col, newCol]);
  }

  function genID() {
    return Math.floor(Math.random() * 100001);
  }
  function delCol(id : number|string){
    let colList=col.filter(c=>c.id!=id);
    setCol(colList)
  }
  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-40">
     
      <div className="m-auto flex gap-4">
      <div className="flex gap-4">
        {col.map((c)=>(<ColumnSet delCol={delCol} col={c}/>))}
        </div>
        <button
          className="h-[60px] w-360px min-w-360px hover:cursor-pointer bg-mainBGC border-2 border-colBGC p-4 ring-rose-500 hover:ring-2 rounded-lg flex gap-3"
          onClick={() => {
            addCol();
          }}
        >
          <Plus />
          Add column
        </button>
      </div>
    </div>
  );
}

export default Board;
