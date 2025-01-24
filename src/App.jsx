import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { SharedLayout } from "./components/sharedLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
