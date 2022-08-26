import { Button, Badge, Burger, Drawer, Code, Title, Anchor, Text } from '@mantine/core';
import { UnstyledButton, Group, Avatar } from '@mantine/core';
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    //const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <header>
            <div className="content-desktop">
                <div>
                    <Badge size="lg" radius={10} color="yellow">A simple Mantine template</Badge>
                </div>
                <div className="navbar">
                    <div className="navbar-item"><Link to="section-one" smooth duration={500}>Carousel</Link></div>
                    <div className="navbar-item"><Link to="section-four" smooth duration={500}>Cards</Link></div>
                    <div className="navbar-item"><Link to="section-five" smooth duration={500}>FAQS</Link></div>

                    <Button color="yellow" onClick={() => redirectToLink('https://mantine.dev/')}>Check out Mantine</Button>
                </div>
            </div>

            <div className="content-mobile">
                <div className="burger-button">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={title}
                        size="sm"
                    />
                </div>

                <Drawer
                    transition="rotate-right"
                    transitionDuration={250}
                    transitionTimingFunction="ease"
                    overlayOpacity={0.55}
                    position="right"
                    closeButtonLabel="Close drawer"
                    title="Menu"
                    padding="xl"
                    opened={opened}
                    onClose={() => setOpened(false)}
                >
                    <div className="menu">
                        <div className="menu-items">
                            <div className="menu-item"><Link to="section-one" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Carousel</Title></Link></div>
                            <div className="menu-item"><Link to="section-four" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Cards</Title></Link></div>
                            <div className="menu-item"><Link to="section-five" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>FAQs</Title></Link></div>
                        </div>

                        <div className="menu-items">
                            <Text>Contact</Text>

                            <Anchor href="mailto:example@mail.com">
                                example@mail.com
                            </Anchor>
                        </div>

                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
                            Template made by
                            <Anchor href="https://github.com/Giuseppetm">
                                <UnstyledButton>
                                    <Group>
                                        <Avatar size={40} color="orange">GDC</Avatar>
                                        <div>
                                            <Text>Giuseppetm</Text>
                                            <Text size="xs" color="dimmed">giuseppe.delcampo@outlook.com</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Anchor>
                        </Code>
                    </div>
                </Drawer>
            </div>
        </header>
    );
};

export default Header;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};