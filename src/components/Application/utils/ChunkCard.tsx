import type { JSXElement } from "@fluentui/react-components";
import {
    makeStyles,
    Card,
    CardFooter,
    CardHeader,
    Badge,
    Divider,
    List,
    ListItem,
    Tag,
    Spinner,
    Body2,
    Title1,
} from "@fluentui/react-components";

const useStyles = makeStyles({
        main: {
        gap: "6px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    card: {
        width: "360px",
        maxWidth: "100%",
        height: "fit-content",
    },
    section: {
        width: "fit-content",
    },

});

export const ChunkCard = (): JSXElement => {
    const styles = useStyles();

    return (

        <div className={styles.main}>

            <section className={styles.section}>

                <Card className={styles.card}>
                    <CardHeader
                        header={
                            <Title1>Chunks</Title1>
                        }
                    />

                    <List>

                        <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                            <Tag size="medium">total number of chunks</Tag>
                            <Badge appearance="outline" size="large">124</Badge>
                        </ListItem>

                        <Divider />

                        <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                            <Tag size="medium">createable chunks</Tag>
                            <Badge appearance="outline" size="large">2720</Badge>
                        </ListItem>

                        <Divider />

                        <ListItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                            <Tag size="medium">square meters</Tag>
                            <Body2>48,32 m² / 10.232,30 m²</Body2>
                        </ListItem>

                    </List>

                    <CardFooter style={{ display: "flex", justifyContent: "center" }}>
                        <Spinner labelPosition="before" label="Creating chunks 2 / 9" />
                    </CardFooter>
                </Card>

            </section>



        </div>

    );
};