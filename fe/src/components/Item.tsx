import React, { useEffect } from "react";
import { findRouteByName } from "../routes/Routes";
import { Link } from "react-router-dom";
import useCurrentRoute from "../hooks/useCurrentRoute";
import { useLocation } from "react-router-dom";

interface ItemProps{
    index: number,
    isActive?: boolean,
    setActiveItem: (index: number) => void, 
    name: string,
    className?: string
}

const Item: React.FC<ItemProps> = ({
  isActive = false, name, setActiveItem, index, className
}) => {
  const route = findRouteByName(name.toLowerCase())
  const location = useLocation()
  const currentRoute = useCurrentRoute()
  useEffect(() => {
    
    if (currentRoute?.name.includes(name)) setActiveItem(index)
  }, [location])
  return <>
    <Link
      to={route?.route || ""}
    >
      <li 
          className={`${isActive ? 'active': ''} text-sm duration-100 ease-linear ${className}`}
          onClick={() => setActiveItem(index)}
      >
        {name}
      </li>
    </Link>
  </>
}

export default Item