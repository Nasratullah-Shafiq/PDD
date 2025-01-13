import { useState } from "react";
import Item from "../components/Item";

const ItemList = ["Home", "Diagnostic", "About"];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <>
      <nav
        className="fixed bg-[#ECE8E8] inset-x-2 py-2 top-5
        flex justify-between px-20 shadow-md rounded-full items-center
        z-50"
      >
        <div className="font-bold cursor-pointer text-lg">LeafLens</div>
        <ul className="flex gap-2 font-semibold">
          {ItemList.map((item, index) => (
            <Item 
              key={index}
              isActive={index == activeItem} 
              name={item} 
              index={index}
              setActiveItem={setActiveItem}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
