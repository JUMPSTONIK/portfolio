import { extendTheme } from "@chakra-ui/react";
import { Colors } from "./Colors";
import { Button } from "./Button";

export const theme = extendTheme({
    colors: Colors,
    components: {
        Button
    },
});