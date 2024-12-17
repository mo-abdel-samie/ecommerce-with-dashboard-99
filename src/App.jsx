import { Link, useRoutes } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard/Dashboard";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/admin/Products/Products";
import AdminLayout from "./layouts/admin/AdminLayout";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <h1>
          Home Page <Link to="/admin/dashboard">Dashboard</Link>{" "}
        </h1>
      ),
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <>
      {console.log("*******(App)*********")}
      <ProductProvider>{routes}</ProductProvider>
    </>
  );
}

export default App;
