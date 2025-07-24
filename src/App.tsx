import {styled, Typography} from "@mui/material";
import {BioComponent} from "./components/BioComponent";
import {InfoComponent} from "./components/InfoComponent";
import React from "react";

const ContentView = styled('div')`
    display: flex;
    padding: 0 15% 0 15%;
    overflow: hidden;
    max-height: 100vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 2% 0 2%;
    }

    @media screen and (max-width: 1080px) {
        padding: 0 2% 0 2%;
    }
`

function App() {
    return <>
        <title>Charlie Boalch | Home</title>
        <ContentView>

            <BioComponent/>
            <InfoComponent/>
        </ContentView>
    </>
}

export default App
