import { Route, Routes } from "react-router-dom";
import { Authentication, Home, Navigation, Shop } from "./routes";
import Checkout from "./routes/checkout/Checkout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
