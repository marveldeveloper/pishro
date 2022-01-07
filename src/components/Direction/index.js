import React from "react";
import { Text } from "..";
import "./index.scss";
export default function Direction({ value = [] }) {
  return (
    <div className="Direction d-flex align-items-center">
      {value.map((item, index) => (
        <React.Fragment key={index}>
          <span
            className={`text-${
              index !== value.length - 1 ? "secondary" : "blue"
            }`}
          >
            <Text value={item} />
          </span>
          {index !== value.length - 1 && (
            <i className="fs-6 mx-2 bi bi-chevron-left" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
