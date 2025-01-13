import React, { ReactNode } from "react";
import Card from "./Card";
import Item from "./Item";

interface PageSectionProps{
    Items: {
        name: string,
        component: ReactNode
    }[],
    activeItem: number,
    setActiveItem: (index: number) => void
}

const PageSection: React.FC<PageSectionProps> = ({
    Items,
    activeItem,
    setActiveItem
}) => {
  return (
    <>
      <Card
        className="bg-[#9c9797] flex flex-col items-start 
            gap-5 justify-between max-h-max card  w-2/3 p-10"
      >
        <ul className="flex flex-wrap gap-4 font-semibold">
          {Items.map((item, index) => (
            <Item
              key={index}
              isActive={index == activeItem}
              name={item.name}
              index={index}
              setActiveItem={setActiveItem}
              className="shadow-md"
            />
          ))}
        </ul>
        <div className="w-full p-2">{Items[activeItem].component}</div>
      </Card>
    </>
  );
};

export default PageSection