import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
const mountDashboard = (element) => {
  const app = createApp(Dashboard);
  app.mount(element);
};

// If we are in development and isolation,
// call mount immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mountDashboard(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mountDashboard };
