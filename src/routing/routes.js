import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./layout";
import ItemPage from "./ItemPage";

const instruments = [
  { id: 0, name: "Guitare", type: "string" },
  { id: 1, name: "Piano", type: "string" },
  { id: 2, name: "Saxophone", type: "wind" },
];


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage data={instruments}/> },
      { path: "/:id", element: <ItemPage item={instruments}/> },
    ],
  },
]);

export default router;
