import { useMantineTheme } from '@mantine/core';
import About from "../Components/About";
import SectionOne from '../Components/SectionOne';
import SectionTwo from '../Components/SectionTwo';

const Content = () => {
    const theme = useMantineTheme();
    
    return (
        <>
            <About />

            <SectionOne />

            <SectionTwo />
            { /* Other sections .. */ }
        </>
    )
};

export default Content;