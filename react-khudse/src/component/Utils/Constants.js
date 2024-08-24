import CarouselHome from "../../component/Carousel/CarouselHome";
import DynamicForm from "../../component/DynamicForm/DynamicForm";
import Ecommerce from "../../component/Ecommerce/Ecommerce";
import InfiniteScroll from "../../component/InfiniteScrolling/InfiniteScroll";
import NestedComments from "../../component/NestedComments/NestedComments";
import Pagination from "../../component/Pagination/Pagination";
import ProgressBar from "../../component/ProgressBar/ProgressBar";
import StarRating from "../../component/StarRating/StarRating";

export const MenuComponents = {
    CAROUSEL: {
        element: <CarouselHome />,
        title: 'Carousel',
        path: '/carousel'
    },
    DYNAMIC_FORM: {
        element: <DynamicForm />,
        title: 'Dynamic Form',
        path: '/dynamic-form'
    },
    INFINITE_SCROLL: {
        element: <InfiniteScroll />,
        title: 'Infinite Scroll',
        path: '/infinite-scroll'
    },
    PAGINATION: {
        element: <Pagination />,
        title: 'Pagination',
        path: '/pagination'
    },
    PROGRESS_BAR: {
        element: <ProgressBar />,
        title: 'Progress Bar',
        path: '/progress-bar'
    },
    STAR_RATING: {
        element: <StarRating />,
        title: 'Star Rating',
        path: '/star-rating'
    },
    E_COMMERCE: {
        element: <Ecommerce />,
        title: 'E Commerce',
        path: '/e-commerce'
    },
    NESTED_COMMENTS: {
        element: <NestedComments />,
        title: 'Nested Comments',
        path: '/nested-comments'
    },
}