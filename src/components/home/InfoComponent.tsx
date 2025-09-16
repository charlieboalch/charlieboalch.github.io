import {styled} from "@mui/material";
import {InfoSection} from "./section/InfoSection";
import React from "react";

const InfoBox = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-top: 30px;
    padding-right: 10px;
    overflow-y: auto;
`

export const InfoComponent = () => {
    return (
        <InfoBox>
            <InfoSection sectionTitle={"Education"} sectionData={[
                {
                    projectTitle: "The University of Georgia",
                    startDate: "2025",
                    endDate: "Present",
                    description: ["B.S. Computer Science and Statistics", "Morehead Honors College"],
                    bullets: []
                },
                {
                    projectTitle: "Paul Duke STEM High School",
                    startDate: "2021",
                    endDate: "2025",
                    description: ["High School Diploma"],
                    bullets: []
                }
            ]}></InfoSection>
            <br></br>
            <InfoSection sectionTitle={"Experience"} sectionData={[
                {
                    projectTitle: "Pacific Diversified Services",
                    startDate: "2024",
                    endDate: "Present",
                    description: ["Machine Operator"],
                    bullets: [
                        "Operated specialized optical fiber cleaning machinery",
                        "Assisted with managerial tasks",
                        "Developed Python scripts to streamline data entry"
                    ]
                },
                {
                    projectTitle: "Sears Pool Management",
                    startDate: "2022",
                    endDate: "2023",
                    description: ["Lifeguard"],
                    bullets: [
                        "Watched patrons to maintain pool safety",
                        "Worked with chemicals to uphold health standards"
                    ]
                }
            ]}></InfoSection>
            <br></br>
            <InfoSection sectionTitle={"Certifications"} sectionData={[
                {
                    projectTitle: "CompTIA Security+ (SY0-601)",
                    startDate: "2024",
                    endDate: null,
                    description: ["CompTIA"],
                    bullets: []
                },
                {
                    projectTitle: "CIW Site Development Associate",
                    startDate: "2024",
                    endDate: null,
                    description: ["Certification Partners"],
                    bullets: []
                },
                {
                    projectTitle: "Unity Certified Associate - Game Developer",
                    startDate: "2024",
                    endDate: null,
                    description: ["Unity"],
                    bullets: []
                },
                {
                    projectTitle: "Information Technology Specialist in Software Development",
                    startDate: "2023",
                    endDate: null,
                    description: ["Certiport"],
                    bullets: []
                }
            ]}></InfoSection>
        </InfoBox>
    )
}