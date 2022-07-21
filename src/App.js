import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
