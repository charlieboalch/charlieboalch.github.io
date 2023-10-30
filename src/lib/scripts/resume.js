const dataUrl = "https://raw.githubusercontent.com/charlieboalch/charlieboalch.github.io/master/data/sitedata.json";

export const getResumeData = async (fetch) => {
    const response = await fetch(dataUrl);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}