import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Trade } from "./components/trade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="trade" element={<Trade />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
