import React, { useRef, useEffect, useState } from "react";
import { Text } from "../../../../components";
import "./index.scss";
export default function Accordion({ label = "", children }) {
  const content = useRef();
  const accordion = useRef();
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(active ? content.current.scrollHeight : 0);
    accordion.current.classList.toggle("active", active);
  }, [active]);
  return (
    <div ref={accordion} className="Accordion transition">
      <button className="toggler slider-item position-relative fw-bold transition border-0 w-100 d-flex align-items-center" onClick={() => setActive((prev) => !prev)}>
        <Text value={label} />
        <i className="bi bi-chevron-down transition fw-bold me-auto"></i>
      </button>
      <div ref={content} style={{ height: `${height}px` }} className="content transition d-flex flex-column overflow-hidden">
        {children}
      </div>
    </div>
  );
}
