import { useMantineTheme, Container, Grid, Text, Button } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.yellow[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={9} lg={9}>
                        
                        <Text size="xl" weight={700} color="white" style={{ marginBottom: 20 }}>A simple Mantine template</Text>
                        <Text color="white" style={{ marginBottom: 20 }}>
                            You can do anything you want with this template, from portfolios to other stuff.
                        </Text>
                        <Button variant="white" color="black" onClick={() => redirectToLink('https://mantine.dev/')}>Check out Mantine</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                        <Text size="xl" weight={700} color="white" style={{ marginBottom: 10 }}>
                            Template made by
                        </Text>
                            <a href="https://github.com/Giuseppetm" style={{ color: "white" }}>
                                Giuseppetm
                            </a>
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