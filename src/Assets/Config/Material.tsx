import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#34ceb7",
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff"
        },
        text: {
            primary: "#fff"
        }
    }
})

export default theme