import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "@/app/App.jsx";
import AppProviders from "@/app/providers/AppProviders";
import "@/styles/globals.css";

let bootLoaderDismissed = false;

async function clearDevServiceWorkers() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  const registrations = await navigator.serviceWorker.getRegistrations();

  await Promise.all(registrations.map((registration) => registration.unregister()));
}

function dismissBootLoader() {
  if (bootLoaderDismissed) {
    return;
  }

  bootLoaderDismissed = true;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.body.classList.add("app-ready");
      window.setTimeout(() => {
        document.getElementById("boot-loader")?.remove();
      }, 420);
    });
  });
}

if (import.meta.env.DEV) {
  clearDevServiceWorkers().finally(() => {
    dismissBootLoader();
  });
} else {
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      updateSW(true);
    },
    onRegisteredSW() {
      dismissBootLoader();
    },
    onRegisterError() {
      dismissBootLoader();
    },
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);

dismissBootLoader();
