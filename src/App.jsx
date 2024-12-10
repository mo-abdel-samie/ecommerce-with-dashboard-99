import { Link, useRoutes } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard/Dashboard";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/admin/Products/Products";

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

  return routes;
}

export default App;
