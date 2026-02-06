import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import { Divider, List, ListItem, makeStyles } from "@fluentui/react-components";
import { tokens, Text, makeResetStyles } from "@fluentui/react-components";
import { Title } from "../utils/Title";
import { Tag, Badge } from "@fluentui/react-components";

const useStyles = makeStyles({

    main: {
        gap: "6px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },

});

const useTextStyle = makeResetStyles({
    color: tokens.colorNeutralForeground1,
});

export const MongoDb = (): JSXElement => {

    const styles = useStyles();

    const textStyle = useTextStyle();

    return (

        <div className={styles.main}>

            <Title>Mongo-DB</Title>

            <List>

                <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <Tag size="medium">cropChunks</Tag>
                    <Badge appearance="outline">245,21 MB</Badge>
                </ListItem>

                 <Divider />

                <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <Tag size="medium">countryBorders</Tag>
                    <Badge appearance="outline">23,84 KB</Badge>
                </ListItem>
                
            </List>

        </div>

    );

};