import React, {useState} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import CoconutCalculator from "./calculator/CoconutCalculator";
import {createMuiTheme} from "@material-ui/core";
import { lightBlue } from '@material-ui/core/colors';

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    primary: lightBlue,
                    type: prefersDarkMode ? 'dark' : 'light'
                },
            }),
        [prefersDarkMode],
    );

    const [coconuts, setCoconuts] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <div className="header">InfoArmor Code Challenge</div>
                    <code>
                        An island is inhabited by five men and a pet monkey. One afternoon the men gathered a large pile of coconuts, which they proposed to divide equally among themselves the next morning. During the night one of the men awoke and decided to help himself to his share of the nuts. In dividing them into five equal parts he found that there was one nut left over. This one he gave to the monkey. He then hid his one-fifth share, leaving the rest in a single pile. Later during the night another man awoke with the same idea in mind. He went to the pile, divided it into five equal parts, and found that there was one coconut left over. This he gave to the monkey, and then he hid his one-fifth share, restoring the rest to one pile. During the same night each of the other three men arose, one at a time, and in ignorance of what had happened previously, went to the pile, and followed the same procedure. Each time one coconut was left over, and it was given to the monkey. The next morning al] five men went to the diminished nut pile and divided it into five equal parts. finding that one nut remained over. What is the least number of coconuts the original pile could have contained?
                    </code>
                    <CoconutCalculator setCoconuts={setCoconuts} />
                    <div className="coconut-answer">Minimum amount of coconuts: {coconuts}</div>
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
