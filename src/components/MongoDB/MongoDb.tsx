import type { JSXElement } from "@fluentui/react-components";
import { Divider, List, ListItem, makeStyles } from "@fluentui/react-components";
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

export const MongoDb = (): JSXElement => {

    const styles = useStyles();

    return (

        <div className={styles.main}>

            <Title>Mongo-DB</Title>

            <List>

                <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <Tag size="medium">cropChunks</Tag>
                    <Badge appearance="outline" size="large">245,21 MB</Badge>
                </ListItem>

                 <Divider />

                <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <Tag size="medium">countryBorders</Tag>
                    <Badge appearance="outline" size="large">23,84 KB</Badge>
                </ListItem>

                   <Divider />

                <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <Tag size="medium">subChunks</Tag>
                    <Badge appearance="outline" size="large">321,43 MB</Badge>
                </ListItem>
                
            </List>

        </div>

    );

};