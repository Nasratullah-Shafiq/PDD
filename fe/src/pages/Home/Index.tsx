import { useState } from "react"
import Welcome from "./components/Welcome"
import Works from "./components/Works"
import Contact from "./components/Contact"
import PageSection from "../../components/CardSection"



const Index = () => {

    const Items = [
        {
            name: "Welcome to LeafLens",
            component: <Welcome />
        },
        {
            name: "How It Works",
            component: <Works />
        },
        {
            name: "Contact Us",
            component: <Contact />
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