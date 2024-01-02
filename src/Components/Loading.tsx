import React from "react";

const style: React.CSSProperties = {
    border: "3px solid var(--color-2)",
    borderRightColor: "var(--color-3)",
    width: "var(--gap)",
    height: "var(--gap)",
    borderRadius: "50%",
    animation: "spin 1s infinite",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

const divStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const Loading = () => {
  return (
    <div className="box mb" style={divStyle}>
        <div style={style}></div>
    </div>
  );
};

export default Loading;
