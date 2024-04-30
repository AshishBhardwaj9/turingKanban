import React from "react";
import Delete from "../icons/Delete";
import { Col } from "../utils/Types";
interface Props {
  col: Col;
  delCol: (id: number | string) => void;
}
function ColumnSet(props: Props) {
  return (
    <div>
      <div
        className="flex rounded-md flex-col h-80 max-h-[500px] w-72 bg-colBGC"
        key={props.col.id}
      >
        <div className="bg-mainBGC flex justify-between cursor-grab h-1/5 p-3 rounded-md border-4 border-colBGC">
          <div className="flex gap-2">
            <div className="">0</div>
            <div>{props.col.title}</div>
          </div>
          <button className="stroke-gray-500 border-none px-2 py-1 hover:stroke-white hover:bg-colBGC" onClick={()=>{props.delCol(props.col.id)}}>
            <Delete />
          </button>
        </div>
        <div className="flex flex-grow">Content</div>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default ColumnSet;
