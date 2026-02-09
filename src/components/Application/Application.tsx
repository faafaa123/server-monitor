import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import { Divider, List, ListItem, makeStyles, Spinner } from "@fluentui/react-components";
import { tokens, Text, makeResetStyles } from "@fluentui/react-components";
import { Title } from "../utils/Title";
import { Tag, Badge } from "@fluentui/react-components";
import { Field, ProgressBar } from "@fluentui/react-components";
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
