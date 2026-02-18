import { Field, ProgressBar } from "@fluentui/react-components";
import './Header.css'
import favicon from '../../assets/favicon.png'


export default function Header() {

    return (

        <header>

            <img style={{width: "48px", position: "absolute", left: "32px"}} src={favicon} alt="Chip" />

            <h1 style={{position: "absolute", left: "100px", top: "10px", fontSize: "36px"}}>oDrivee.de</h1>

            <h1>Server and Application Monitor</h1>

            <Field validationState="none">
                <ProgressBar />
            </Field>

        </header>

    )

}