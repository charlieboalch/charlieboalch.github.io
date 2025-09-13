import {styled} from "@mui/material";

export const ContentView = styled('div')`
    display: flex;
    padding: 0 15% 0 15%;
    overflow: hidden;
    max-height: 100vh;

    @media screen and (max-width: 1080px) {
        padding: 0 5% 0 5%;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 2% 0 2%;
        max-height: none;
    }
`