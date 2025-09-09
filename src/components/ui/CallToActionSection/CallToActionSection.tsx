import React from "react";
import { Box, Container, Heading, Text, Button, Stack } from "@chakra-ui/react";
import styles from "./CallToActionSection.module.sass";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaUsers } from "react-icons/fa6";

type CallToActionSectionProps = {
    bgColor?: string
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({bgColor = ''}) => {
    return (
        <Box as="section" backgroundColor={bgColor} className={styles["cta-section"]}>
            <Box className={styles["cta-section__container"]}>
                <Box className={styles["cta-section__content"]}>

                    <SectionHeader
                                    title="Ready to Build Something Amazing?"
                                    subtitle="Whether you're looking to create a new application, optimize existing systems, or build a high-performing team, I'd love to discuss how my skills and passion can contribute to your success."
                                    delay={0.8}
                                />

                    <Stack
                        direction={{ base: "column", sm: "row" }}
                        spacing="1rem"
                        justify="center"
                        className={styles["cta-section__button-group"]}
                    >
                        <Button variant="primary">
                            View My Projects
                        </Button>
                        <Button variant="secondary">
                            Get In Touch →
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};
