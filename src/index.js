import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./contexts/Cart.context";
import { CategoriesProvider } from "./contexts/Categories.context";
import { UserProvider } from "./contexts/User.context";
import "./index.scss";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* running React Router in a web browser. A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack. */}
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
