import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
  },
  { path: "/:id", element: <ProductPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
