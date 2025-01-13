import { useState } from "react"
import Mission from "./components/Mission"
import Team from "./components/Team"
import PageSection from "../../components/CardSection"



const Index = () => {

    const Items = [
        {
            name: "Our Mission",
            component: <Mission />
        },
        {
            name: "Team",
            component: <Team />
        }
    ]
    const [activeItem, setActiveItem] = useState<number>(0)

    return <>
        <PageSection 
            Items={Items}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
        />
    </>
}

export default Index