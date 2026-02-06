import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import { makeStyles, Button, Caption1, Text, tokens, Subtitle1 } from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import chip from '../../assets/chip.png'
import ram from '../../assets/ram.png'
import disk from '../../assets/disk.png'

const useStyles = makeStyles({
    main: {
        gap: "6px",
        display: "flex",
        flexDirection: "column",
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

    title: { margin: "0 0 12px" },

    horizontalCardImage: {
        width: "64px",
        height: "64px",
    },

    caption: {
        color: tokens.colorNeutralForeground3,
    },

    text: { margin: "0" },
});

const Title = ({ children }: React.PropsWithChildren<{}>) => {

    const styles = useStyles();

    return (
        <Subtitle1 as="h4" block className={styles.title}>
            {children}
        </Subtitle1>
    );

};

export default function ServerStats() {

    const styles = useStyles();

    return (

        <div className={styles.main}>

            <section className={styles.section}>

                <Title>Resource-Usage</Title>

                <Card className={styles.card} orientation="horizontal" size="small">

                    <CardPreview className={styles.horizontalCardImage}>

                        <img className={styles.horizontalCardImage} src={chip} alt="Chip" />

                    </CardPreview>

                    <CardHeader header={<Text weight="semibold">CPU</Text>} description={<Caption1 className={styles.caption}>71.71 %</Caption1>} />

                </Card>

            </section>

            <section className={styles.section}>

                <Card className={styles.card} orientation="horizontal" size="small">

                    <CardPreview className={styles.horizontalCardImage}>

                        <img className={styles.horizontalCardImage} src={ram} alt="RAM" />

                    </CardPreview>

                    <CardHeader header={<Text weight="semibold">RAM</Text>} description={<Caption1 className={styles.caption}>7135.73 MB of 8105.04 MB used</Caption1>} />

                </Card>

            </section>

            <section className={styles.section}>

                <Card className={styles.card} orientation="horizontal" size="small">

                    <CardPreview className={styles.horizontalCardImage}>

                        <img className={styles.horizontalCardImage} src={disk} alt="Disk" />

                    </CardPreview>

                    <CardHeader header={<Text weight="semibold">Disk</Text>} description={<Caption1 className={styles.caption}>12 GB of 256 GB used</Caption1>} />

                </Card>

            </section>

        </div>

    );

}