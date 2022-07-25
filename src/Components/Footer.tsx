import { useMantineTheme, Container, Grid, Text, Button } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.yellow[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={9} lg={9}>
                        
                        <Text size="xl" weight={700} color="white" mb="20px">A simple Mantine template</Text>

                        <Text color="white" mb="10px">
                            You can do anything you want with this template, from portfolios to other stuff.
                        </Text>

                        <Text color="white" mb="20px">
                            You can find the illustrations I used on <a href="https://icons8.com/" style={{ color: "hwb(238deg 42% 16%)" }}>www.icons8.com</a>
                        </Text>

                        <Button variant="white" color="black" onClick={() => redirectToLink('https://mantine.dev/')}>Check out Mantine</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                        <Text size="xl" weight={700} color="white" mb="10px">
                            Template made by
                        </Text>
                        <a href="https://github.com/Giuseppetm" style={{ color: "hwb(238deg 42% 16%)" }}>
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