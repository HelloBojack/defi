import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.dark.css";
import "./style/index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { connectors } from "./utils/wallet";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Web3ReactProvider connectors={connectors}>
    <Provider store={store}>
      <App />
    </Provider>
  </Web3ReactProvider>
);
