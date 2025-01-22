import { Routes, Route } from "react-router";
import Layout from "./components/layout/layout";
import Products from "./components/products/products";

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
    </Routes>
  );
}

export default App;
