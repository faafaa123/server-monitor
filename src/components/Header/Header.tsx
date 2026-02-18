import { Field, ProgressBar } from "@fluentui/react-components";
import './Header.css'



export default function Header() {


    return (
        <header>
            <h1>Server and Application Monitor</h1>
            <Field validationState="none">
                <ProgressBar />
            </Field>
        </header>
    )

}