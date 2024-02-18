export interface technologyTypes {
    name: string,
    icon: string,
    color: string | null,
    documentation: URL,
}
export interface educationInfoTypes {
    _id: string;
    course: string,
    institute: string,
    location: string,
    startYear: string,
    endYear: string,
}

export interface projectTypes {
    _id: string,
    title: string,
    projectLink?: URL,
    githubLink?: URL,
    coverImage: string,
    technologies: technologyTypes[],
    features: string[],
}

export interface socialLinksTypes {
    github: URL,
    linkedin: URL,
    twitter: URL,
    facebook?: URL
}