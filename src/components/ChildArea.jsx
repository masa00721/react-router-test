import React from "react";
import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  const data = [...Array(1).keys()];
  data.forEach = () => {
    console.log("...");
  };
  console.log(data);
  return (
    <>
      {open ? (
        <div>
          <p>引火点は燃焼点より低い</p>
          <button onClick={onClickClose}>✖︎</button>
        </div>
      ) : null}
    </>
  );
});
