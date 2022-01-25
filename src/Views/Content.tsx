import { useMantineTheme } from '@mantine/core';
import About from "../Components/About";

const Content = () => {
    const theme = useMantineTheme();
    
    return (
        <>
            <About />
            { /* Other sections .. */ }
        </>
    )
};

export default Content;