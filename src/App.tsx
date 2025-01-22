import { Routes, Route } from "react-router";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <h1>Homepage</h1>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
