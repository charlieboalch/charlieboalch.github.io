import {BioComponent} from "./components/home/BioComponent";
import {InfoComponent} from "./components/home/InfoComponent";
import React from "react";
import {ContentView} from "./components/global/ContentView";

function Home() {
    return <>
        <title>Charlie Boalch | Home</title>
        <ContentView>
            <BioComponent/>
            <InfoComponent/>
        </ContentView>
    </>
}

export default Home
