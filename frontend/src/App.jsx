import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  SingleHotel,
  SearchResults,
  Wishlist,
  Payment,
  OrderSummary,
} from "../src/pages";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home />} />

      {/* Route for single hotel reservation */}
      <Route
        path="/hotels/:name/:address/:id/reserve"
        element={<SingleHotel />}
      />

      {/* Route for searching hotels */}
      <Route path="/hotels/:address" element={<SearchResults />} />

      {/* Route for the general hotels listing page */}
      <Route path="/hotels" element={<SearchResults />} />

      {/* Wishlist route */}
      <Route path="/wishlists" element={<Wishlist />} />

      {/* Payment route */}
      <Route path="/confirm-booking/stay/:id" element={<Payment />} />

      {/* Order summary route */}
      <Route path="/order-summary" element={<OrderSummary />} />

      {/* Fallback route for unmatched paths */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;


// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import {
//   Home,
//   SingleHotel,
//   SearchResults,
//   Wishlist,
//   Payment,
//   OrderSummary
// } from "../src/pages";
// import "./App.css";


// function App() {


//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route
//         path="/hotels/:name/:address/:id/reserve"
//         element={<SingleHotel />}
//       />
//       <Route path="/hotels/:address" element={<SearchResults />} />
//       <Route path="/wishlists" element={<Wishlist />} />
//       <Route path="/confirm-booking/stay/:id" element={<Payment />} />
//       <Route path="/order-summary" element={<OrderSummary />} />
//     </Routes>
//   )
// }

// export default App
