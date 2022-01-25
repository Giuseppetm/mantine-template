import { useMantineTheme, Button, Badge } from '@mantine/core';

const Header = () => {
    const theme = useMantineTheme();

    return (
        <header>
            <div className="content">
                <div>
                    <Badge size="lg" radius={10} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>A simple portfolio template</Badge>
                </div>
                <div>
                    <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Check out Mantine</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;