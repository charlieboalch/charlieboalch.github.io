import React from "react";
import {ProjectSection} from "./components/projects/ProjectSection";
import {ProjectProps} from "./components/projects/project.types";

// TODO: add images to PetVR section
const projectsData: ProjectProps[] = [
    {
        title: "Swimming Finals Predictor",
        description: [
            "As part of my STAT 4210H class, I made a model that predicts the odds of a swimmer making finals in their event using data from the 2026 College Club Nationals meet. I used to swim, and this was an interesting exercise in fitting models and using them with real world data.",
            "I scraped the data from the website using a Python script (over 3500 data points!) and did the rest of the analysis in R. The model uses multivariate logistic regression with five predictors. The results of the regression fitting revealed that factors like heat, gender, event, and time improvement were all significant influences on the odds of a swimmer making finals.",
            "The model was also accurate (almost surprisingly so). Generating a confusion matrix of the test set revealed high accuracy and sensitivity, and moderate specificity. The model also appeared to be very well calibrated, though tending towards slight underconfidence in upper probabilities. We figured that this was because most of the sample didn't make finals, causing the model to lean more conservative when making predictions.",
            "I learned a lot from this project and it made me realize that this field is something that I want to pursue further. I'll be looking into analyzing more data and fitting more complex models in the future."
        ],
        images: ["/projects/finals-3.png", "/projects/finals-1.png", "/projects/finals-2.png"],
        reversed: false
    },
    {
        title: "Song to Movie",
        description: [
            "Song to Movie is a website that gives the most similar movies to a given song. I wanted to combine my love for music and film in a fun and interactive way.",
            "Media is scored on six different dimensions - mood, energy, grittiness, tension, romance, and humor. These are extracted from movie plots and song lyrics using SBERT and roBERTa, and fine-tuned by genre, user tags, and Spotify's audio feature data. Song vectors are matched to movies using cosine and L2 similarity searches.",
            "Part of this project was inspired by prior research from UC Berkeley (https://www.ischool.berkeley.edu/projects/2023/moviemood). I thought their approach was flawed, however, because they only used 4 dimensions and their mood vectors were generated using LLMs. I aimed to improve on their approach by using more deterministic models that specialized in emotion embeddings.",
            "The web interface is built using React and Material UI. Parts of the site are disabled due to Spotify's (annoying) restrictions on account authorization."
        ],
        images: ["/projects/song-movie-1.png", "/projects/song-movie-2.png", "/projects/song-movie-3.png"],
        reversed: true
    },
    {
        title: "UGA Dining Analysis",
        description: [
            "While at UGA, I was curious about trends in the capacity of the dining halls here. This is an ongoing project where I'm collecting data about how full they are over the course of several weeks.",
            "I discovered an internal API while looking at the official dining hall capacity website, and wrote a Python script to poll the endpoint using requests every 5 minutes. The collected data been visualized using matplotlib.",
            "Once I have enough data, I plan to run an analysis to reveal trends, forecast usage patterns, and build a model of the typical day at the dining halls. ",
        ],
        images: ["/projects/uga-1.png"],
        reversed: false
    },
    {
        title: "CREWS",
        description: [
            "CREWS is a sophisticated suite of tools I created for an online community I'm active in. It functions as both a management framework and a data archive, running multiple background services and allowing users to access large amounts of data.",
            "I served as a full stack developer, building multiple websites, a robust backend, and a set of Python microservices. The websites are built using either Svelte or React, depending on the domain accessed, with a backend developed in Spring Boot and PostgreSQL used for database management.",
            "Each part of CREWS runs in its own Docker container and is deployed automatically using GitHub Actions. The websites are hosted behind Nginx as a reverse proxy.",
            "CREWS deals with a large amount of data, and I had to find ways to search and visualize several hundred thousand rows in a smooth and performant way. I also had to minimize downtime for critical services. CREWS is currently stable and in active use, but I'm continually looking for ways to improve it and integrate new technologies."
        ],
        images: [
            "/projects/crews-1.png",
            "/projects/crews-2.png",
            "/projects/crews-5.png",
            "/projects/crews-3.png",
            "/projects/crews-4.png",
            "/projects/crews-6.png"
        ],
        reversed: true
    }
]

export const Projects = () => {
    const mappedProjects = projectsData.map(e => <ProjectSection {...e} />)

    return (
        <>
            <title>Charlie Boalch | Projects</title>
            {...mappedProjects}
        </>
    );
};