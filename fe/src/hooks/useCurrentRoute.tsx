import { useLocation } from "react-router-dom";
import { findRouteByPath } from "../routes/Routes";


const useCurrentRoute = () => {
    const location = useLocation()
    const currentPath = location.pathname
    const route = findRouteByPath(currentPath)
    return route ? route : null
}

export default useCurrentRoute