import { extendTheme } from "@chakra-ui/react";
import { Colors } from "./Colors";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Card } from "./Card";

export const theme = extendTheme({
    colors: Colors,
    components: {
        Button,
        Badge,
        Card
    },
});