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
                    projectTitle: "Georgia Institute of Technology",
                    startDate: "2024",
                    endDate: "2025",
                    description: ["Dual Enrollment Student"],
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
            <InfoSection sectionTitle={"Work Experience"} sectionData={[
                {
                    projectTitle: "Pacific Diversified Services",
                    startDate: "2024",
                    endDate: "2025",
                    description: ["Machine Operator"],
                    bullets: [
                        "Operated and monitored specialized machinery for fiber optic spool cleaning",
                        "Developed custom Python applications to automate and streamline repetitive managerial tasks",
                        "Facilitated communication and workplace engagement between coworkers of different language"
                    ]
                },
                {
                    projectTitle: "Sears Pool Management",
                    startDate: "2022",
                    endDate: "2023",
                    description: ["Lifeguard"],
                    bullets: [
                        "Actively monitored dozens of pool patrons and took initiative during safety incidents",
                        "Worked with various volatile chemicals to ensure pool hygiene and uphold health standard",
                        "Collaborated with teammates to create a safe and welcoming environment during operating hours"
                    ]
                }
            ]}></InfoSection>
            <br></br>
            <InfoSection sectionTitle={"Community Experience"} sectionData={[
                {
                    projectTitle: "UGA Coaching4Success",
                    startDate: "2025",
                    endDate: null,
                    description: ["Student Volunteer"],
                    bullets: [
                        "Oversee and participate in engaging and educational lessons with elementary aged student",
                        "Assist with post-event maintenance operations and coordinate with school administration"
                    ]
                }
            ]} />
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