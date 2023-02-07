import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [btn, setBtn] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setBtn(!btn)}>
          {btn ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {btn && <p>{info}</p>}
    </article>
  );
};

export default Question;
