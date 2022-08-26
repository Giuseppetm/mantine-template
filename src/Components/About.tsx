import { Text, Container, Anchor, Grid, MediaQuery, Image, Button, Chip } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
    //const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid>
                <Grid justify="center" align="center">

                    <Grid.Col sm={12} md={8} lg={8}>
                        <div style={{ marginBottom: 25 }}>
                            <Text>
                                <MediaQuery query="(max-width: 1200px)" styles={{ fontSize: '2.5rem !important' }}>
                                    <h1 className="title">Simple Mantine Template</h1>
                                </MediaQuery>
                            </Text>
                        </div>
                        <div style={{ marginBottom: 25 }}>
                            <Text size="xl" color="black">
                                Simple showcase of this powerful and well implemented library called <Anchor href="https://mantine.dev/" target="_blank">Mantine</Anchor>.
                            </Text>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 10, marginBottom: 25 }}>
                            <Chip value="typescript" checked color="yellow">Typescript</Chip>
                            <Chip value="hooks" checked color="yellow">A lot of hooks</Chip>
                        </div>

                        <Link to="section-one" smooth duration={500}>
                            <Button color="yellow" rightIcon={<MdOutlineArrowDownward size={16} />}>Tell me more</Button>
                        </Link>
                    </Grid.Col>

                    <Grid.Col sm={12} md={4} lg={4} className="center-mobile">
                        <Image src={require('../Images/lime-travel.png')} alt="Logo" />
                    </Grid.Col>

                </Grid>
            </Container>

        </section>
    );
};

export default About;