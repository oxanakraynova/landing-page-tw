import React from "react";

function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="container max-w-screen-2xl lg:py-30 lg:px-36.5 md:py-15 md:px-30 sm:px-8 py-12">
      {props.children}
    </div>
  );
}

export default Layout;
