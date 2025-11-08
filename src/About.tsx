import React from "react"
import {List, ListItem, ListItemText, styled, Typography} from "@mui/material";
import {ContentView} from "./components/global/ContentView";

const AboutBody = styled('div')`
    display: block;
    width: 100%;
    
    hr {
        border: 1px solid lightgray;
        margin-bottom: 20px;
    }
`


export const About = () => {
    return <>
        <title>Charlie Boalch | About</title>
        <ContentView>
            <AboutBody>
                <Typography fontWeight={"bold"} color="primary" variant={"h4"} >Contact</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary={<Typography variant={'h6'}>Personal Email</Typography>}
                                      secondary={<Typography><a href={'mailto:charlieboalch@gmail.com'}>charlieboalch@gmail.com</a></Typography>}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={<Typography variant={'h6'}>Educational Email</Typography>}
                                      secondary={<Typography><a href={'mailto:Charles.Boalch@uga.edu'}>Charles.Boalch@uga.edu</a></Typography>}/>
                    </ListItem>
                </List>

                <hr/>

                <Typography fontWeight={"bold"} color="primary" variant={"h4"} >Resume</Typography>

                <List>
                    <ListItem>
                        <ListItemText secondary={<Typography><a href={"/resume/c_boalch_resume_2025.pdf"}>2025 Resume PDF</a></Typography>}/>
                    </ListItem>
                </List>
                
                <hr/>

                <Typography fontWeight={"bold"} color="primary" variant={"h4"} >Site Information</Typography>

                <List>
                    <ListItem>
                        <ListItemText secondary={<Typography>Built using React and Material UI. <a href={"https://github.com/charlieboalch/charlieboalch.github.io"}>Source code</a>.</Typography>}/>
                    </ListItem>
                </List>
            </AboutBody>
        </ContentView>
    </>
}