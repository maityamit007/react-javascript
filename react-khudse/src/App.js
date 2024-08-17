import AppLayout from "./component/AppLayout/AppLayout";
import CarouselHome from "./component/Carousel/CarouselHome";
import DynamicForm from "./component/DynamicForm/DynamicForm";
import Ecommerce from "./component/Ecommerce/Ecommerce";
import InfiniteScroll from "./component/InfiniteScrolling/InfiniteScroll";
import Pagination from "./component/Pagination/Pagination";
import ProgressBar from "./component/ProgressBar/ProgressBar";
import StarRating from "./component/StarRating/StarRating";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  let router = createBrowserRouter([
    {
      element: <AppLayout />,
      path: "/",
      children: [
        {
          element: <CarouselHome />,
          path: '/carousel'
        },
        {
          element: <DynamicForm />,
          path: '/dynamic-form'
        }, {
          element: <InfiniteScroll />,
          path: '/infinite-scroll'
        }, {
          element: <Pagination />,
          path: '/pagination'
        }, {
          element: <ProgressBar />,
          path: '/progress-bar'
        }, {
          element: <StarRating />,
          path: '/star-rating'
        }, {
          element: <Ecommerce />,
          path: '/e-commerce'
        },
      ]
    }])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
