import { useState } from "react";

const StringArea = ({ text }) => {
  const [expand, setexpand] = useState(false);

  console.log(text.split("/n"));

  let shorttext = text;
  // bu alan kapalı ise ve 300 harften uzunsa
  // yaziyi kes ve sonuna .... daha fazla koy
  if (!expand && text.length > 300) {
    shorttext = text.slice(0, 300) + "...daha fazla";
  }

  return (
    <div onClick={() => setexpand(!expand)}>
      {shorttext.split("\n").map((line) => (
        <span>
          {line}
          <br />
        </span>
      ))}
    </div>
  );
};

export default StringArea;
