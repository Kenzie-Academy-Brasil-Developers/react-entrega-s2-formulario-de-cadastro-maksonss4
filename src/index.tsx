import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";
import { ToastContainer } from "react-toastify";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Providers>
      <App />
      <ToastContainer />
    </Providers>
  </BrowserRouter>
);
