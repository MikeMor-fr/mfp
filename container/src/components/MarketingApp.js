import { mountMarketing } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketing(ref.current);
  });

  return <div ref={ref} />;
};

export default MarketingApp;
