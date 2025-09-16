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

interface ReversedProps {
    reversed?: boolean
}

const SectionView = styled(ContentView)<ReversedProps>`
    justify-content: space-between;
    gap: 20px;

    @media screen and (min-width: 769px) {
        flex-direction: ${props => (props.reversed ? 'row-reverse' : 'row')};
    }
`

const SectionText = styled(Typography)<ReversedProps>`
    @media screen and (min-width: 769px) {
        text-align: ${props => (props.reversed ? 'right' : 'left')};
    }

    @media screen and (max-width: 769px) {
        text-align: center;
    }
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
            showFullscreenButton={true}
            showPlayButton={false}
            showBullets={true}
            showNav={false}
        />
    </ImageDescription> : <div></div>

    const mappedDescription = description.map((e) => <SectionText reversed={reversed} variant="h5">{e}</SectionText>)

    return <>
        <SectionView reversed={reversed}>
            <TextDescription>
                <Container>
                    <SectionText color="primary" variant="h3" reversed={reversed} style={{
                        fontWeight: "bold",
                    }}>{title}</SectionText>
                    {...mappedDescription}
                </Container>
            </TextDescription>
            {imageGallery}
        </SectionView>
        <Divider/>
    </>
};