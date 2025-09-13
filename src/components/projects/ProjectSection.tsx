import React from "react";
import {ProjectProps} from "./project.types";
import {Link, styled, Typography} from "@mui/material";
import {ContentView} from "../global/ContentView";
// @ts-ignore
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const TextDescription = styled('div')`
    flex: 2;
`

const ImageDescription = styled('div')`
    flex: 1;
    margin: auto;
`

const Divider = styled('hr')`
    border: 1px solid lightgray;
    margin: 30px 15% 30px 15%;
`

export const ProjectSection = ({title, description, images, reversed}: ProjectProps) => {
    const mappedImages = images.map(e => {
        return {
            original: e
        }
    });

    const imageGallery = (mappedImages.length != 0) ? <ImageDescription>
        <ImageGallery
            items={mappedImages}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            showNav={false}
        />
    </ImageDescription> : <div></div>

    const mappedDescription = description.map((e) => <Typography style={{textAlign: (reversed) ? "right" : "left"}} variant="h5">{e}</Typography>)

    return <>
        <ContentView style={{justifyContent: "space-between", gap: "20px", flexDirection: (reversed) ? "row-reverse" : "row"}}>
            <TextDescription>
                <Container>
                    <Typography color="primary" variant="h3" style={{fontWeight: "bold", textAlign: (reversed) ? "right" : "left"}}>{title}</Typography>
                    {...mappedDescription}
                </Container>
            </TextDescription>
            {imageGallery}
        </ContentView>
        <Divider/>
    </>
};