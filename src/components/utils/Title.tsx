import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import { makeStyles, Button, Caption1, Text, tokens, Subtitle1, LargeTitle } from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

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