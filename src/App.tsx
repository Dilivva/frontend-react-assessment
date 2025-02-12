import { Routes, Route } from "react-router";
import Layout from "./components/layout/layout";
import Products from "./pages/products/products";
import SingleProduct from "./pages/single-product/single-product";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/:id"
        element={
          <Layout>
            <SingleProduct />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
