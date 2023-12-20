"use client";

import React from "react";

const ButtonGradient = ({
  title = "Gradient Button",
  onClick = () => { },
}: {
  title?: string;
  onClick?: () => void;
}) => {
  return (
    <button className="btn-gradient btn animate-shimmer" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonGradient;
