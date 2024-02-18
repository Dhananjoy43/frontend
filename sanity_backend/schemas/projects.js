export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{
                type: 'string',
                validation: Rule => Rule.required(),
            }],
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'url',
        },
        {
            name: 'githubLink',
            title: 'Github Link',
            type: 'url',
        },
        {
            name: 'cover',
            title: 'Cover  Image',
            description: "This image will be used as the project's cover",
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [
                {
                    name: 'technology',
                    title: 'Technology',
                    type: 'reference',
                    to: [{ type: 'technology' }],
                }
            ]
        },

    ],
};