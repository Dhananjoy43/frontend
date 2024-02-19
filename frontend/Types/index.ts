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

export interface skillsTypes {
    _id: string,
    title: string,
    technologies: technologyTypes[],
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

export interface contactInfoTypes {
    email: string,
    contactImage: string
}