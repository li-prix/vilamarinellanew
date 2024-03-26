import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./locale/en/global.json";
import global_pt from "./locale/pt/global.json";
import App from "./App.jsx";
import "./index.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "auto",
  fallbackLng: "pt",
  resources: {
    en: {
      global: global_en,
    },
    pt: {
      global: global_pt,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
