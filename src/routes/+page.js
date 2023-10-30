import {getResumeData} from "$lib/scripts/resume.js";

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
    const resume = await getResumeData(fetch);

    return {
        resume: resume
    }
}