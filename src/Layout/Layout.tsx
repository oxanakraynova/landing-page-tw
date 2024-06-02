import React from "react";

function Layout(props: { children: React.ReactNode }) {
  return <div className="container mx-auto">{props.children}</div>;
}

export default Layout;
