import { useMantineTheme, Text, Container, Anchor } from '@mantine/core';

const About = () => {
    const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid>
                <div style={{ marginBottom: 25 }}>
                    <Text color={theme.colors.blue[7]}>
                        <h1 className="title">A simple portfolio template</h1>
                    </Text>
                </div>
                <div>
                    <Text size="xl">
                        Simple showcase of this powerful and well implemented library called <Anchor href="https://mantine.dev/" target="_blank">Mantine</Anchor>.
                    </Text>
                </div>
            </Container>

            
        </section>
    );
};

export default About;