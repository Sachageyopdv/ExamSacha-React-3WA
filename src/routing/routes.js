import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./layout";
import ItemPage from "./ItemPage";
import guitar from "./../img/Guitare.jpg"
import saxophone from "./../img/Saxophone.jpg"
import piano from "./../img/Piano.jpg"

const instruments = [
  { id: 0, name: "Guitare", type: "string", imgsrc: guitar },
  { id: 1, name: "Piano", type: "string", imgsrc: piano },
  { id: 2, name: "Saxophone", type: "wind", imgsrc: saxophone },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage data={instruments} /> },
      { path: "/:id", element: <ItemPage item={instruments} /> },
    ],
  },
]);

export default router;
