import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const SectionOne = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-one">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>You can put whatever you want here</Title>
                                Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike.
                                In 1998's "Saving Private Ryan," directed by Steven Spielberg, Farina played "Col. Anderson," a pivotal role in the film.
                            </Text>
                        </div>
                        <Button color="yellow">Check it out</Button>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../Images/lime-surfing.png')} alt={'sample1'} style={{ width: '100%', maxWidth: 300 }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default SectionOne;