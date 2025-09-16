import {Link, Stack, styled, Typography} from "@mui/material";
import React from "react";

const ProfilePicture = styled('img')`
    border-radius: 50%;
`

const BioBox = styled("div")`
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 16px;
    flex: 1;
`

const Panel = styled("div")`
    align-content: center;
`

const InfoContainer = styled('div')`
    display: flex;
    gap: 20px;
    height: 20%;
    margin-top: 5%;
`

export const BioComponent = () => {
    return <>
        <BioBox>
            <InfoContainer>
                <Panel>
                    <ProfilePicture src={"/uga_mug.png"} width={200} height={200}/>
                </Panel>
                <Panel>
                    <Typography color="primary" variant="h3" style={{fontWeight: "bold"}}>Charlie Boalch</Typography>
                    <Typography variant="h4">Computer Science @ UGA</Typography>
                </Panel>
            </InfoContainer>
        </BioBox>
    </>
}