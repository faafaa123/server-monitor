import type { JSXElement } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";
import { Title } from "../utils/Title";
import { ChunkCard } from "./utils/ChunkCard";

const useStyles = makeStyles({

    main: {
        gap: "6px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },

});

export const Application = (): JSXElement => {

    const styles = useStyles();

    return (

        <div className={styles.main}>

            <Title>Application</Title>

            <ChunkCard/>

        </div>

    );

};
