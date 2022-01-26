import { useMantineTheme, Container, Grid, Text, Button, Image, Popover } from '@mantine/core';
import React from 'react';

const Footer = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    
    return (
        <footer style={{ backgroundColor: theme.colors.blue[7]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                        <Text size="xl" weight={700} color="white" style={{ marginBottom: 20 }}>A simple portfolio template</Text>
                        <Text color="white" style={{ marginBottom: 20 }}>
                            You can do anything you want with this template, from portfolios to other stuff.
                        </Text>
                        <Button variant="white" onClick={() => redirectToLink('https://mantine.dev/')}>Check out Mantine</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4} style={{ textAlign: 'center' }}>
                        <Text size="xl" weight={700} color="white" style={{ marginBottom: 10 }} align="center">
                            Template made by:
                        </Text>
                        <Popover position="top" placement="center" gutter={10} opened={opened} onClose={() => setOpened(false)} target={
                            <a href="https://github.com/Giuseppetm">
                                <Image
                                    src={require("../Images/gdc.png")}
                                    alt="Giuseppetm"
                                    radius="md"
                                    width={50}
                                    height={50}
                                    onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}
                                />
                            </a>
                        }>
                            <Text size="sm">Giuseppetm</Text>
                        </Popover>
                    </Grid.Col>

                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};