import Admin from "./pages/Admin"
import {ADMIN_ROUTE, AGENCY_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TOUR_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Agency from "./pages/Agency";
import Auth from "./pages/Auth";
import TourPage from "./pages/TourPage";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: AGENCY_ROUTE,
        Component: Agency
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: TOUR_ROUTE + '/:id',
        Component: TourPage
    },

]
