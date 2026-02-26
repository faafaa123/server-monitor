import type { JSXElement } from "@fluentui/react-components";
import { Divider, List, ListItem, makeStyles } from "@fluentui/react-components";
import { Title } from "../utils/Title";
import { Tag, Badge } from "@fluentui/react-components";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../providers/SocketContext";

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

    const [superLazyState, setSuperLazyState] = useState([])

    const socketClient = useContext(SocketContext);

    useEffect(() => {

        const handleSuperLazyStats = (data: any) => {

            console.log(data)

            setSuperLazyState(data.mongoDb);

        };

        socketClient.on("superLazyStats", handleSuperLazyStats);

        return () => {
            socketClient.off("superLazyStats", handleSuperLazyStats);
        };

    }, []);

    const listItems = superLazyState.map(collection =>

        <>

            <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>

                <Tag size="medium">{collection.collectionName}</Tag>

                <Badge appearance="outline" size="large">{collection.storageSize} MB</Badge>

            </ListItem>

            <Divider />

        </>

    )

    return (

        <div className={styles.main}>

            <Title>Mongo-DB</Title>

            <List>

                {listItems}

            </List>



        </div>

    );

};