import { createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import Layout from "./layout";
import ItemPage from "./ItemPage";
import guitar from "./../img/Guitare.jpg";
import saxophone from "./../img/Saxophone.jpg";
import piano from "./../img/Piano.jpg";

const instruments = [
  { id: 0, name: "Guitare", type: "Cordes", imgsrc: guitar },
  { id: 1, name: "Piano", type: "Cordes", imgsrc: piano },
  { id: 2, name: "Saxophone", type: "Vent", imgsrc: saxophone },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage data={instruments} /> },
      { path: "/:id", element: <ItemPage item={instruments} /> },
    ],
  },
]);

export default router;
