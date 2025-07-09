import { Body, Dashboard, Login } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route element={<Dashboard />} index />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
