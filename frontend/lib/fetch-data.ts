import { client } from "@/lib/sanity";

export const getSocialLinks = async () => {
    const quary = `*[_type == 'socialLinks']{
            github,
            twitter,
            linkedin,
            facebook
    }`
    const socialLinks = await client.fetch(quary);
    return socialLinks[0];
}

export const getHeroData = async () => {
    const quary = `*[_type == 'about']{
            name,
            intro,
            profession,
            "heroImage":{
                    "url":heroImage.image.asset._ref,
                    "alt":heroImage.image.alt
                },
            "resume":resume.asset._ref
    }`
    const heroData = await client.fetch(quary);
    return heroData[0];
}

export const getAboutInfo = async () => {
    const quary = `*[_type == 'about']{
            bio,
            "aboutImage":{
                    "url":aboutImage.image.asset._ref,
                    "alt":aboutImage.image.alt
                },
            _id
    }`;
    const aboutData = await client.fetch(quary);
    return aboutData[0];
};

export const getEducationInfo = async () => {
    const quary = `*[_type == 'education']| order(period.startYear desc){
            _id,
            course,
            institute,
            location,
            "startYear": period.startYear,
            "endYear": period.endYear,
    }`
    const educationData = await client.fetch(quary);
    return educationData;
}

export const getSkilllsInfo = async () => {
    const quary = `*[_type == 'skills']{
            title,
            technologies[]->{
                name,
                "icon":icon.asset._ref,
                color,
                documentation
            }
    }`
    const skillsData = await client.fetch(quary);
    return skillsData;
}

export const getProjectsInfo = async () => {
    const quary = `*[_type == 'projects']{
            _id,
            title,
            projectLink,
            githubLink,
            "coverImage":cover.asset._ref,
            technologies[]->{
                name,
                "icon":icon.asset._ref,
                color,
                documentation
            },
            features[]
    }`
    const projectsData = await client.fetch(quary);
    return projectsData;
}

export const getContactInfo = async () => {
    const quary = `*[_type == 'contact']{
            email,
            "contactImage":contactImage.asset._ref
    }`
    const contactData = await client.fetch(quary);
    return contactData[0];
}