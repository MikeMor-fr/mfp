import { mountDashboard } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboard(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
