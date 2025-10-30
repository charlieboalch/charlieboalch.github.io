import {Link, Stack, styled, Typography} from "@mui/material";
import React from "react";
import {FaGithub, FaGithubSquare, FaLinkedin} from "react-icons/fa";

const ProfilePicture = styled('img')`
    border-radius: 50%;
`

const BioBox = styled("div")`
    display: flex;
    align-content: center;
    flex-direction: column;
    gap: 16px;
    flex: 1;
`

const Panel = styled("div")`
    align-content: center;
`

const InfoContainer = styled('div')`
    display: flex;
    gap: 20px;
    margin-top: 5%;
`

const Icons = styled('div')`
    display: flex;
    align-items: center;
    padding-top: 10px;
    gap: 10px;
`

const IconButton = styled('a')`
    color: black;
    
    :visited {
        color: black;
    }
`

const openLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
}

export const BioComponent = () => {
    return <>
        <BioBox>
            <InfoContainer>
                <Panel>
                    <ProfilePicture src={"/uga_mug.png"} width={200} height={200}/>
                </Panel>
                <Panel style={{width: "50%"}}>
                    <Typography color="primary" variant="h4" style={{fontWeight: "bold"}}>Charlie Boalch</Typography>
                    <Typography variant="h5">Computer Science @ UGA</Typography>

                    <Icons>
                        <IconButton href={"https://www.linkedin.com/in/charlie-boalch"} target={"_blank"}>
                            <FaLinkedin size={"2em"}/>
                        </IconButton>
                        <IconButton href={"https://github.com/charlieboalch"} target={"_blank"}>
                            <FaGithub size={"2em"}/>
                        </IconButton>
                    </Icons>
                </Panel>
            </InfoContainer>
        </BioBox>
    </>
}