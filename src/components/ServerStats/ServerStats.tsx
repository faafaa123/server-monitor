import { makeStyles, Caption1, Text, tokens } from "@fluentui/react-components";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import chip from '../../assets/chip.png'
import ram from '../../assets/ram.png'
import disk from '../../assets/disk.png'
import { Title } from "../utils/Title";
import { useContext } from "react";
import { SocketContext } from "../../providers/SocketContext";

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

    horizontalCardImage: {
        width: "64px",
        height: "64px",
    },

    caption: {
        color: tokens.colorNeutralForeground3,
    },

    text: { margin: "0" },
});

export default function ServerStats() {

    const styles = useStyles();

    const data = useContext(SocketContext);

    console.log(data)

    return (

        <div className={styles.main}>

            <Title>Resource-Usage</Title>

            <section className={styles.section}>

                <Card className={styles.card} orientation="horizontal" size="small">

                    <CardPreview className={styles.horizontalCardImage}>

                        <img className={styles.horizontalCardImage} src={chip} alt="Chip" />

                    </CardPreview>

                    <CardHeader header={<Text weight="semibold">CPU</Text>} description={<Caption1 className={styles.caption}>{data?.serverStats.cpu} %</Caption1>} />

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