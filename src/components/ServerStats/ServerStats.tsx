import { makeStyles, Caption1, Text, tokens } from "@fluentui/react-components";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import chip from '../../assets/chip.png'
import ram from '../../assets/ram.png'
import disk from '../../assets/disk.png'
import { Title } from "../utils/Title";
import { useContext, useEffect, useState } from "react";
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

    const [state, setState] = useState(null)

    const socketClient = useContext(SocketContext);

    useEffect(() => {

        const handleLazyStats = (data: any) => {

            setState(data);

        };

        socketClient.on("lazyStats", handleLazyStats);

        return () => {
            socketClient.off("lazyStats", handleLazyStats);
        };

    }, []);

    return (

        <div className={styles.main}>

            <Title>Resource-Usage</Title>

            <section className={styles.section}>

                <Card className={styles.card} orientation="horizontal" size="small">

                    <CardPreview className={styles.horizontalCardImage}>

                        <img className={styles.horizontalCardImage} src={chip} alt="Chip" />

                    </CardPreview>

                    <CardHeader header={<Text weight="semibold">CPU</Text>} description={<Caption1 className={styles.caption}>{state ? state.cpu : 0} %</Caption1>} />

                </Card>

            </section>

            <section className={styles.section}>

                <Card className={styles.card} orientation="horizontal" size="small">

                    <CardPreview className={styles.horizontalCardImage}>

                        <img className={styles.horizontalCardImage} src={ram} alt="RAM" />

                    </CardPreview>

                    <CardHeader header={<Text weight="semibold">RAM</Text>} description={<Caption1 className={styles.caption}>{state ? state.ram.ramUsed : 0} MB of {state ? state.ram.ramTotal : 0} MB used</Caption1>} />

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