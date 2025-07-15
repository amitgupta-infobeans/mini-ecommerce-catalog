import { Body, Dashboard, Login } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route element={<Dashboard />} index />
            <Route path="product-details/:id" element={<ProductDetails />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
