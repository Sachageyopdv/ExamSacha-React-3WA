import HomePage from "./routing/MainPage";
import router from "./routing/routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <HomePage />
      </RouterProvider>
    </>
  );
};

export default App;
