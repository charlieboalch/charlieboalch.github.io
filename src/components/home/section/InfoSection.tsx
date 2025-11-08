import {List, ListItem, ListItemIcon, styled, Typography} from "@mui/material";
import HorizontalRule from '@mui/icons-material/HorizontalRule';
import React from "react";

const InfoBody = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const Title = styled(Typography)`
    border-bottom: 1px solid lightgray;
    width: 100%;
    height: 1.5em;
    margin-bottom: 10px;
`

const SpacedBetween = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`

const SpacedDiv = styled('div')`
    margin-bottom: 20px;
`

const SubSection = ({projectTitle, startDate, endDate, description, bullets}: SectionData) => {
    const descriptionMap = (description != null) ? description?.map(e => <Typography key={e} variant="h6">{e}</Typography>) : []

    return (
        <SpacedDiv>
            <SpacedBetween>
                <Typography fontWeight={"bold"} variant="h5">{projectTitle}</Typography>
                <Typography variant="h6">{(endDate != null) ? `${startDate} - ${endDate}` : startDate}</Typography>
            </SpacedBetween>
            <div>
                {...descriptionMap}
            </div>
            <List sx={{padding: 0}}>
                {bullets.map(e => (
                    <div>
                        <ListItem sx={{padding: "2px", marginBottom: "2px"}}>
                            <ListItemIcon>
                                <HorizontalRule />
                            </ListItemIcon>
                            <Typography variant="h6">{e}</Typography>
                        </ListItem>
                    </div>
                ))}
            </List>
        </SpacedDiv>
    )
}

export const InfoSection = ({sectionTitle, sectionData}: SectionProps) => {
    return (
        <InfoBody>
            <Title fontWeight={"bold"} color="primary" variant="h4">{sectionTitle}</Title>
            {sectionData.map(e => <SubSection {...e}/>)}
        </InfoBody>
    )
}