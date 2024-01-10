import MainPage from "./routing/MainPage";
import router from "./routing/routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <MainPage />
      </RouterProvider>
    </>
  );
};

export default App;
