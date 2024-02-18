export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
    ]
}