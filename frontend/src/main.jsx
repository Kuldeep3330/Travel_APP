import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {
  CategoryProvider,
  DateProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
  HotelProvider,
  AlertProvider,
} from "./context";

// Combine all providers into a single wrapper component
const AppProviders = ({ children }) => (
  <CategoryProvider>
    <DateProvider>
      <FilterProvider>
        <AuthProvider>
          <WishlistProvider>
            <HotelProvider>
              <AlertProvider>{children}</AlertProvider>
            </HotelProvider>
          </WishlistProvider>
        </AuthProvider>
      </FilterProvider>
    </DateProvider>
  </CategoryProvider>
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>
);
