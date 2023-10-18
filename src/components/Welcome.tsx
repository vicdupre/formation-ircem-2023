import React from "react";

interface WelcomeProps {
 name : string | null,
 children : React.ReactNode
}

const Welcome = (props : WelcomeProps) => {
  const { name, children } = props;
  return (
    <div>
      <p>Hello {name}</p>
      {children}
    </div>
  );
};


Welcome.defaultProps = {
  name: "World",
};

export default Welcome;
