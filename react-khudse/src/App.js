import AppLayout from "./component/AppLayout/AppLayout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MenuComponents } from "./component/Utils/Constants";


function App() {
  let router = createBrowserRouter([
    {
      element: <AppLayout />,
      path: "/",
      children: Object.keys(MenuComponents).map((ele)=> MenuComponents[ele])
    }])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
