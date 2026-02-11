import * as React from "react";
import { makeStyles, LargeTitle } from "@fluentui/react-components";

const useStyles = makeStyles({

    title: { margin: "12px auto 24px auto" },
});

export const Title = ({ children }: React.PropsWithChildren<{}>) => {

    const styles = useStyles();

    return (
        <LargeTitle as="h4" block className={styles.title}>
            {children}
        </LargeTitle>
    );

};