import React from "react";

type Props = {
  children: React.ReactNode;
  paddingZero?: boolean;
};

const Container = (props: Props) => {
  return (
    <div
      className={`container mx-auto ${props.paddingZero ? 0 : "px-6 lg:px-10"}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
