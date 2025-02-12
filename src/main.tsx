import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import { ProductSearchProvider } from "./contexts/ProductSearchContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ProductSearchProvider>
          <App />
        </ProductSearchProvider>
        <Toaster visibleToasts={1} position="top-right" richColors />
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
