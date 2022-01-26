import { Accordion, Text, Container, Title, Badge } from '@mantine/core';

const SectionFour = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-one">
            <Container>
                <div>
                    <div style={{ textAlign: 'left'}}><Badge variant="filled">FAQs</Badge></div>
                    <Text color="black">
                        <Title order={1} style={{ marginTop: 10 }}>Woah, Frequently asked questions here</Title>
                    </Text>
                </div>
                <Accordion>
                    <Accordion.Item label="Is Dennis Farina famous?">
                        Yes, of course.
                    </Accordion.Item>

                    <Accordion.Item label="Are pineapples good?">
                        Unfortunately no.
                    </Accordion.Item>

                    <Accordion.Item label="Do bananas fly?">
                        No :(
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );

};

export default SectionFour;