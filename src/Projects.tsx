import React from "react";
import {ProjectSection} from "./components/projects/ProjectSection";
import {ProjectProps} from "./components/projects/project.types";

// TODO: add images to PetVR section
const projectsData: ProjectProps[] = [
    {
        title: "CREWS",
        description: [
            "CREWS is a sophisticated suite of tools I created for an online community I'm active in. It functions as both a management framework and a data archive, running multiple background services and allowing users to access large amounts of data.",
            "I served as the fullstack developer, building multiple websites, a robust backend, and a set of Python microservices. The websites are built with Svelte and React, the backend uses Spring Boot, and the databases run on PostgreSQL.",
            "Each part of CREWS runs in its own Docker container and is deployed automatically using GitHub Actions. The websites, hosted on separate domains, are served through Nginx acting as a reverse proxy.",
            "CREWS deals with a large amount of data, and I had to find ways to search and visualize several hundred thousand rows in a smooth and performative way. I also had to minimize downtime for critical services. CREWS is currently stable and in active use, but I'm continually looking for ways to improve it and integrate new technologies."
        ],
        images: [
            "/projects/crews-1.png",
            "/projects/crews-2.png",
            "/projects/crews-5.png",
            "/projects/crews-3.png",
            "/projects/crews-4.png",
            "/projects/crews-6.png"
        ],
        reversed: false
    },
    {
        title: "PetVR",
        description: [
            "PetVR is a virtual reality application for Oculus that helps connect potential pet adopters with rescue animals. It places the adopter in an immersive environment where they can interact with the animal before they meet them.",
            "I built the frontend experience in Unity, integrating RESTful APIs to fetch data on adoptable pets. I focused on providing a balance between displaying information to the user and making the interactions feel natural and responsive.",
            "On the backend, I used the Actix Web framework for Rust to provide a middle layer between the frontend and the external API provider. The backend also handled the caching of API responses and scaling to meet load requirements.",
            "All models used in PetVR were found on Thingiverse, but the actual construction of the environment was all done by hand. PetVR won awards for Virtual Reality Simulation at the 2023 National TSA Conference in Louisville."
        ],
        images: [
        ],
        reversed: true
    },
    {
        title: "UGA Dining Analysis",
        description: [
            "While at UGA, I was curious about trends in the capacity of the dining halls here. This is an ongoing project where I'm collecting data about how full they are over the course of several weeks.",
            "I'm fetching data from an internal API that I found while looking at the official dining hall capacity website. I wrote a Python script to poll the endpoint every 5 minutes, and save the results to a file every day.",
            "Once I have enough data, I plan to run an analysis to reveal any trends and build a model of the average day at the dining halls. "
        ],
        images: ["/projects/uga-1.png"],
        reversed: false
    }
]

export const Projects = () => {
    const mappedProjects = projectsData.map(e => <ProjectSection {...e} />)

    return (
        <>
            {...mappedProjects}
        </>
    );
};