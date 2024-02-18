export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'profession',
            title: 'Profession',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'resume',
            title: 'Resume',
            description: "Upload your resume (PDF)",
            type: 'file'
        },
        {
            name: 'intro',
            title: 'Introduction',
            description: "A brief overview of who you are and what you do.",
            type: 'text',
            validation: Rule => [Rule.required().min(100).error('A description of min. 100 characters is required'),
            Rule.max(500).error('A feedback of max. 500 characters is allowed'),
            ]
        },
        {
            name: 'bio',
            title: 'Bio',
            description: "Describe about yourself in more detail. This can include your background, skills, interests, etc.",
            type: 'text',
            validation: Rule => [Rule.required().min(200).error('A description of min. 300 characters is required'),
            Rule.max(500).error('A feedback of max. 500 characters is allowed'),
            ]
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'document',
            fields: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    validation: Rule => Rule.required(),
                },
                {
                    name: 'alt',
                    title: "Image Description",
                    description: "Describe the image for SEO purposes.",
                    type: 'string'
                },
                {
                    name: 'credit',
                    title: 'Credit / Source',
                    type: 'string',
                }
            ]
        },
        {
            name: 'aboutImage',
            title: 'About Image',
            type: 'document',
            fields: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    validation: Rule => Rule.required(),
                },
                {
                    name: 'alt',
                    title: "Image Description",
                    description: "Describe the image for SEO purposes.",
                    type: 'string'
                },
                {
                    name: 'credit',
                    title: 'Credit / Source',
                    type: 'string',
                }
            ]
        },
    ]
}