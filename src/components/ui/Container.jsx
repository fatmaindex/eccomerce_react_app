import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      className={
        "max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 w-full" +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
};

export default Container;

