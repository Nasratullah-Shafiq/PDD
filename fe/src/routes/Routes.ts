import Home from "../pages/Home/Index";
import About from "../pages/About/Index";
import Diagnostic from "../pages/Diagnostic/Index";


const ROUTES = Object.freeze([
    {
        name: "Diagnostic",
        key: "diagnostic",
        route: "/diagnostic",
        component: Diagnostic,
        protected: false,
    },
    {
        name: "Home",
        key: "home",
        route: "/",
        component: Home,
        protected: false,
    },
    {
        name: "About",
        key: "about",
        route: "/about",
        component: About,
        protected: false,
    },
])

export function findRouteByName(name: string){
    return ROUTES.find(route => route.key == name)
}

export function findRouteByPath(path: string){
    return ROUTES.find(route => route.route == path)
}

export default ROUTES