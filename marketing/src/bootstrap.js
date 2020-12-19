import React from "react";
import ReactDOM from "react-dom";

// Mount function to start up the app
const mountMarketing = (element) => {
  ReactDOM.render(<h1>Marketing</h1>, element);
};

// If we are in development and isolation,
// call mount immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mountMarketing(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mountMarketing };
