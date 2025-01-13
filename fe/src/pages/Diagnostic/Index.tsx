import DiagnosticProvider from "../../contexts/DiagnosticContext"
import DiagnosticForm from "./components/DiagnosticForm"
import DiagnosticResult from "./components/DiagnosticResult"
import { useContext } from "react"
import { DiagnosticContext } from "../../contexts/DiagnosticContext"


const Content = () => {
    const {submited} = useContext(DiagnosticContext)
    return <>
        {
            submited == false ? <DiagnosticForm /> : <DiagnosticResult />
        }
    </>
}

const Index = () => {
    return <>
        <DiagnosticProvider>
            <Content />
        </DiagnosticProvider>
    </>
}

export default Index
