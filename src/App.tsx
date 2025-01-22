import { Routes, Route } from "react-router";
import Layout from "./components/layout/layout";
import Products from "./components/products/products";
import SingleProduct from "./components/single-product/single-product";

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
